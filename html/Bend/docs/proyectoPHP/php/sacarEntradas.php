<?php 
include "config.php";
if(!isset($_SESSION['idOrg'])){
    header('Location: loginOrganizador.php');
}

$sql_query = "select eventos.* from eventos;";
$result = mysqli_query($con,$sql_query);
while($row = $result->fetch_array()){
    $rows[] = $row;
}

if(isset($_POST['but_submit'])){
    $sql_query2 = "select idEvento from eventos WHERE nombreEvento='".$_POST['idEvento']."'GROUP BY idEvento;";
    $result2 = mysqli_query($con,$sql_query2);
    while($row2 = $result2->fetch_array()){
        $rows2[] = $row2;
    }
    $bandera=true;
    for($i=0;$_POST['numeroEntradas'];$i++){
        $sql_query3="INSERT INTO tickets(idEvento,precioTicket) values
        (".$row2['idEvento'].",".$_POST['precioEntradas'].");";
        if(!mysqli_query($con,$sql_query3)){
            $bandera=false;
        }
    }
    if(!$bandera){
        echo "Error";
    }else{
        echo "introducido";
    }

}

?>
<!doctype html>
<html>
    <head></head>
    <body>
        <table border="2">
            <form method="post" action="">
                <label for="idEvento">Numero de entradas (1-100):</label>
                <input type="number" id="" name="numeroEntradas" min="1" max="100"><br>
                <label for="idEvento">Precio de las entradas (1-9999):</label>
                <input type="number" id="" name="precioEntradas" min="1" max="9999"><br>
                <select name="idEvento">
                <?php
                    foreach($rows as $row){
                    echo '<option value="'.$row['nombreEvento'].'">'.$row['nombreEvento'].'</option>';
                    }
                 ?>  
                </select>
            <input type="submit" value="Introducir" name="but_submit" id="but_submit" />
        </form>
    </body>
</html>
