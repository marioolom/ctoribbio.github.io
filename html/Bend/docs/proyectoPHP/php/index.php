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
</head>

<body class="text-center">
    <div>
        <div class="align-left">
            <form class="form-signin m-5 float-center " action="" method="post">
                <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h1 class="h3 mr-5 ml-5 mb-3 font-weight-normal" id="h1">Inicio de Sesion</h1>
                <label for="inputEmail" class="sr-only">Usuario</label>
                <input type="text" id="inputEmail" class="form-control" placeholder="Usuario" name="txt_uname" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" name="txt_pwd" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit" name="but_submit" id="btnSignIn">Iniciar Sesion</button>
                <a href="registro.php">Registrate ahora.</a>
            </form>
        </div>
        <div class="left align-bottom mt-4">
            <a href="loginOrganizador.php"><button class="btn btn-primary">Login Organizadores</button></a>
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </div>
</body>

</html>
<?php
include "config.php";


if (isset($_POST['but_submit'])) {

    $uname = mysqli_real_escape_string($con, $_POST['txt_uname']);
    $password = mysqli_real_escape_string($con, $_POST['txt_pwd']);


    if ($uname != "" && $password != "") {

        $sql_query = "select count(*) as cntUser,tipoUsuario from users where username='" . $uname . "' and password='" . $password . "'";
        $result = mysqli_query($con, $sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntUser'];

        if ($count > 0) {
            if ($row['tipoUsuario'] == 1) {
                $_SESSION['uname'] = $uname;
                header('Location: admin/index.php');
            } else {
                $_SESSION['uname'] = $uname;
                header('Location: user/index.php');
            }
        } else {
            echo '<script>loginError()</script>';
        }
    } else {
        echo '<script>loginError()</script>';
    }
}
?>