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
    $sql_query2 = "select eventos.idEvento from eventos WHERE nombreEvento='".$_POST['idEvento']."';";
    $result2 = mysqli_query($con,$sql_query);
    echo $sql_query2;
    while($row2 = $result2->fetch_array()){
        $rows2[] = $row2;
    }
    foreach($rows2 as $row2){
        echo $row2['idEvento']."<br>";
    }

}
?>
<!doctype html>
<html>
    <head></head>
    <body>
        <table border="2">
            <form method="post" action="">
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
