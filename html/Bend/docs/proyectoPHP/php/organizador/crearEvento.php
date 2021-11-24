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
    $filepath = "../../uploads/" . $_FILES["file"]["name"];
    $sql_query = "INSERT INTO eventos(idOrganizador,nombreEvento,descripcionEvento,localizacionEvento,path) values
    (" . $idOrganizador . ",'" . $nombreEvento . "','" . $descripcionEvento . "','" . $localizacionEvento . "','" . $filepath . "');";
    if (mysqli_query($con, $sql_query) && move_uploaded_file($_FILES["file"]["tmp_name"], $filepath)) {
        header('location: index.php');
    } else {
        
    }
}
?>
<!doctype html>
<html>

<head>
   <!-- <link href="../../css/crearEvento.css" rel="stylesheet" type="text/css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body class="d-flex justify-content-center">

<div class="ml-5 mt-3 border border-primary d-flex">
    
    <form method="post" action="" enctype="multipart/form-data" class="form-group">  
    <h1 class="h3 text-center">Crear Nuevo Evento</h1>
            <div class="m-1 d-flex justify-content-center">
                <input type="text" class="textbox" required id="txt_uname" name="nombreEvento" placeholder="Nombre Evento" />
            </div>
            <div class="m-1 d-flex justify-content-center">
                <input type="text" class="textbox" required id="txt_uname" name="descripcionEvento" placeholder="Descripcion Evento" />
            </div>
            <div class="m-1 d-flex justify-content-center">
                <input type="text" class="textbox" required id="txt_uname" name="localizacionEvento" placeholder="Localizacion Evento" />
            </div class="m-1">
            <div class="d-flex justify-content-right custom-file ">
                <input type="file" class="custom-file-input" required id="customFile" name="file">
            <label class="custom-file-label" for="customFile">Miniatura</label>
        
            </div>
            <div class="m-1 d-flex justify-content-center">
                <button type="submit"name="but_submit" id="but_submit" class="btn btn-primary mr-3">Introducir</button>
                <a href="index.php"><button" id="but_submit" class="btn btn-secondary">Volver</button></a>
            </div>
    
    </form>
</div> 
</body>

</html>