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
            $destino = 'C:/xampp/htdocs/jilma/jilotepec.gtfs.zip';
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);

            if (strtolower($extension) === 'zip') {
                if (move_uploaded_file($file['tmp_name'], $destino)) {
                    
                    $zip = new ZipArchive;
                    if ($zip->open($destino) === TRUE) {

                        // --- PASO PREVIO: AUTO-CREACIÓN DE TABLAS DE HORARIOS SI NO EXISTEN ---
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

                            // B. Procesar e importar archivo 'routes.txt'
                            $routesData = $zip->getFromName('routes.txt');
                            if ($routesData) {
                                $tempFile = fopen('php://temp', 'r+');
                                fwrite($tempFile, $routesData); rewind($tempFile);
                                $cabecera = fgetcsv($tempFile); $indices = array_flip($cabecera);
                                
                                $stmtRuta = $conn->prepare("INSERT INTO rutas (id_ruta, nombre_corto, nombre_largo, color_hex) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE nombre_corto = VALUES(nombre_corto), nombre_largo = VALUES(nombre_largo), color_hex = VALUES(color_hex)");
                                $stmtEmpresa = $conn->prepare("INSERT IGNORE INTO empresas_concesionarias (nombre_oficial) VALUES (?)");
                                $stmtBuscaEmpresa = $conn->prepare("SELECT id_empresa FROM empresas_concesionarias WHERE nombre_oficial = ?");
                                $stmtVinculo = $conn->prepare("INSERT INTO ruta_concesionario (id_ruta, id_empresa) VALUES (?, ?) ON DUPLICATE KEY UPDATE id_empresa = VALUES(id_empresa)");
                                
                                while (($fila = fgetcsv($tempFile)) !== FALSE) {
                                    if (!isset($fila[0]) || empty($fila[0])) continue;
                                    $id_ruta      = isset($indices['route_id']) ? $fila[$indices['route_id']] : 'N/A';
                                    $nombre_corto = isset($indices['route_short_name']) ? $fila[$indices['route_short_name']] : 'Concesionario Desconocido';
                                    $nombre_largo = isset($indices['route_long_name']) ? $fila[$indices['route_long_name']] : '';
                                    $color = (isset($indices['route_color']) && !empty($fila[$indices['route_color']])) ? '#' . $fila[$indices['route_color']] : '#3388ff';
                                    
                                    $stmtRuta->bind_param("ssss", $id_ruta, $nombre_corto, $nombre_largo, $color);
                                    $stmtRuta->execute();

                                    $concesionarioLimpio = trim($nombre_corto);
                                    if (!empty($concesionarioLimpio)) {
                                        $stmtEmpresa->bind_param("s", $concesionarioLimpio); $stmtEmpresa->execute();
                                        $stmtBuscaEmpresa->bind_param("s", $concesionarioLimpio); $stmtBuscaEmpresa->execute();
                                        $id_empresa = $stmtBuscaEmpresa->get_result()->fetch_assoc()['id_empresa'];
                                        $stmtVinculo->bind_param("si", $id_ruta, $id_empresa); $stmtVinculo->execute();
                                    }
                                }
                                fclose($tempFile);
                            }

                            // --- NUEVO: C. Procesar e importar archivo 'trips.txt' ---
                            $tripsData = $zip->getFromName('trips.txt');
                            if ($tripsData) {
                                $tempFile = fopen('php://temp', 'r+');
                                fwrite($tempFile, $tripsData); rewind($tempFile);
                                $cabecera = fgetcsv($tempFile); $indices = array_flip($cabecera);

                                $stmtTrip = $conn->prepare("INSERT INTO trips (trip_id, route_id, service_id, shape_id) VALUES (?, ?, ?, ?)");
                                while (($fila = fgetcsv($tempFile)) !== FALSE) {
                                    if (!isset($fila[0]) || empty($fila[0])) continue;
                                    $trip_id    = isset($indices['trip_id']) ? $fila[$indices['trip_id']] : 'N/A';
                                    $route_id   = isset($indices['route_id']) ? $fila[$indices['route_id']] : 'N/A';
                                    $service_id = isset($indices['service_id']) ? $fila[$indices['service_id']] : 'Mo-Su';
                                    $shape_id   = isset($indices['shape_id']) ? $fila[$indices['shape_id']] : NULL;

                                    $stmtTrip->bind_param("ssss", $trip_id, $route_id, $service_id, $shape_id);
                                    $stmtTrip->execute();
                                }
                                fclose($tempFile);
                            }

                            // --- NUEVO: D. Procesar e importar archivo 'frequencies.txt' ---
                            $frequenciesData = $zip->getFromName('frequencies.txt');
                            if ($frequenciesData) {
                                $tempFile = fopen('php://temp', 'r+');
                                fwrite($tempFile, $frequenciesData); rewind($tempFile);
                                $cabecera = fgetcsv($tempFile); $indices = array_flip($cabecera);

                                $stmtFreq = $conn->prepare("INSERT INTO frequencies (trip_id, start_time, end_time, headway_secs) VALUES (?, ?, ?, ?)");
                                while (($fila = fgetcsv($tempFile)) !== FALSE) {
                                    if (!isset($fila[0]) || empty($fila[0])) continue;
                                    $trip_id      = isset($indices['trip_id']) ? $fila[$indices['trip_id']] : 'N/A';
                                    $start_time   = isset($indices['start_time']) ? $fila[$indices['start_time']] : '06:00:00';
                                    $end_time     = isset($indices['end_time']) ? $fila[$indices['end_time']] : '20:00:00';
                                    $headway_secs = isset($indices['headway_secs']) ? (int)$fila[$indices['headway_secs']] : 900;

                                    $stmtFreq->bind_param("sssi", $trip_id, $start_time, $end_time, $headway_secs);
                                    $stmtFreq->execute();
                                }
                                fclose($tempFile);
                            }

                            // E. Procesar e importar archivo 'stops.txt'
                            $stopsData = $zip->getFromName('stops.txt');
                            if ($stopsData) {
                                $tempFile = fopen('php://temp', 'r+');
                                fwrite($tempFile, $stopsData); rewind($tempFile);
                                $cabecera = fgetcsv($tempFile); $indices = array_flip($cabecera);
                                
                                $stmt = $conn->prepare("INSERT IGNORE INTO paradas (nombre, latitud, longitud) VALUES (?, ?, ?)");
                                while (($fila = fgetcsv($tempFile)) !== FALSE) {
                                    if (!isset($fila[0]) || empty($fila[0])) continue;
                                    $nombre = isset($indices['stop_name']) ? $fila[$indices['stop_name']] : 'Parada';
                                    $lat    = isset($indices['stop_lat']) ? $fila[$indices['stop_lat']] : 0.0;
                                    $lon    = isset($indices['stop_lon']) ? $fila[$indices['stop_lon']] : 0.0;
                                    $stmt->bind_param("sdd", $nombre, $lat, $lon); $stmt->execute();
                                }
                                fclose($tempFile);
                            }

                            // F. Procesar e importar archivo 'shapes.txt'
                            $shapesData = $zip->getFromName('shapes.txt');
                            if ($shapesData) {
                                $tempFile = fopen('php://temp', 'r+');
                                fwrite($tempFile, $shapesData); rewind($tempFile);
                                $cabecera = fgetcsv($tempFile); $indices = array_flip($cabecera);
                                
                                $stmt = $conn->prepare("INSERT IGNORE INTO trayectorias (id_ruta, orden, latitud, longitud) VALUES (?, ?, ?, ?)");
                                while (($fila = fgetcsv($tempFile)) !== FALSE) {
                                    if (!isset($fila[0]) || empty($fila[0])) continue;
                                    $id_ruta = isset($indices['shape_id']) ? $fila[$indices['shape_id']] : 'N/A'; 
                                    $orden   = isset($indices['shape_pt_sequence']) ? $fila[$indices['shape_pt_sequence']] : 0;
                                    $lat     = isset($indices['shape_pt_lat']) ? $fila[$indices['shape_pt_lat']] : 0.0;
                                    $lon     = isset($indices['shape_pt_lon']) ? $fila[$indices['shape_pt_lon']] : 0.0;
                                    $stmt->bind_param("sidd", $id_ruta, $orden, $lat, $lon); $stmt->execute();
                                }
                                fclose($tempFile);
                            }

                            $conn->commit();
                            clearstatcache(); 
                            
                            echo '<div class="message success"><strong>¡Éxito Absoluto!</strong> GTFS importado y procesado al 100%. Las tablas de rutas, trazos, paradas, viajes (trips) y bloques de horarios por frecuencias han sido actualizadas y conectadas dinámicamente.</div>';

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