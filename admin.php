<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administración de Archivos GTFS | Jilotepec</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background-color: #f4f7f6; padding: 40px; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        h2 { margin-top: 0; color: #1f6feb; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 8px; font-weight: 600; }
        input[type="file"] { display: block; width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; }
        button { background: #1f6feb; color: white; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; font-size: 16px; width: 100%; transition: background 0.2s; }
        button:hover { background: #165bb5; }
        .message { margin-top: 20px; padding: 12px; border-radius: 6px; font-size: 14px; }
        .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
    </style>
</head>
<body>

<div class="container">
    <h2>Subir e Importar GTFS Municipal</h2>
    <p>Sube tu archivo comprimido. El sistema creará las tablas necesarias y extraerá automáticamente rutas, trazos, días de servicio y horarios basados en frecuencias.</p>

    <?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    set_time_limit(300); 
    ini_set('memory_limit', '512M');

    include 'config.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['gtfs_file'])) {
        $file = $_FILES['gtfs_file'];

        if ($file['error'] === UPLOAD_ERR_OK) {
            $destino = __DIR__ . '/jilotepec.gtfs.zip';
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);

            if (strtolower($extension) === 'zip') {
                if (move_uploaded_file($file['tmp_name'], $destino)) {
                    
                    $zip = new ZipArchive;
                    if ($zip->open($destino) === TRUE) {

                        // --- PASO PREVIO: AUTO-CREACIÓN Y AJUSTE DE ESQUEMA ---
                        $conn->query("CREATE TABLE IF NOT EXISTS `trips` (
                            `trip_id` VARCHAR(50) NOT NULL,
                            `route_id` VARCHAR(50) NOT NULL,
                            `service_id` VARCHAR(50) NOT NULL,
                            `shape_id` VARCHAR(50) NULL,
                            PRIMARY KEY (`trip_id`),
                            KEY `route_id` (`route_id`)
                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

                        $conn->query("CREATE TABLE IF NOT EXISTS `frequencies` (
                            `trip_id` VARCHAR(50) NOT NULL,
                            `start_time` TIME NOT NULL,
                            `end_time` TIME NOT NULL,
                            `headway_secs` INT NOT NULL,
                            KEY `trip_id` (`trip_id`)
                        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

                        // El GTFS define route_id/shape_id como texto (ej. "SH_MA_01_0"), pero el
                        // esquema original los guardaba como INT. Ampliamos a VARCHAR si hace falta.
                        $tipoActual = $conn->query("SELECT DATA_TYPE FROM information_schema.COLUMNS
                            WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'rutas' AND COLUMN_NAME = 'id_ruta'");
                        $necesitaMigracion = $tipoActual && ($fila = $tipoActual->fetch_assoc()) && $fila['DATA_TYPE'] !== 'varchar';

                        if ($necesitaMigracion) {
                            $conn->query("SET FOREIGN_KEY_CHECKS = 0");
                            $conn->query("ALTER TABLE `trayectorias` DROP FOREIGN KEY `trayectorias_ibfk_1`");
                            $conn->query("ALTER TABLE `rutas` MODIFY `id_ruta` VARCHAR(50) NOT NULL");
                            $conn->query("ALTER TABLE `trayectorias` MODIFY `id_ruta` VARCHAR(50) DEFAULT NULL");
                            $conn->query("ALTER TABLE `trayectorias` ADD CONSTRAINT `trayectorias_ibfk_1`
                                FOREIGN KEY (`id_ruta`) REFERENCES `rutas` (`id_ruta`) ON DELETE CASCADE");
                            $conn->query("SET FOREIGN_KEY_CHECKS = 1");
                        }

                        // Lee un .txt del GTFS y lo devuelve como array de filas asociativas.
                        $leerCsv = function($nombreArchivo) use ($zip) {
                            $datos = $zip->getFromName($nombreArchivo);
                            if ($datos === false) return [];
                            $tempFile = fopen('php://temp', 'r+');
                            fwrite($tempFile, $datos); rewind($tempFile);
                            $cabecera = fgetcsv($tempFile);
                            if (!$cabecera) { fclose($tempFile); return []; }
                            $cabecera[0] = preg_replace('/^\xEF\xBB\xBF/', '', $cabecera[0]); // BOM
                            $filas = [];
                            while (($fila = fgetcsv($tempFile)) !== FALSE) {
                                if (!isset($fila[0]) || $fila[0] === '') continue;
                                $filas[] = array_combine($cabecera, array_pad(array_slice($fila, 0, count($cabecera)), count($cabecera), ''));
                            }
                            fclose($tempFile);
                            return $filas;
                        };

                        $conn->begin_transaction();
                        try {
                            // A. Limpieza controlada de tablas existentes (Incluidas trips y frequencies)
                            $conn->query("SET FOREIGN_KEY_CHECKS = 0");
                            $conn->query("TRUNCATE TABLE trayectorias");
                            $conn->query("TRUNCATE TABLE rutas");
                            $conn->query("TRUNCATE TABLE paradas");
                            $conn->query("TRUNCATE TABLE ruta_concesionario");
                            $conn->query("TRUNCATE TABLE trips");
                            $conn->query("TRUNCATE TABLE frequencies");
                            $conn->query("SET FOREIGN_KEY_CHECKS = 1");

                            // B. Leer agency.txt, routes.txt y trips.txt en memoria.
                            // Una "ruta" de esta aplicación es un sentido de circulación, es decir
                            // un shape del GTFS, no un route_id (una ruta GTFS tiene ida y vuelta).
                            $agencias = [];
                            foreach ($leerCsv('agency.txt') as $fila) {
                                $agencias[$fila['agency_id']] = $fila['agency_name'];
                            }

                            $routesGtfs = [];
                            foreach ($leerCsv('routes.txt') as $fila) {
                                $routesGtfs[$fila['route_id']] = $fila;
                            }

                            $tripsGtfs = $leerCsv('trips.txt');

                            // calendar.txt trae los días como banderas por service_id. Los convertimos
                            // a una etiqueta legible ("Lun - Vie") porque service_id crudo se muestra
                            // en las tarjetas del mapa.
                            $diasSemana = ['monday' => 'Lun', 'tuesday' => 'Mar', 'wednesday' => 'Mié',
                                           'thursday' => 'Jue', 'friday' => 'Vie', 'saturday' => 'Sáb', 'sunday' => 'Dom'];
                            $etiquetaDias = [];
                            foreach ($leerCsv('calendar.txt') as $fila) {
                                $activos = [];
                                foreach ($diasSemana as $columna => $abreviatura) {
                                    if (isset($fila[$columna]) && $fila[$columna] === '1') $activos[] = $abreviatura;
                                }
                                if (!$activos) continue;

                                // Días consecutivos se muestran como rango; si no, se listan.
                                $posiciones = array_keys(array_intersect(array_values($diasSemana), $activos));
                                $consecutivos = ($posiciones[count($posiciones) - 1] - $posiciones[0] + 1) === count($posiciones);
                                $etiquetaDias[$fila['service_id']] = (count($activos) > 2 && $consecutivos)
                                    ? $activos[0] . ' - ' . $activos[count($activos) - 1]
                                    : implode(', ', $activos);
                            }

                            // Un shape por sentido, con su letrero de destino (trip_headsign).
                            $shapes = [];
                            $destinosPorRuta = [];
                            foreach ($tripsGtfs as $fila) {
                                $shape_id = isset($fila['shape_id']) ? $fila['shape_id'] : '';
                                if ($shape_id === '') continue;
                                $route_id = $fila['route_id'];
                                // Este feed deja trip_headsign vacío y pone el destino en trip_short_name.
                                $destino  = isset($fila['trip_headsign']) ? trim($fila['trip_headsign']) : '';
                                if ($destino === '' && isset($fila['trip_short_name'])) $destino = trim($fila['trip_short_name']);
                                if (!isset($shapes[$shape_id])) {
                                    $shapes[$shape_id] = ['route_id' => $route_id, 'destino' => $destino];
                                } elseif ($shapes[$shape_id]['destino'] === '' && $destino !== '') {
                                    $shapes[$shape_id]['destino'] = $destino;
                                }
                                if ($destino !== '') $destinosPorRuta[$route_id][$destino] = true;
                            }

                            // C. Insertar concesionarios y rutas (una por sentido)
                            $stmtRuta = $conn->prepare("INSERT INTO rutas (id_ruta, nombre_corto, nombre_largo, color_hex) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE nombre_corto = VALUES(nombre_corto), nombre_largo = VALUES(nombre_largo), color_hex = VALUES(color_hex)");
                            $stmtEmpresa = $conn->prepare("INSERT IGNORE INTO empresas_concesionarias (nombre_oficial, nombre_corto) VALUES (?, ?)");
                            $stmtBuscaEmpresa = $conn->prepare("SELECT id_empresa FROM empresas_concesionarias WHERE nombre_oficial = ?");
                            $stmtVinculo = $conn->prepare("INSERT INTO ruta_concesionario (id_ruta, id_empresa) VALUES (?, ?) ON DUPLICATE KEY UPDATE id_empresa = VALUES(id_empresa)");

                            foreach ($shapes as $id_ruta => $shape) {
                                $route = isset($routesGtfs[$shape['route_id']]) ? $routesGtfs[$shape['route_id']] : [];

                                $nombre_corto = isset($route['route_short_name']) ? $route['route_short_name'] : '';
                                $nombreRutaGtfs = isset($route['route_long_name']) ? $route['route_long_name'] : '';

                                // Nombre direccional "Origen → Destino": el origen es el letrero del
                                // sentido contrario de la misma ruta GTFS.
                                $destino = $shape['destino'];
                                $origen = '';
                                if ($destino !== '' && isset($destinosPorRuta[$shape['route_id']])) {
                                    foreach (array_keys($destinosPorRuta[$shape['route_id']]) as $otroDestino) {
                                        if ($otroDestino !== $destino) { $origen = $otroDestino; break; }
                                    }
                                }
                                if ($origen !== '' && $destino !== '') {
                                    $nombre_largo = $origen . ' → ' . $destino;
                                } elseif ($destino !== '') {
                                    $nombre_largo = $nombreRutaGtfs . ' → ' . $destino;
                                } else {
                                    $nombre_largo = $nombreRutaGtfs;
                                }

                                $color = (isset($route['route_color']) && $route['route_color'] !== '') ? '#' . $route['route_color'] : '#3388ff';

                                $stmtRuta->bind_param("ssss", $id_ruta, $nombre_corto, $nombre_largo, $color);
                                $stmtRuta->execute();

                                // El concesionario sale de agency.txt, no del nombre corto de la ruta.
                                $agency_id = isset($route['agency_id']) ? $route['agency_id'] : '';
                                $concesionario = isset($agencias[$agency_id]) ? trim($agencias[$agency_id]) : trim($agency_id);
                                if ($concesionario !== '') {
                                    $stmtEmpresa->bind_param("ss", $concesionario, $agency_id); $stmtEmpresa->execute();
                                    $stmtBuscaEmpresa->bind_param("s", $concesionario); $stmtBuscaEmpresa->execute();
                                    $empresa = $stmtBuscaEmpresa->get_result()->fetch_assoc();
                                    if ($empresa) {
                                        $stmtVinculo->bind_param("si", $id_ruta, $empresa['id_empresa']); $stmtVinculo->execute();
                                    }
                                }
                            }

                            // D. Procesar e importar archivo 'trips.txt'
                            $stmtTrip = $conn->prepare("INSERT IGNORE INTO trips (trip_id, route_id, service_id, shape_id) VALUES (?, ?, ?, ?)");
                            foreach ($tripsGtfs as $fila) {
                                $trip_id    = isset($fila['trip_id']) ? $fila['trip_id'] : '';
                                if ($trip_id === '') continue;
                                $service_id = (isset($fila['service_id']) && $fila['service_id'] !== '') ? $fila['service_id'] : '';
                                $service_id = isset($etiquetaDias[$service_id]) ? $etiquetaDias[$service_id] : ($service_id !== '' ? $service_id : 'Lun - Dom');
                                $shape_id   = isset($fila['shape_id']) ? $fila['shape_id'] : NULL;
                                // route_id apunta al sentido (shape), que es lo que guarda `rutas`.
                                $route_id   = ($shape_id !== NULL && $shape_id !== '') ? $shape_id : $fila['route_id'];

                                $stmtTrip->bind_param("ssss", $trip_id, $route_id, $service_id, $shape_id);
                                $stmtTrip->execute();
                            }

                            // E. Procesar e importar archivo 'frequencies.txt'
                            $stmtFreq = $conn->prepare("INSERT INTO frequencies (trip_id, start_time, end_time, headway_secs) VALUES (?, ?, ?, ?)");
                            foreach ($leerCsv('frequencies.txt') as $fila) {
                                $trip_id      = isset($fila['trip_id']) ? $fila['trip_id'] : '';
                                if ($trip_id === '') continue;
                                $start_time   = (isset($fila['start_time']) && $fila['start_time'] !== '') ? $fila['start_time'] : '06:00:00';
                                $end_time     = (isset($fila['end_time']) && $fila['end_time'] !== '') ? $fila['end_time'] : '20:00:00';
                                $headway_secs = isset($fila['headway_secs']) ? (int)$fila['headway_secs'] : 900;

                                $stmtFreq->bind_param("sssi", $trip_id, $start_time, $end_time, $headway_secs);
                                $stmtFreq->execute();
                            }

                            // F. Procesar e importar archivo 'stops.txt'
                            $stmtParada = $conn->prepare("INSERT IGNORE INTO paradas (nombre, latitud, longitud) VALUES (?, ?, ?)");
                            foreach ($leerCsv('stops.txt') as $fila) {
                                $nombre = (isset($fila['stop_name']) && $fila['stop_name'] !== '') ? $fila['stop_name'] : 'Parada';
                                $lat    = isset($fila['stop_lat']) ? (float)$fila['stop_lat'] : 0.0;
                                $lon    = isset($fila['stop_lon']) ? (float)$fila['stop_lon'] : 0.0;
                                $stmtParada->bind_param("sdd", $nombre, $lat, $lon); $stmtParada->execute();
                            }

                            // G. Procesar e importar archivo 'shapes.txt'
                            $stmtTrazo = $conn->prepare("INSERT IGNORE INTO trayectorias (id_ruta, orden, latitud, longitud) VALUES (?, ?, ?, ?)");
                            $trazosOmitidos = 0;
                            foreach ($leerCsv('shapes.txt') as $fila) {
                                $id_ruta = isset($fila['shape_id']) ? $fila['shape_id'] : '';
                                // Sin ruta declarada en trips.txt no hay a qué asociar el trazo.
                                if ($id_ruta === '' || !isset($shapes[$id_ruta])) { $trazosOmitidos++; continue; }
                                $orden   = isset($fila['shape_pt_sequence']) ? (int)$fila['shape_pt_sequence'] : 0;
                                $lat     = isset($fila['shape_pt_lat']) ? (float)$fila['shape_pt_lat'] : 0.0;
                                $lon     = isset($fila['shape_pt_lon']) ? (float)$fila['shape_pt_lon'] : 0.0;
                                $stmtTrazo->bind_param("sidd", $id_ruta, $orden, $lat, $lon); $stmtTrazo->execute();
                            }

                            $conn->commit();
                            clearstatcache(); 
                            
                            $resumen = $conn->query("SELECT
                                (SELECT COUNT(*) FROM rutas) AS rutas,
                                (SELECT COUNT(*) FROM paradas) AS paradas,
                                (SELECT COUNT(*) FROM trayectorias) AS trazos,
                                (SELECT COUNT(*) FROM trips) AS viajes,
                                (SELECT COUNT(*) FROM frequencies) AS frecuencias,
                                (SELECT COUNT(*) FROM empresas_concesionarias) AS empresas")->fetch_assoc();

                            $aviso = $trazosOmitidos > 0
                                ? ' <em>' . $trazosOmitidos . ' puntos de trazo se omitieron por no estar declarados en trips.txt.</em>'
                                : '';

                            echo '<div class="message success"><strong>GTFS importado correctamente.</strong><br>'
                                . $resumen['rutas'] . ' rutas (un sentido cada una) &middot; '
                                . $resumen['empresas'] . ' concesionarios &middot; '
                                . $resumen['paradas'] . ' paradas &middot; '
                                . $resumen['trazos'] . ' puntos de trazo &middot; '
                                . $resumen['viajes'] . ' viajes &middot; '
                                . $resumen['frecuencias'] . ' bloques de frecuencia.' . $aviso . '</div>';

                        } catch (Exception $e) {
                            $conn->rollback();
                            echo '<div class="message error">Error al procesar los datos internos: ' . $e->getMessage() . '</div>';
                        }
                        $zip->close();
                    } else { echo '<div class="message error">Error al descomprimir el archivo ZIP en el servidor.</div>'; }
                } else { echo '<div class="message error">Error al mover el archivo a la carpeta destino.</div>'; }
            } else { echo '<div class="message error">Solo se permiten archivos con formato ZIP.</div>'; }
        } else { echo '<div class="message error">Ocurrió un error al subir el archivo.</div>'; }
    }
    ?>
    <form action="" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label for="gtfs_file">Seleccionar archivo (<code>.zip</code>):</label>
            <input type="file" name="gtfs_file" accept=".zip" required>
        </div>
        <button type="submit">Subir y Automatizar Sistema GTFS</button>
    </form>
</div>

</body>
</html>