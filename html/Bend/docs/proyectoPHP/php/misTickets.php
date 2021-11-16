<?php
include "config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}

$sql_query = "select eventos.*, tickets.username, count(tickets.idTicket) AS numeroTickets from eventos inner join tickets on tickets.idEvento=eventos.idEvento where username='" . $_SESSION['uname'] . "' GROUP BY eventos.idEvento;";
$result = mysqli_query($con, $sql_query);
while ($row = $result->fetch_array()) {
    $rows[] = $row;
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
    <div class="container">
        <?php

        foreach ($rows as $row) {
        ?>
            <div class="column element">
                <a href="confirmarCompra.php?idEvento=<?php echo $row['idEvento']; ?>"> <span class="hyperspan"></span></a>
                <img src="<?php echo $row['path']; ?>" alt="Snow">
                <p class="nombreEvento"><?php echo $row['nombreEvento']; ?></p>
                <p class="precio">Tienes <strong><?php echo $row['numeroTickets']; ?> </strong>tickets para este evento</p>
            </div>
        <?php } ?>
</body>

</html>