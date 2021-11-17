<?php
include "config.php";

// Check user login or not
if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}

// logout
if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: index.php');
}
?>
<!doctype html>
<html>

<head>
    <link rel="stylesheet" href="..\css\displayImages.css" type="text/css">
    <link rel="stylesheet" href="..\css\common.css" type="text/css">
</head>

<body>
    <header>Compra de entradas</header>
    <nav>
        <ul>
            <a href="./home.php">
                <div class="navItem">
                    <li>Inicio</li>
                </div>
            </a>
            <a href="./misTickets.php">
                <div class="navItem">
                    <li>Tus Tickets</li>
                </div>
            </a>
            <a href="./compra.php">
                <div class="navItem">
                    <li>Comprar Tickets</li>
                </div>
            </a>
            <div class="navItem">
                <li>
                    <form method='post' action="">
                        <input type="submit" value="Logout" name="but_logout">
                    </form>
                </li>
            </div>
            <ul>
    </nav>
</body>
</html>