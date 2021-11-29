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
    <script type="text/javascript" src="../js/main.js"></script>
    <!-- Bootstrap core CSS -->
    <link href="../css/signin.css" rel="stylesheet">
    <script type="text/javascript" src="../js/main.js"></script>
</head>

<body class="text-center">
    <div class="d-flex justify-content-center">
        <div class="align-left">
            <form class="form-signin m-5 float-center " action="" method="post">
                <embed class="mb-4" src="../assets/logo.svg" alt="" width="72" height="72">
                <h1 class="h3 mr-5 ml-5 mb-3 font-weight-normal" id="h1">Registro</h1>
                <label for="inputEmail" class="sr-only">Usuario</label>
                <input type="text" id="inputEmail" class="form-control" placeholder="Usuario" name="txt_uname" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control custom" placeholder="Contraseña" name="txt_pwd" required>
                <input type="text" id="inputName" class="form-control" placeholder="Nombre" name="txt_nombre" required>
                <label for="inputPassword" class="sr-only">Apellidos</label>
                <input type="text" id="inputPassword" class="form-control" placeholder="Apellidos" name="txt_apel" required>
                <label for="inputPassword" class="sr-only">Fecha de Nacimiento</label>
                <input type="date" id="inputFecha" class="form-control" placeholder="" name="fechaN" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit" name="but_submit" id="btnSignIn">Registrarse</button>
            </form>
        </div>
        <div class="align-self-end ">
            <a href="index.php"><button class="btn btn-primary">Inicio de Sesion</button></a>
        </div>
    </div>
    <script>calcularFecha();</script>
</body>

</html>




<?php
include "config.php";
$err = "";
if (isset($_POST['but_submit'])) {

    $uname = mysqli_real_escape_string($con, $_POST['txt_uname']);
    $password = mysqli_real_escape_string($con, $_POST['txt_pwd']);
    $nombre = mysqli_real_escape_string($con, $_POST['txt_nombre']);
    $apellidos = mysqli_real_escape_string($con, $_POST['txt_apel']);
    $fechaN = mysqli_real_escape_string($con, $_POST['fechaN']);

    if ($uname != "" && $password != "" && $nombre != "" && $apellidos != "" && $fechaN != "") {

        $sql_query = "select count(*) as cntUser from users where username='" . $uname . "'";
        $result = mysqli_query($con, $sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntUser'];

        if ($count <= 0) {
            $sql_query = "INSERT INTO users(username,password,nombre,apellidos,fechaNacimiento,tipoUsuario)values
            ('" . $uname . "',MD5('" . $password . "'),'" . $nombre . "','" . $apellidos . "','" . $fechaN . "'," . 0 . ");";
            if (mysqli_query($con, $sql_query)) {
                header('Location: index.php');
            } else {
                $err = "Dato no introducido";
                echo "<p>" . $sql_query . "</p>";
            }
        } else {
            $err = "El usuario ya existe";
        }
    } else {
        $err = "No se permiten campos vacios ";
    }
}
?>