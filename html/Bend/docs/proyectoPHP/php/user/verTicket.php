<?php

include "../config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}

// logout
if (isset($_POST['but_cancelar'])) {
    header('Location: compra.php');
}
$idTicket = $_GET['idTicket'];


$sql_query = "select users.*, eventos.*, tickets.username,tickets.idTicket from tickets inner join eventos on tickets.idEvento=eventos.idEvento inner join users on users.username=tickets.username where idTicket='".$_GET["idTicket"]."' GROUP BY eventos.idEvento;";
$result = mysqli_query($con, $sql_query);
if (mysqli_num_rows($result) !== 0) {
    while ($row = $result->fetch_array()) {
        $rows[] = $row;
        $nombreUsuario=$row["nombre"];
        $fechaN=$row["fechaNacimiento"];
        $apellido=$row["apellidos"];
        $nombreEvento=$row["nombreEvento"];
        $localizacion=$row["localizacionEvento"];
        $fecha=$row["fecha"];
        $idTicket=$row["idTicket"];
        $path=$row["path"];


    }
} else {
    $bandera = false;
}
$sql_query2="select COUNT(tickets.idTicket) as numTickets from tickets inner join eventos on tickets.idEvento = eventos.idEvento where tickets.idEvento=(SELECT idEvento from tickets where idTicket=".$_GET["idTicket"].") AND tickets.username = '".$_SESSION['uname']."';";
$result2 = mysqli_query($con, $sql_query2);
while ($row2 = $result2->fetch_array()) {
    $rows2[] = $row2;
    $count = $row2["numTickets"];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="../../js/main.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/ticket.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Ticket</title>
</head>
<body>
    <div id="contenedorPrincipal">
        <img id="header">
        
        <div id="contenedorDatosPersonales" class="container">
            <header>Datos Personales:</header>
            <p id="nombreApellidos"></p>
            <p id="fechaN"></p>
        </div>
        <div id="contenedorDatosEvento" class="container">
            <header>Datos del Evento</header>
            <p id="nombreEvento"></p>
            <p id="OrganizadorEvento"></p>
            <p id="fechaEvento"></p>
            <p id="localizacionEvento"></p>
        </div>
        <div id="botones" class="container">
            <button class="btn btn-secondary" onclick="window.print();">Imprimir Ticket</button>
            <a href="misTickets.php"><button class="btn btn-primary">Volver</button></a>
        </div>
        <div id="contenedorqr">
    
        </div>
    </div>
<?php echo "<script>generarEntrada('".$nombreUsuario."', '".$apellido."', '".$nombreEvento."', '".$localizacion."', '".$fecha."', '".$path."', '".$fechaN."', '".$count."', '".$idTicket."')</script>"; ?>
</body>

</html>