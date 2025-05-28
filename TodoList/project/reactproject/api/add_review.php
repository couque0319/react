<?php
require_once __DIR__ . '/../db_connect.php';
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents("php://input"), true);

$game_id = intval($data['game_id'] ?? 0);
$nickname = trim($data['nickname'] ?? '');
$rating = floatval($data['rating'] ?? 0);
$content = trim($data['content'] ?? '');

if ($game_id <= 0 || $nickname === '' || $content === '') {
    http_response_code(400);
    echo json_encode(['error' => '입력값이 유효하지 않습니다']);
    exit;
}

$stmt = $pdo->prepare("INSERT INTO game_reviews (game_id, nickname, rating, content, created_at) VALUES (?, ?, ?, ?, NOW())");
$success = $stmt->execute([$game_id, $nickname, $rating, $content]);

echo json_encode(['success' => $success]);
?>
