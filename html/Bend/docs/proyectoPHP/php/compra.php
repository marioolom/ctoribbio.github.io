<?php
include "config.php";

$sql_query = "select MIN(tickets.precioTicket) as minPrecio,eventos.*,organizadores.nombre from tickets,eventos INNER JOIN organizadores on organizadores.idOrganizador = eventos.idOrganizador WHERE tickets.username is null GROUP BY idEvento;";
$result = mysqli_query($con,$sql_query);
while($row = $result->fetch_array()){
    $rows[] = $row;
}

?>
<!doctype html>
<html>
    
    <head>
    <link rel="stylesheet" href="../css/prueba.css" type="text/css">
    </head>
    <body>
        <div>
            <?php
            
            foreach($rows as $row){ 
                ?>
                    <div class="column element">
                        <a href="http://google.com"> <span class="hyperspan"></span></a>
                        <img src="<?php echo $row['path']; ?>" alt="Snow">
                        <p class="precio">Desde <strong><?php echo $row['minPrecio'];?> </strong>Euros</p>
                        <p class="nombreEvento">Evento: <?php echo $row['nombreEvento']; ?></p>
                        <p class="nombreEvento">Organizador: <?php echo $row['nombre']; ?></p>
                    </div>
                <?php } ?>
    </body>
</html>