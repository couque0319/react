<?php
require_once __DIR__ . '/../db_connect.php';
header('Content-Type: application/json; charset=utf-8');

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['error' => '잘못된 요청']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM games WHERE id = ?");
$stmt->execute([$id]);
$game = $stmt->fetch();

if ($game) {
    echo json_encode($game);
} else {
    http_response_code(404);
    echo json_encode(['error' => '게임을 찾을 수 없습니다']);
}
?>
