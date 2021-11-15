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
            ('" . $uname . "','" . $password . "','" . $nombre . "','" . $apellidos . "','" . $fechaN . "'," . 1 . ");";
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

<html>

<head>
    <title>Create simple login page with PHP and MySQL</title>
    <link href="../css/registro.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="container">
        <form method="post" action="">
            <div id="div_login">
                <h1>Registro</h1>
                <?php echo $err; ?>
                <div>
                    <input type="text" class="textbox" id="txt_uname" name="txt_uname" placeholder="Usuario" />
                </div>
                <div>
                    <input type="password" class="textbox" id="txt_uname" name="txt_pwd" placeholder="Contraseña" />
                </div>
                <div>
                    <input type="text" class="textbox" id="txt_nombre" name="txt_nombre" placeholder="Nombre" />
                </div>
                <div>
                    <input type="text" class="textbox" id="txt_apel" name="txt_apel" placeholder="Apellidos" />
                </div>
                <div>
                    <input type="date" class="textbox" id="fechaN" name="fechaN" placeholder="Fecha de Nacimiento" />
                </div>
                <div class="bottom">
                    <input type="submit" value="Registrarse" name="but_submit" id="but_submit" class="boton"/>
                    <button class="boton">Iniciar Sesion</button> 
                </div>
            </div>
        </form>
    </div>
</body>

</html>