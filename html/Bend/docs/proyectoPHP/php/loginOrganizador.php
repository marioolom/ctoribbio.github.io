<?php
include "config.php";
$err = "";

if (isset($_POST['but_submit'])) {

    $idOrg = mysqli_real_escape_string($con, $_POST['txt_idOrg']);
    $codAcceso = mysqli_real_escape_string($con, $_POST['txt_codAcceso']);


    if ($idOrg != "" && $codAcceso != "") {

        $sql_query = "select count(*) as cntOrg from organizadores where idOrganizador=" . $idOrg . " and codAcceso='" . $codAcceso . "';";
        $result = mysqli_query($con, $sql_query);
        $row = mysqli_fetch_array($result);

        $count = $row['cntOrg'];

        if ($count > 0) {
            $_SESSION['idOrg'] = $idOrg;
            header('Location: home.php');
        } else {
            $err = "ID Organizador o codigo de acceso incorrectos";
        }
    } else {
        $err = "No se permiten campos vacios ";
    }
}
?>
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