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
$sql_query1 = "SELECT eventos.nombreEvento,organizadores.nombre, COUNT(tickets.idTicket)
                from eventos 
                inner join organizadores on eventos.idOrganizador = organizadores.idOrganizador 
                inner join tickets on eventos.idEvento= tickets.idEvento 
                WHERE tickets.username IS NULL
                GROUP BY tickets.idEvento;";

$result1 = mysqli_query($con, $sql_query1);
$bandera1=true;
if(mysqli_num_rows($result1)!==0){
    while ($row1 = $result1->fetch_array()) {
        $rows1[] = $row1;
    }
}else{
    $bandera1=false;
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
                <th>Numero de Entradas vendidas
            <tr>
            <?php foreach ($rows1 as $row1) { ?>
            <tr>
                <td><?php echo $row1[0]?></td>
                <td><?php echo $row1[1]?></td>
                <td><?php echo $row1[2]?></td>
                <td>1</td>
            </tr>
            <?php } ?>
        </table>
    </main>
    <aside>

    </aside>
</body>
</html>
