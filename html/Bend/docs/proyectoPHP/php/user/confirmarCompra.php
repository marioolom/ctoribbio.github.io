<?php

include "../config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: ../index.php');
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
$bandera=false;
if(isset($_POST['enviarCupon'])){
    $sql_query3="SELECT * FROM cupones WHERE codigoCupon='".$_POST['cupon']."';";
    echo $sql_query3;
    $result3=mysqli_query($con,$sql_query3);
    if(mysqli_num_rows($result3)>0){
        while ($row3 = $result3->fetch_array()) {
            $rows3[] = $row3;
        }
        $cuantia=$rows3[0][2];
        $bandera=true;
    }else{
        $bandera=false;
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
    <link rel="stylesheet" href="../../css/confirmar.css">
</head>

<body>
    <form method='post' action="">
        <p>Estas seguro que quieres comprar un Ticket para el evento <strong><?php echo $nombreEvento;?></strong>?</p>
        <img src="<?php echo $path; ?>"width=25% height=25% alt="Imagen del evnto"></img><br>
        <table border="2" cellspacing="0" cellpadding="2">
            <tr>
                <th>Precio</th>
                <td><?php echo $precio; ?>€</td>
            </tr>
            <tr>
                <th>Gastos de Gestion</th>
                <td><?php echo ($precio*0.1);?>€</td>
            </tr>
            <?php if($bandera==true){ ?>
            <tr>
                <th>Descuento</th>
                <?php echo "<td>".$cuantia."%</td>";?>
            </tr><?php } ?>
            <tr>
                <th>TOTAL</th>
                <td><?php if($bandera==true){
                    echo ($precio+($precio*0.1))-($precio+($precio*0.1))*($cuantia/100);
                 }else{
                    echo ($precio+($precio*0.1));
                 } ?>€</td>
                
            </tr>
        </table>
        <div id="cupones">
            <form method="post" action="">
                <input type="text" name="cupon" placeholder="Codigo de Descuento">
                <input type="submit" name="enviarCupon" value="Introducir cupón">
        
        </div>
        
        <button type="submit" value="" name="but_confirmar" id="but_submit">Confirmar Compra</button>
        <button type="submit" value="" name="but_cancelar" id="but_submit">Cancelar Compra</button>
    </form>
</body>

</html>