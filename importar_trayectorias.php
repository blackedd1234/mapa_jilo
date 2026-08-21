<?php
include 'config.php';

$zipFile = 'C:/xampp/htdocs/jilma/jilotepec.gtfs.zip';
$zip = new ZipArchive;

if ($zip->open($zipFile) === TRUE) {
    $data = $zip->getFromName('shapes.txt');
    $tempFile = fopen('php://temp', 'r+');
    fwrite($tempFile, $data);
    rewind($tempFile);

    $cabecera = fgetcsv($tempFile);
    $indices = array_flip($cabecera);
    
    $conn->begin_transaction();

    try {
        $stmt = $conn->prepare("INSERT INTO trayectorias (id_ruta, orden, latitud, longitud) VALUES (?, ?, ?, ?)");
        
        while (($fila = fgetcsv($tempFile)) !== FALSE) {
            if (empty($fila[0])) continue;

            // En GTFS, id_ruta suele ser shape_id en este archivo
            $id_ruta = $fila[$indices['shape_id']]; 
            $orden   = $fila[$indices['shape_pt_sequence']];
            $lat     = $fila[$indices['shape_pt_lat']];
            $lon     = $fila[$indices['shape_pt_lon']];

            $stmt->bind_param("sidd", $id_ruta, $orden, $lat, $lon);
            $stmt->execute();
        }
        
        $conn->commit();
        echo "✅ Trayectorias importadas correctamente.";
    } catch (Exception $e) {
        $conn->rollback();
        echo "❌ Error: " . $e->getMessage();
    }
    $zip->close();
}
?>