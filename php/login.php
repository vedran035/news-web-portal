<?php
include_once("database.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata)) {
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));  // Uneta šifra
    $email = mysqli_real_escape_string($mysqli, trim($request->username));  // Uneti email

    // SQL upit za pronalaženje korisnika sa odgovarajućim emailom
    $sql = "SELECT * FROM users WHERE email='$email'";

    if($result = mysqli_query($mysqli, $sql)) {
        $rows = array();
        while($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }

        // Proveravamo da li je korisnik pronađen
        if(count($rows) > 0) {
            $hashed_password = $rows[0]['password'];  // Hashirana šifra iz baze

            // Proveravamo da li se uneta šifra poklapa sa hashiranim passwordom u bazi
            if(password_verify($pwd, $hashed_password)) {
                // Ako je verifikacija uspešna, vraćamo korisničke podatke
                echo json_encode($rows);
            } else {
                // Ako šifra nije tačna, vraćamo grešku
                http_response_code(401);  // Unauthorized
                echo json_encode(['message' => 'Incorrect password']);
            }
        } else {
            // Ako korisnik sa tim emailom ne postoji
            http_response_code(404);  // Not Found
            echo json_encode(['message' => 'User not found']);
        }
    } else {
        // Ako SQL upit nije uspešan
        http_response_code(500);  // Server error
        echo json_encode(['message' => 'Database query failed']);
    }
}
?>
