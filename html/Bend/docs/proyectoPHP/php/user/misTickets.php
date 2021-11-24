<?php
include "../config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: ../index.php');
}
$bandera = true;

$sql_query = "select eventos.*, tickets.username, count(tickets.idTicket) AS numeroTickets from eventos inner join tickets on tickets.idEvento=eventos.idEvento where username='" . $_SESSION['uname'] . "' GROUP BY eventos.idEvento;";
$result = mysqli_query($con, $sql_query);
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
    <link rel="stylesheet" href="../../css/navbar.css">
</head>

<body>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Fever</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="compra.php">Compra de entradas</a>
                </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="misTickets.php">Mis tickets<span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-md-0" action="" method="post">
                <button class="btn btn-primary" name="but_logout" type="submit" placeholder="Logout" aria-label="Logout">Logout</button>
            </form>
        </div>
    </nav>
    <div class="container">
        <?php
        if ($bandera == false) {
            echo "No tienes Tickets";
        } else {
            foreach ($rows as $row) {
        ?>
                <div class="column element">
                    <a href="verTicket.php?idEvento=<?php echo $row['idEvento']; ?>"> <span class="hyperspan"></span></a>
                    <img src="<?php echo $row['path']; ?>" alt="Snow" class="img-thumbnail">
                    <p class="nombreEvento"><?php echo $row['nombreEvento']; ?></p>
                    <p class="precio">Tienes <strong><?php echo $row['numeroTickets']; ?> </strong>tickets para este evento</p>
                </div>
        <?php }
        } ?>
        <script>window.jQuery || document.write('<script src="../../js/jquery-slim.min.js"><\/script>')</script>
         <script src="../../js/popper.min.js"></script>
        <script type="text/javascript" src="../../js/bootstrap.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

</body>

</html>