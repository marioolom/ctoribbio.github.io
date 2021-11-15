<?php
include "config.php";
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
            (" . $idOrg . ",'" . $codAcceso . "','" . $nombre . "','" . $descripcion . "');";
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
                <h1>Registrar Organizador</h1>
                <?php echo $err; ?>
                <div>
                    <input type="text" class="textbox" id="txt_idOrg" name="txt_idOrg" placeholder="ID Organizador" />
                </div>
                <div>
                    <input type="text" class="textbox" id="txt_nombre" name="txt_nombre" placeholder="Nombre" />
                </div>
                <div>
                    <input type="password" class="textbox" id="txt_nom" name="txt_codAcceso" placeholder="Codigo de Acceso" />
                </div>
                <div>
                    <input type="text" class="textbox" id="txt_descrip" name="txt_descrip" placeholder="Descripcion" />
                </div>
                <div>
                    <input type="submit" value="Iniciar Sesion" name="but_submit" id="but_submit" />
                </div>
            </div>
        </form>
    </div>
</body>

</html>