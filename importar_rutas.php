<?php
// 1. Forzar a PHP a mostrar errores
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 2. Darle más "poder" al script (para archivos grandes)
set_time_limit(300); // 5 minutos de ejecución
ini_set('memory_limit', '512M'); 

include 'config.php';

$zipFile = __DIR__ . '/jilotepec.gtfs.zip'; 
$zip = new ZipArchive;

echo "Iniciando proceso...<br>";

if ($zip->open($zipFile) === TRUE) {
    $data = $zip->getFromName('routes.txt');
    if (!$data) {
        die("❌ No se encontró routes.txt dentro del ZIP.");
    }

    $tempFile = fopen('php://temp', 'r+');
    fwrite($tempFile, $data);
    rewind($tempFile);

    $cabecera = fgetcsv($tempFile);
    $indices = array_flip($cabecera);
    
    $conn->begin_transaction();
    $contador = 0;

    try {
        $stmt = $conn->prepare("INSERT INTO rutas (id_ruta, nombre_corto, nombre_largo, color_hex) VALUES (?, ?, ?, ?)");
        
        while (($fila = fgetcsv($tempFile)) !== FALSE) {
            if (!isset($fila[0]) || empty($fila[0])) continue;

            $id_ruta      = $fila[$indices['route_id']] ?? 'N/A';
            $nombre_corto = $fila[$indices['route_short_name']] ?? '';
            $nombre_largo = $fila[$indices['route_long_name']] ?? '';
            $color        = isset($indices['route_color']) ? "#".$fila[$indices['route_color']] : "#3388ff";

            $stmt->bind_param("ssss", $id_ruta, $nombre_corto, $nombre_largo, $color);
            $stmt->execute();
            $contador++;
        }
        
        $conn->commit();
        echo "✅ Éxito: Se importaron $contador rutas.";
    } catch (Exception $e) {
        $conn->rollback();
        echo "❌ Error en la base de datos: " . $e->getMessage();
    }
    fclose($tempFile);
    $zip->close();
} else {
    echo "❌ No se pudo abrir el archivo ZIP.";
}
?>