<?php
include 'config.php';

$geojson = [
    'type' => 'FeatureCollection',
    'features' => []
];

$sql = "SELECT nombre, latitud, longitud FROM paradas";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {
    $geojson['features'][] = [
        'type' => 'Feature',
        'properties' => [
            'name' => $row['nombre']
        ],
        'geometry' => [
            'type' => 'Point',
            'coordinates' => [(float)$row['longitud'], (float)$row['latitud']]
        ]
    ];
}

header('Content-Type: application/json');
echo json_encode($geojson);