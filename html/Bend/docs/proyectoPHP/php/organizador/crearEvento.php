<?php
include "../config.php";
if (!isset($_SESSION['idOrg'])) {
    header('Location: ../index.php');
}
$err = "";
if (isset($_POST['but_submit'])) {
    $idOrganizador = $_SESSION['idOrg'];
    $nombreEvento = mysqli_real_escape_string($con, $_POST['nombreEvento']);
    $descripcionEvento = mysqli_real_escape_string($con, $_POST['descripcionEvento']);
    $localizacionEvento = mysqli_real_escape_string($con, $_POST['localizacionEvento']);
    $fecha= mysqli_real_escape_string($con, $_POST['fecha']);
    $filepath = "../../uploads/" . $_FILES["file"]["name"];
    $sql_query = "INSERT INTO eventos(idOrganizador,nombreEvento,descripcionEvento,localizacionEvento,fecha,path) values
    (" . $idOrganizador . ",'" . $nombreEvento . "','" . $descripcionEvento . "','" . $localizacionEvento . "','" . $fecha. "','" . $filepath . "');";
    if (mysqli_query($con, $sql_query) && move_uploaded_file($_FILES["file"]["tmp_name"], $filepath)) {
        header('location: index.php');
    } else {
        echo $sql_query;
    }
}
?>
<!doctype html>
<html>

<head>
   <!-- <link href="../../css/crearEvento.css" rel="stylesheet" type="text/css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script type="text/javascript" src="../../js/main.js"></script>
</head>

<body class="d-flex justify-content-center">

<div class="ml-5 mt-3 p-5 border border-primary d-flex">
    
    <form method="post" action="" enctype="multipart/form-data" class="form-group">  
    <h1 class="h3 text-center">Crear Nuevo Evento</h1>
            <div class="m-1 d-flex justify-content-center">
                <input type="text" class="textbox" required id="txt_uname" name="nombreEvento" placeholder="Nombre Evento" />
            </div>
            <div class="m-3 d-flex justify-content-center">
                <textarea type="textarea" class="" required id="txt_uname" name="descripcionEvento" placeholder="Descripcion Evento"></textarea>
            </div>
            <div class="m-3 d-flex justify-content-center">
                <input type="text" class="textbox" required id="txt_uname" name="localizacionEvento" placeholder="Localizacion Evento" />
            </div class="m-1">
            <div class="m-3 d-flex justify-content-center">
                <input type="date" class="custom-date" required id="inputFecha" name="fecha" placeholder="Fecha Evento"  />
            </div>
            <div class=" m-3 d-flex justify-content-right custom-file ">
                <input type="file" class="custom-file-input" required id="customFile" name="file">
            <label class="custom-file-label" for="customFile">Miniatura</label>
        
            </div>
            <div class="m-1 d-flex justify-content-center">
                <button type="submit"name="but_submit" id="but_submit" class="btn btn-primary mr-3">Introducir</button>
                <a href="index.php"><button" id="but_submit" class="btn btn-secondary">Volver</button></a>
            </div>
    
    </form>
</div> 
<script>fechaActual();</script>
</body>

</html>