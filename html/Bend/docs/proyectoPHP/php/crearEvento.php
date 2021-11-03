<?php
include "config.php";
if(!isset($_SESSION['uname'])){
    header('Location: index.php');
}
$err="";
if(isset($_POST['but_submit'])){
    $idOrganizador=mysqli_real_escape_string($con,$_POST['idOrganizador']);
    $nombreEvento=mysqli_real_escape_string($con,$_POST['nombreEvento']);
    $descripcionEvento=mysqli_real_escape_string($con,$_POST['descripcionEvento']);
    $localizacionEvento=mysqli_real_escape_string($con,$_POST['localizacionEvento']);
$sql_query = "INSERT INTO eventos(idOrganizador,nombreEvento,descripcionEvento,localizacionEvento) values
    (".$idOrganizador.",'".$nombreEvento."','".$descripcionEvento."','".$localizacionEvento."');";
if(mysqli_query($con,$sql_query)){
    header('location: confirmacion.php');
}else{
    $err= "Dato no introducido";
}
}
?>
<!doctype html>
<html>
    <head>
    <link href="../css/crearEvento.css" rel="stylesheet" type="text/css">
    </head>
    <body>
    <form method="post" action="">
    <div id="div_login">
        <h1>Crear Nuevo Evento</h1>
        <?php echo $err?>
        <div>
            <input type="text" class="textbox" id="txt_uname" name="idOrganizador" placeholder="ID Organizador" />
        </div>
        <div>
            <input type="text" class="textbox" id="txt_uname" name="nombreEvento" placeholder="Nombre Evento"/>
        </div>
        <div>
            <input type="text" class="textbox" id="txt_uname" name="descripcionEvento" placeholder="Descripcion Evento"/>
        </div>
        <div>
            <input type="text" class="textbox" id="txt_uname" name="localizacionEvento" placeholder="Localizacion Evento"/>
        </div>
        <div>
            <input type="submit" value="Introducir" name="but_submit" id="but_submit" />
        </div>
    </div>
    </form>
    <a href="./home.php">Enlace</a>
    </body>
</html>