<?php
include "../config.php";
if (!isset($_SESSION['idOrg'])) {
    header('Location: ../index.php');
}
//panel.php?idEvento=<?php echo $row[1]"
if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: ../index.php');
}
$sql_query = "SELECT eventos.idEvento, eventos.nombreEvento,eventos.localizacionEvento,COUNT(tickets.idTicket) AS total, SUM(CASE WHEN tickets.username IS NULL THEN 0 ELSE 1 END) as vendidas FROM tickets RIGHT JOIN eventos on tickets.idEvento=eventos.idEvento WHERE eventos.idOrganizador=1 GROUP BY eventos.idEvento;";
$result = mysqli_query($con, $sql_query);
$bandera = true;
if (mysqli_num_rows($result) > 0) {
    while ($row = $result->fetch_array()) {
        $rows[] = $row;
    }
} else {
    $bandera = false;
}

if (isset($_GET["idEvento"])) {
    borrarEvento();
}

function borrarEvento()
{
    include "../config.php";
    $sql_query = "DELETE FROM eventos WHERE idEvento= " . $_GET["idEvento"] . ";";
    if (mysqli_query($con, $sql_query)) {
        header('Location: index.php');
    } else {
        echo "Errors";
        echo $sql_query;
    }
}

if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: ../index.php');
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<header  class="d-flex justify-content-around mr-5 mt-5">
    <div class="ml-5">
    <h1>Panel de Administracion</h1>
</div>
    <div class=" nav justify-content-end ">
            <form method='post' action="">
                <input type="submit" class="btn btn-primary" value="Logout" name="but_logout">
            </form>
    </div>
</header>

<body>
    <main>
        <div class="container">
            <h3>Tus Eventos</h3>
            <?php $err ?>
            <?php
            if ($bandera) {

            ?>
                <table border="2" class="table">
                    <tr>
                        <th scope="col">Nombre del Evento</th>
                        <th scope="col">Localizacion del Evento</th>
                        <th scope="col">Numero de Entradas vendidas</th>
                        <th scope="col">Numero de Entradas totales</th>
                        <th scope="col">Borrar</th>
                    <tr>
                        <?php foreach ($rows as $row) { ?>
                    <tr>
                        <td scope="row"><?php echo $row[1] ?></td>
                        <td><?php echo $row[2] ?></td>
                        <td><?php echo $row[4] ?></td>
                        <td><?php echo $row[3] ?></td>
                        <td><button class="btn btn-primary"onclick="borradoEvento('<?php echo $row[1];?>',<?php echo $row[0];?>)">Borrar</a></td>
                    </tr>
            <?php }
                    } else {
                        echo "<p id='errorMessage'>No hay Eventos programados aun</p>";
                    } ?>
                </table>
                <div>
                <a href="crearEvento.php">Crear un nuevo evento</a><br>
                <a href="sacarEntradas.php">Nuevo tramo de Entradas</a>
                </div>
        </div>
    </main>
    <aside>

    </aside>
    <script type="text/javascript" src="../../js/main.js"></script>
</body>

</html>