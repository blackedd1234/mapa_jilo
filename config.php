<?php
$host = getenv("DB_HOST") ?: "localhost";
$user = getenv("DB_USER") ?: "root";
$pass = getenv("DB_PASS") ?: ""; 
$db   = getenv("DB_NAME") ?: "transporte_jilotepec";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die("Error de conexión: " . $conn->connect_error);

// IMPORTANTE para acentos y eñes
$conn->set_charset("utf8");

// Reporte de errores
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>