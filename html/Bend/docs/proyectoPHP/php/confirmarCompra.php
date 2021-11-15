<?php

include "config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}

// logout
if (isset($_POST['but_cancelar'])) {
    header('Location: compra.php');
}
$idTicket = $_GET['idTicket'];
if (isset($_POST['but_confirmar'])) {
    $sql_query = "UPDATE tickets SET username = '" . $_SESSION['uname'] . "' WHERE idTicket = " . $idTicket . ";";
    if (mysqli_query($con, $sql_query)) {
        echo "Comprador";
    } else {
        echo $sql_query;
        echo "Error: ";
    }
}

?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method='post' action="">
        <button type="submit" value="" name="but_confirmar" id="but_submit">Confirmar Compra</button>
        <button type="submit" value="" name="but_cancelar" id="but_submit">Cancelar Compra</button>
    </form>
</body>

</html>