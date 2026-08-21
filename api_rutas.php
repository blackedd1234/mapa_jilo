<?php
include 'config.php';

$geojson = ['type' => 'FeatureCollection', 'features' => []];

// Agrupamos los puntos por cada ruta
$sql = "SELECT id_ruta, latitud, longitud FROM trayectorias ORDER BY id_ruta, orden";
$result = $conn->query($sql);

$rutas = [];
while($row = $result->fetch_assoc()) {
    $rutas[$row['id_ruta']][] = [(float)$row['longitud'], (float)$row['latitud']];
}

foreach ($rutas as $id => $puntos) {
    $geojson['features'][] = [
        'type' => 'Feature',
        'properties' => ['id_ruta' => $id],
        'geometry' => [
            'type' => 'LineString',
            'coordinates' => $puntos
        ]
    ];
}

header('Content-Type: application/json');
echo json_encode($geojson);