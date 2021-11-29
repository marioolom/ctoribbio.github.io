<?php
include "../config.php";

$sql_query = "SELECT tickets.*, eventos.*,organizadores.nombre
FROM eventos
INNER JOIN tickets ON eventos.idEvento=tickets.idEvento inner join organizadores on eventos.idOrganizador=organizadores.idOrganizador
WHERE precioTicket IN (SELECT min(precioTicket) FROM tickets WHERE username is NULL GROUP BY idEvento) AND username is null
GROUP BY tickets.idEvento;";
$result = mysqli_query($con, $sql_query);
$bandera = true;
if (mysqli_num_rows($result) !== 0) {
    while ($row = $result->fetch_array()) {
        $rows[] = $row;
    }
} else {
    $bandera = false;
}




if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: ../index.php');
}
?>
<!doctype html>
<html>

<head>
    <link rel="stylesheet" href="../../css/displayImages.css" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="./index.php">TicketGo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarsExample01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <a class="nav-link" href="./index.php">Inicio</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="compra.php">Compra de entradas<span class="sr-only">(current)</span></a>
                </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="misTickets.php">Mis tickets</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-md-0" action="" method="post">
                <button class="btn btn-primary" name="but_logout" type="submit" placeholder="Logout" aria-label="Logout">Logout</button>
            </form>
        </div>
    </nav>
    <div class="container w-75">
        <div class="row d-flex justify-content-space around">
            <?php
            if ($bandera == false) {
                ?><div class="nodata">
                <img src="../../assets/nodata.png">
                <h3>Aun no hay nada por aquí.<h3>
            </div>
            <?php
            } else {

                foreach ($rows as $row) {
            ?>
                    <div class="card imagen">
                        <img class="card-img-top ocupar-card" src="<?php echo $row['path']; ?>" alt="Card image">
                        <div class="card-body">
                            <h5 class="card-title"><?php echo $row['nombreEvento']; ?>.-<?php echo $row['nombre']; ?> </h5>
                            <p class="card-text"><?php echo $row['fecha']; ?></p>
                            <p class="card-text">Desde <?php echo $row['precioTicket']; ?>€</p>
                        </div>
                        <div class="card-footer">
                            <a href="confirmarCompra.php?idTicket=<?php echo $row[0]?>" class="btn btn-primary stretched-link">Comprar</a>
                        </div>
                    </div>

            <?php }
            } ?>
        </div>
    </div>
    <script>
        window.jQuery || document.write('<script src="../../js/jquery-slim.min.js"><\/script>')
    </script>
    <script src="../../js/popper.min.js"></script>
    <script type="text/javascript" src="../../js/bootstrap.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

</body>

</html>