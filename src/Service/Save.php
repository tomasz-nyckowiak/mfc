<?php
    include 'Database.php';

    $sql = "INSERT INTO 'title_information'('user_id', 'original_title') VALUES ('data.id', 'data.title')";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(array("statusCode" => 200));
    } else {
        echo json_encode(array("statusCode" => 201));
    }
    mysqli_close($conn);