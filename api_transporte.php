<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); 
header("Pragma: no-cache"); 
header("Expires: 0"); 
header('Content-Type: application/json; charset=utf-8');

include 'config.php';

// Establecemos la conexión limpia en UTF-8 general
$conn->set_charset("utf8mb4");
$conn->query("SET NAMES utf8mb4 COLLATE utf8mb4_general_ci");

$geojson = ['type' => 'FeatureCollection', 'features' => []];

// 1. Verificar si existe la tabla frequencies
$tablaFrequenciesExiste = false;
$checkTable = $conn->query("SHOW TABLES LIKE 'frequencies'");
if ($checkTable && $checkTable->num_rows > 0) {
    $tablaFrequenciesExiste = true;
}

if ($tablaFrequenciesExiste) {
    // Consulta limpia directa sin conversiones intermedias
    $subconsultaHorario = "COALESCE(
        (SELECT CONCAT(DATE_FORMAT(f.start_time, '%H:%i'), ' - ', DATE_FORMAT(f.end_time, '%H:%i'))
         FROM trips tr
         INNER JOIN frequencies f ON tr.trip_id = f.trip_id
         WHERE tr.route_id = r.id_ruta 
         LIMIT 1),
        '06:00 - 20:00'
    )";
} else {
    $subconsultaHorario = "'06:00 - 20:00'";
}

// 2. Consulta principal estándar, veloz y sin errores de Collation
$sql = "SELECT 
            t.longitud, 
            t.latitud, 
            t.id_ruta, 
            t.orden,
            r.nombre_largo, 
            r.color_hex, 
            ec.nombre_oficial AS concesionario_oficial,
            ($subconsultaHorario) AS horario_gtfs,
            COALESCE(
                (SELECT tr.service_id FROM trips tr WHERE tr.route_id = r.id_ruta LIMIT 1),
                'Mo-Su'
            ) AS dias_gtfs
        FROM trayectorias t 
        INNER JOIN rutas r ON t.id_ruta = r.id_ruta 
        LEFT JOIN ruta_concesionario rc ON r.id_ruta = rc.id_ruta
        LEFT JOIN empresas_concesionarias ec ON rc.id_empresa = ec.id_empresa
        ORDER BY COALESCE(ec.nombre_oficial, 'Sin Asignar') ASC, t.id_ruta, t.orden";

$result = $conn->query($sql);

if (!$result) {
    header('Content-Type: text/plain; charset=utf-8');
    die("ERROR CRÍTICO EN MYSQL: " . $conn->error);
}

$rutas = [];
while($row = $result->fetch_assoc()) {
    $id = trim($row['id_ruta']); 
    if (!isset($rutas[$id])) {
        $empresaOficial = !empty($row['concesionario_oficial']) ? $row['concesionario_oficial'] : "Concesionario no asignado";
        $dias = ($row['dias_gtfs'] == 'Mo-Su') ? 'Lun - Dom' : (($row['dias_gtfs'] == 'Mo-Fr') ? 'Lun - Vie' : $row['dias_gtfs']);
        
        $rutas[$id] = [
            'nombre'  => !empty($row['nombre_largo']) ? $row['nombre_largo'] : "Ruta " . $id,
            'color'   => $row['color_hex'] ?? '#3498db',
            'empresa' => $empresaOficial,
            'dias'    => $dias,
            'horario' => $row['horario_gtfs'],
            'puntos'  => []
        ];
    }
    $rutas[$id]['puntos'][] = [(float)$row['longitud'], (float)$row['latitud']];
}

foreach ($rutas as $id => $info) {
    if (count($info['puntos']) > 0) {
        $geojson['features'][] = [
            'type' => 'Feature',
            'properties' => [
                'id'      => $id,
                'nombre'  => $info['nombre'],
                'color'   => $info['color'],
                'empresa' => $info['empresa'],
                'dias'    => $info['dias'],
                'horario' => $info['horario']
            ],
            'geometry' => [
                'type' => 'LineString',
                'coordinates' => $info['puntos']
            ]
        ];
    }
}

echo json_encode($geojson, JSON_UNESCAPED_UNICODE);