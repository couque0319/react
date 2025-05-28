<?php
require_once __DIR__ . '/../db_connect.php';
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => '이메일 형식이 올바르지 않음']);
    exit;
}

$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    echo json_encode(['success' => false, 'message' => '이미 가입된 이메일']);
    exit;
}

// 실제 인증 메일 발송 대신, 지금은 바로 저장
$stmt = $pdo->prepare("INSERT INTO users (email, signup_method) VALUES (?, 'email_auth')");
$success = $stmt->execute([$email]);

echo json_encode(['success' => $success]);
