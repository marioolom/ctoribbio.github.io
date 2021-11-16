<?php

include "config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}

// logout
if (isset($_POST['but_cancelar'])) {
    header('Location: compra.php');
}
$idTicket = $_GET['idEvento'];



?>