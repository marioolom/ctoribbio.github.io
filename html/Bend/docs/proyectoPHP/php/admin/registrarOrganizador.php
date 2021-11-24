<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Signin Template for Bootstrap</title>
    <!-- Bootstrap core CSS -->
    <link href="../../css/signin.css" rel="stylesheet">
</head>

<body class="text-center">
    <div class="d-flex justify-content-center">
        <div class="align-left">
            <form class="form-signin m-5 float-center " action="" method="post">
                <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h1 class="h3 mr-5 ml-5 mb-3 font-weight-normal" id="h1">Registro</h1>
                <label for="inputEmail" class="sr-only">ID de Organizador</label>
                <input type="text" id="inputEmail" class="form-control" placeholder="ID de Organizador" name="txt_idOrg" required autofocus>
                <label for="inputPassword" class="sr-only">Codigo de Acceo</label>
                <input type="password" id="inputPassword" class="form-control custom" placeholder="Codigo de Acceso" name="txt_codAcceso" required>
                <input type="text" id="inputName" class="form-control" placeholder="Nombre" name="txt_nombre" required>
                <label for="inputPassword" class="sr-only">Apellidos</label>
                <textarea type="text" id="inputPassword" class="form-control" placeholder="Descripcion" name="txt_descrip" required></textarea>
                <button class="btn btn-lg btn-primary btn-block" type="submit" name="but_submit" id="btnSignIn">Registrar</button>
            </form>
        </div>
        <div class="align-self-end ">
            <a href="index.php"><button class="btn btn-primary">Atrás</button></a>
        </div>
    </div>
    <script type="text/javascript" src="../js/main.js"></script>
</body>

</html>

<?php
include "../config.php";
$err = "";
if (isset($_POST['but_submit'])) {

    $idOrg = mysqli_real_escape_string($con, $_POST['txt_idOrg']);
    $codAcceso = mysqli_real_escape_string($con, $_POST['txt_codAcceso']);
    $nombre = mysqli_real_escape_string($con, $_POST['txt_nombre']);
    $descripcion = mysqli_real_escape_string($con, $_POST['txt_descrip']);

    if ($idOrg != "" && $codAcceso != "" && $nombre != "" && $descripcion != "") {

        $sql_query = "select count(*) as cntOrg from organizadores where idOrganizador='" . $idOrg . "'";
        $result = mysqli_query($con, $sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntOrg'];

        if ($count <= 0) {
            $sql_query = "INSERT INTO organizadores(idOrganizador,codAcceso,nombre,descripcion)values
            (" . $idOrg . ",MD5('" . $codAcceso . "'),'" . $nombre . "','" . $descripcion . "');";
            if (mysqli_query($con, $sql_query)) {
                header('Location: index.php');
            } else {
                $err = "Dato no introducido";
                echo "<p>" . $sql_query . "</p>";
            }
        } else {
            $err = "El Organizador ya existe";
        }
    } else {
        $err = "No se permiten campos vacios ";
    }
}
if (!isset($_SESSION['uname'])) {
    header('Location: index.php');
}
?>