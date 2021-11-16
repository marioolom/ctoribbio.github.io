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

$sql_query = "select eventos.*,tickets.precioTicket from eventos inner join tickets on tickets.idEvento=eventos.idEvento where idTicket=" . $idTicket .";";
$result = mysqli_query($con, $sql_query);
while ($row = $result->fetch_array()) {
    $rows[] = $row;
    $nombreEvento=$row[2];
    $path=$row[5];
    $precio=$row[6];
}

if (isset($_POST['but_confirmar'])) {
    $sql_query2 = "UPDATE tickets SET username = '" . $_SESSION['uname'] . "' WHERE idTicket = " . $idTicket . ";";
    if (mysqli_query($con, $sql_query2)) {
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
        <p>Estas seguro que quieres comprar un Ticket para el evento <strong><?php echo $nombreEvento;?></strong>?</p>
        <img src="<?php echo $path; ?>"width=25% height=25% alt="Imagen del eevnto" border></img><br>
        <table border="2px">
            <tr>
                <th>Precio</th>
                <th>Gastos de Gestion</th>
            </tr>
            <tr>
                <td><?php echo $precio; ?>
                <td><?php echo ($precio*0.1);?>
            </tr>
            <tr>
                <td><strong>TOTAL</strong></td>
                <td><?php echo ($precio+($precio*0.1)); ?></td>
                
            </tr>
        </table>
        <button type="submit" value="" name="but_confirmar" id="but_submit">Confirmar Compra</button>
        <button type="submit" value="" name="but_cancelar" id="but_submit">Cancelar Compra</button>
    </form>
</body>

</html>