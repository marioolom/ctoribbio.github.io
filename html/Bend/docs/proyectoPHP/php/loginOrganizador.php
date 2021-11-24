
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
    <form class="form-signin m-5" action="" method="post" >
      <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mr-5 ml-5 mb-3 font-weight-normal" id="h1">Inicio de Sesion</h1>
      <label for="inputEmail" class="sr-only">ID de Organizador</label>
      <input type="text" id="inputEmail" class="form-control" placeholder="ID de Organizador" name="txt_idOrg" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" name="txt_codAcceso" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit" name="but_submit" id="btnSignIn">Iniciar Sesion</button>
    </form>
    <div class="float-center align-bottom mt-4">
        <a href="index.php"><button class="btn btn-primary">Login de Usuarios</button></a>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
</div>
  </body>
</html>
<?php
include "config.php";
$err = "";

if (isset($_POST['but_submit'])) {

    $idOrg = mysqli_real_escape_string($con, $_POST['txt_idOrg']);
    $codAcceso = mysqli_real_escape_string($con, $_POST['txt_codAcceso']);


    if ($idOrg != "" && $codAcceso != "") {

        $sql_query = "select count(*) as cntOrg from organizadores where idOrganizador=" . $idOrg . " and codAcceso=MD5('" . $codAcceso . "');";
        $result = mysqli_query($con, $sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntOrg'];

        if ($count > 0) {
            $_SESSION['idOrg'] = $idOrg;
            header('Location: organizador/index.php');
        } else {
            echo '<script>loginOrgError()</script>';
        }
    } else {
        echo '<script>loginOrgError()</script>';
    }
}
?>
<!--
<html>

<head>
    <title>Create simple login page with PHP and MySQL</title>
    <link href="../css/login.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="container">
        <form method="post" action="">
            <div id="div_login">
                <h1>Login</h1>
                <?php echo $err ?>
                <div>
                    <input type="text" class="textbox" id="txt_uname" name="txt_idOrg" placeholder="ID Organizador" />
                </div>
                <div>
                    <input type="password" class="textbox" id="txt_uname" name="txt_codAcceso" placeholder="Codigo de Acceso" />
                </div>
                <div>
                    <input type="submit" value="Iniciar Sesion" name="but_submit" id="but_submit" />
                </div>
            </div>
        </form>
    </div>
</body>

</html>