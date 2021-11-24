<?php
include "../config.php";
if (!isset($_SESSION['uname'])) {
    header('Location: ../index.php');
}

if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: ../index.php');
}

$sql_query0="SELECT COUNT(*)AS total, idEvento FROM tickets GROUP BY idEvento;";
$result0 = mysqli_query($con, $sql_query0);
while ($row0 = $result0->fetch_array()) {
    $rows0[] = $row0;
}

$sql_query1 = "SELECT eventos.idEvento,eventos.nombreEvento,organizadores.nombre,COUNT(tickets.idTicket) AS total, SUM(CASE WHEN tickets.username IS NULL THEN 0 ELSE 1 END) as vendidas,eventos.fecha
                from eventos 
                inner join organizadores on eventos.idOrganizador = organizadores.idOrganizador 
                LEFT JOIN tickets on eventos.idEvento= tickets.idEvento 
                GROUP BY tickets.idEvento;";

$result1 = mysqli_query($con, $sql_query1);
$bandera=true;
if(mysqli_num_rows($result1)!==0){
    while ($row1 = $result1->fetch_array()) {
        $rows1[] = $row1;
    }
}else{
    $bandera=false;
}
if(isset($_GET["idEvento"])){
    borrarEvento();
}
$error=false;
$sql_query2 = "SELECT * FROM users GROUP BY username";
$result2 = mysqli_query($con, $sql_query2);
$bandera2=true;
if(mysqli_num_rows($result2)!==0){
    while ($row2 = $result2->fetch_array()) {
        $rows2[] = $row2;
    }
}else{
    $bandera2=false;
}
if(isset($_GET["username"])){
    borrarUsuario();
}
$sql_query3 = "SELECT * FROM organizadores GROUP BY idOrganizador";
$result3 = mysqli_query($con, $sql_query3);
$bandera3=true;
if(mysqli_num_rows($result3)!==0){
    while ($row3 = $result3->fetch_array()) {
        $rows3[] = $row3;
    }
}else{
    $bandera3=false;
}
if(isset($_GET["idOrg"])){
    borrarOrganizador();
}
$sql_query4 = "SELECT * FROM cupones WHERE username='global' GROUP BY codigoCupon";
$result4 = mysqli_query($con, $sql_query4);
$bandera4=true;
if(mysqli_num_rows($result4)!==0){
    while ($row4 = $result4->fetch_array()) {
        $rows4[] = $row4;
    }
}else{
    $bandera4=false;
}
if(isset($_GET["codCupon"])){
    borrarCupon();
}

function borrarEvento(){
    include "../config.php";
    $sql_query="DELETE FROM eventos WHERE idEvento= ".$_GET["idEvento"].";";
    if( mysqli_query($con, $sql_query)){
       header('Location: index.php');
    }else{
        echo "Errors";
        echo $sql_query;
    }
}
function borrarOrganizador(){
    include "../config.php";
    $sql_query="DELETE FROM organizadores WHERE idOrganizador= ".$_GET["idOrg"].";";
    if( mysqli_query($con, $sql_query)){
       header('Location: index.php');
    }else{
        echo "Errors";
        echo $sql_query;
    }
}

function borrarCupon(){
    include "../config.php";
    $sql_query="DELETE FROM cupones WHERE codigoCupon= '".$_GET["codCupon"]."';";
    if( mysqli_query($con, $sql_query)){
       header('Location: index.php');
    }else{
        echo "Errors";
        echo $sql_query;
    }
}

function borrarUsuario(){
    include "../config.php";
    if($_GET["username"]==$_SESSION["uname"]){
        global $error;
         $error=true;
    }else{
    $sql_query="DELETE FROM users WHERE username= '".$_GET["username"]."';";
    if( mysqli_query($con, $sql_query)){
       header('Location: index.php');
    }else{
        echo "Errors";
        echo $sql_query;
    }
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
        <h3>Eventos disponibles</h3>
        <?php $err ?>
        <?php
            if($bandera==true){
                
              ?>
        <table border="2" class="table">
            <tr>
                <th scope="col">Nombre del Evento</th>
                <th scope="col">Organizador</th>
                <th scope="col">Fecha del Evento</th>
                <th scope="col">Numero de Entradas</th>
                <th scope="col">Numero de Entradas vendidas</th>
                <th scope="col">Borrar</th>
            <tr>
                <?php foreach ($rows1 as $row1) {?>
            <tr>
                <td scope="row"><?php echo $row1[1]?></td>
                <td><?php echo $row1[2]?></td>
                <td><?php echo $row1[5]?></td>
                <td><?php echo $row1[3]?></td>
                <td><?php echo $row1[4]?></td>
                <td><button class="btn btn-primary"onclick="borradoEvento('<?php echo $row1[1];?>',<?php echo $row1[0];?>)">Borrar</a></td>
            </tr>
            <?php }}else{
                echo "<p id='errorMessage'>No hay Eventos programados aun</p>";
            } ?>
        </table>
        </div>
        <div class="container">
        <h3>Usuarios Registrados</h3>
        <?php
        if($error){
            header('Location: index.php?error=true');
            
        }
        if(isset($_GET['error'])){
            echo "<p>No puedes borrar tu propio usuario</p>";
        } ?>
        <?php
            if($bandera2==true){
                
              ?>
        <table border="2" class="table">
            <tr>
                <th>Nombre de Usuario</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Fecha de Nacimiento</th>
                <th>Borrar</th>
            <tr>
            <?php foreach ($rows2 as $row2) { ?>
            <tr>
                <td><?php echo $row2[0]?></td>
                <td><?php echo $row2[2]?></td>
                <td><?php echo $row2[3]?></td>
                <td><?php echo $row2[4]?></td>
                <td><button class="btn btn-primary"onclick="borradoUsuario('<?php echo $row2[0];?>')">Borrar</a></td>
            </tr>
            <?php }}else{
                echo "<p id='errorMessage'>No hay usuarios registrados aun</p>";
            } ?>
        </table>
        </div>
        <div class="container">
        <h3>Organizadores</h3>
        <a href="registrarOrganizador.php"><strong>Registrar Organizador</strong></a>
        <?php
            if($bandera3==true){
                
              ?>
        <table border="2" class="table">
            <tr>
                <th>ID Organizador</th>
                <th>Nombre del Organizador</th>
                <th>Descripcion</th>
                <th>Borrar</th>
            <tr>
            <?php foreach ($rows3 as $row3) {?>
            <tr>
                <td><?php echo $row3[0]?></td>
                <td><?php echo $row3[1]?></td>
                <td><?php echo $row3[2]?></td>
                <td><button class="btn btn-primary"onclick="borradoOrganizador(<?php echo $row3[0];?>,'<?php echo $row3[1];?>')">Borrar</a></td>
            </tr>
            <?php }
            }else{
                echo "<p id='errorMessage'>No hay organizadores registrados aun</p>";
            } ?>
        </table>
        </div>
        <div class="container">
        <h3>Codigos de descuento</h3>
        <a href="crearCupon.php"><strong>Crear un nuevo codigo de descuento</strong></a>
        <?php
            if($bandera4==true){
                
              ?>
        <table border="2" class="table">
            <tr>
                <th>Codigo del cupon</th>
                <th>Cuantía</th>
                <th>Borrar</th>
            <tr>
            <?php foreach ($rows4 as $row4) {?>
            <tr>
                <td><?php echo $row4[0]?></td>
                <td><?php echo $row4[2]?>%</td>
                <td><button class="btn btn-primary"onclick="borradoCupon('<?php echo $row4[0];?>')">Borrar</a></td>
            </tr>
            <?php }
            }else{
                echo "<p id='errorMessage'>No hay codigos de descuento registrados aun</p>";
            } ?>
        </table>
        </div>
    </main>
    <aside>

    </aside>
    <script type="text/javascript" src="../../js/main.js"></script>
</body>
</html>
