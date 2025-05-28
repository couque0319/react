<?php
require_once __DIR__ . '/../db_connect.php';
header('Content-Type: application/json; charset=utf-8');

$game_id = isset($_GET['game_id']) ? intval($_GET['game_id']) : 0;
if ($game_id <= 0) {
    http_response_code(400);
    echo json_encode(['error' => '잘못된 요청']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM game_reviews WHERE game_id = ? ORDER BY created_at DESC");
$stmt->execute([$game_id]);
$reviews = $stmt->fetchAll();

echo json_encode($reviews);
?>
