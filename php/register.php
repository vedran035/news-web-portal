<?php
include_once("database.php");

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    // Uzimanje imena i emaila sa escape funkcijom
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));

    // Hashiranje šifre
    $pwd = password_hash(trim($request->pwd), PASSWORD_DEFAULT);

    // SQL upit za unos korisnika
    $sql = "INSERT INTO users(name, password, email) VALUES ('{$name}', '{$pwd}', '{$email}')";

    if ($mysqli->query($sql) === TRUE) {
        // Ako je upis uspešan, vraćamo korisničke podatke (bez šifre)
        $authdata = [
            'name' => $name,
            'pwd' => '', // Ne šaljemo šifru u odgovoru
            'email' => $email,
            'Id' => mysqli_insert_id($mysqli) // Vraća ID korisnika koji je unet
        ];

        echo json_encode($authdata);
    }
}
?>
