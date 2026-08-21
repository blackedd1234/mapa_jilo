<?php
if (class_exists('ZipArchive')) {
    echo "¡La extensión ZipArchive está activa!";
} else {
    echo "Sigue desactivada. Revisa el archivo php.ini.";
}
?>