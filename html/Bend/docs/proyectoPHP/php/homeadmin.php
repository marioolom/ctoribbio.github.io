<?php
include "config.php";
if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}

if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: index.php');
}
$sql_query0="SELECT COUNT(*)AS total, idEvento FROM tickets GROUP BY idEvento;";
$result0 = mysqli_query($con, $sql_query0);
while ($row0 = $result0->fetch_array()) {
    $rows0[] = $row0;
}
$sql_query1 = "SELECT eventos.idEvento,eventos.nombreEvento,organizadores.nombre, COUNT(tickets.idTicket)
                from eventos 
                inner join organizadores on eventos.idOrganizador = organizadores.idOrganizador 
                inner join tickets on eventos.idEvento= tickets.idEvento 
                WHERE tickets.username IS NULL
                GROUP BY tickets.idEvento;";

$result1 = mysqli_query($con, $sql_query1);
echo $sql_query1;
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
function borrarEvento(){
    include "config.php";
    $sql_query="DELETE FROM eventos WHERE idEvento= ".$_GET["idEvento"].";";
    if( mysqli_query($con, $sql_query)){
       header('Location: homeadmin.php');
    }else{
        echo "Errors";
        echo $sql_query;
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
<header>Panel de Administracion</header>
<body>
    <main>
        <h1>Eventos disponibles</h1>
        <table border="2">
            <tr>
                <th>Nombre del Evento</th>
                <th>Organizador</th>
                <th>Numero de Entradas</th>
                <th>Numero de Entradas vendidas</th>
                <th>Borrar</th>
            <tr>
            <?php
            if($bandera==true){
                foreach ($rows1 as $row1) {
              ?>
            <tr>
                <td><?php echo $row1[1]?></td>
                <td><?php echo $row1[2]?></td>
                <td><?php echo $row1[3]?></td>
                <td>1</td>
                <td><a href="homeadmin.php?idEvento=<?php echo $row1[0]?>">Borrar</a></td>
            </tr>
            <?php }}else{
                echo "<p id='errorMessage'>No hay Eventos programados aun</p>";
            } ?>
        </table>
    </main>
    <aside>

    </aside>
</body>
</html>
