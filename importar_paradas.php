<?php
include 'config.php'; // Tu archivo de conexión

$zipFile = 'C:/xampp/htdocs/jilma/jilotepec.gtfs.zip'; // Asegúrate de que el nombre coincida
$zip = new ZipArchive;

if ($zip->open($zipFile) === TRUE) {
    // Extraemos el contenido de stops.txt
    $data = $zip->getFromName('stops.txt');
    
    // Convertimos el string en un "archivo temporal" para manejarlo con fgetcsv
    $tempFile = fopen('php://temp', 'r+');
    fwrite($tempFile, $data);
    rewind($tempFile);

    // Leemos la primera línea para identificar las columnas (cabecera)
    $cabecera = fgetcsv($tempFile);
    
    // Mapeamos los índices para que no importe el orden en el archivo
    $indices = array_flip($cabecera);
    
    $contador = 0;
    
    // Iniciamos una transacción para que sea súper rápido
    $conn->begin_transaction();

    try {
        while (($fila = fgetcsv($tempFile)) !== FALSE) {
            // Saltamos filas vacías
            if (empty($fila[0])) continue;

            $nombre = $fila[$indices['stop_name']];
            $lat    = $fila[$indices['stop_lat']];
            $lon    = $fila[$indices['stop_lon']];

            $stmt = $conn->prepare("INSERT INTO paradas (nombre, latitud, longitud) VALUES (?, ?, ?)");
            $stmt->bind_param("sdd", $nombre, $lat, $lon);
            $stmt->execute();
            $contador++;
        }
        
        $conn->commit();
        echo "<h3>¡Éxito!</h3>";
        echo "Se han importado <strong>$contador</strong> paradas a la base de datos.";
    } catch (Exception $e) {
        $conn->rollback();
        echo "Error al importar: " . $e->getMessage();
    }

    fclose($tempFile);
    $zip->close();
} else {
    echo "No se pudo abrir el archivo .zip. Revisa que el nombre sea correcto.";
}
?>