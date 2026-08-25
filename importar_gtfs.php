<?php
include 'config.php';

$zipFile = __DIR__ . '/jilotepec.gtfs.zip'; // El nombre de tu archivo
$zip = new ZipArchive;

if ($zip->open($zipFile) === TRUE) {
    // 1. Leer las Paradas (stops.txt)
    $stopsData = $zip->getFromName('stops.txt');
    $rows = explode("\n", $stopsData);
    $header = str_getcsv(array_shift($rows)); // Quitar la primera fila (títulos)

    foreach ($rows as $row) {
        $data = str_getcsv($row);
        if (count($data) >= 3) {
            // Ajusta los índices [0], [1], [2] según el orden de tu stops.txt
            // Generalmente: 0=id, 1=nombre, 2=lat, 3=lon
            $stmt = $conn->prepare("INSERT INTO paradas (nombre, latitud, longitud) VALUES (?, ?, ?)");
            $stmt->bind_param("sdd", $data[1], $data[2], $data[3]);
            $stmt->execute();
        }
    }
    
    echo "¡Paradas importadas con éxito!";
    $zip->close();
} else {
    echo 'Error al abrir el archivo ZIP';
}
?>