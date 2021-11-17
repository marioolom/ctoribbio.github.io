<?php
include "config.php";
if (!isset($_SESSION['idOrg'])) {
    header('Location: loginOrganizador.php');
}

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
    <link rel="stylesheet" href="..\css\organizador.css" type="text/css">
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
            <a href="./crearEvento.php">
                <div class="navItem">
                    <li>Registrar un nuevo evento</li>
                </div>
            </a>
            <a href="./borrarEvento.php">
                <div class="navItem">
                    <li>Borrar un evento</li>
                </div>
            </a>
            <a href="./sacarEntradas.php">
                <div class="navItem">
                    <li>Sacar Tickets a la venta</li>
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