<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

$comments = json_decode(file_get_contents('comments.json'), true);
if (!$comments || !is_array($comments)) {
    $comments = []; // Asegurarse de que sea un array si el archivo JSON está vacío o corrupto
}
echo json_encode($comments);
?>
