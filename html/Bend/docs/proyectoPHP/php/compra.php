<?php
include "config.php";

$sql_query = "select MIN(tickets.precioTicket) as minPrecio,eventos.* from eventos,tickets WHERE tickets.username is null;";
$result = mysqli_query($con,$sql_query);
while($row = $result->fetch_array()){
    $rows[] = $row;
}

?>
<!doctype html>
<html>
    <head></head>
    <body>
        <table border="2">
            <tr>
                <th>Nombre</th>
                <th>Organizador</th>
                <th>Localizacion</th>
                <th>Precio</th>
            </tr>
            <?php
            foreach($rows as $row){
                echo '<tr><td>'.$row['nombreEvento'].'</td>';
                echo '<td>'.$row['idOrganizador'].'</td>';
                echo '<td>'.$row['localizacionEvento'].'</td>'; 
                echo '<td>'.$row['minPrecio'].'</td></tr>'; 
            }
        ?>

        </table>
    </body>
</html>