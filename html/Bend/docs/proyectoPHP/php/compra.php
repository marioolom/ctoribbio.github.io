<?php
include "config.php";

$sql_query = "SELECT tickets.*, eventos.*,organizadores.nombre
FROM eventos
INNER JOIN tickets ON eventos.idEvento=tickets.idEvento inner join organizadores on eventos.idOrganizador=organizadores.idOrganizador
WHERE precioTicket IN (SELECT min(precioTicket) FROM tickets WHERE username is NULL GROUP BY idEvento) AND username is null
GROUP BY tickets.idEvento;";
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
                <a href="confirmarCompra.php?idTicket=<?php echo $row['idTicket']; ?>"> <span class="hyperspan"></span></a>
                <img src="<?php echo $row['path']; ?>" alt="Snow">
                <p class="precio">Desde <strong><?php echo $row['precioTicket']; ?> </strong>Euros</p>
                <p class="nombreEvento"><?php echo $row['nombreEvento']; ?></p>
                <p class="nombreEvento"><?php echo $row['nombre']; ?></p>
            </div>
        <?php } ?>
</body>

</html>