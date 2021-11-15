<?php
include "config.php";
if (!isset($_SESSION['idOrg'])) {
    header('Location: loginOrganizador.php');
}

$sql_query = "select eventos.* from eventos;";
$result = mysqli_query($con, $sql_query);
while ($row = $result->fetch_array()) {
    $rows[] = $row;
}
$bandera = true;
if (isset($_POST['but_submit'])) {
    $sql_query2 = "select eventos.idEvento from eventos WHERE nombreEvento='" . $_POST['idEvento'] . "';";
    $result2 = mysqli_query($con, $sql_query2);
    $row2 = mysqli_fetch_array($result2);
    for ($i = 0; $i < $_POST['numeroEntradas']; $i++) {
        $sql_query3 = "INSERT INTO tickets(idEvento,precioTicket) values
        (" . $row2['idEvento'] . "," . $_POST['precioEntradas'] . ");";
        if (!mysqli_query($con, $sql_query3)) {
            $bandera = false;
        }
    }
    if (!$bandera) {
        echo "Error";
    } else {
        echo "introducido";
    }
}
?>
<!doctype html>
<html>

<head></head>

<body>
    <table border="2">
        <form method="post" action="">
            <label for="idEvento">Numero de entradas (1-100):</label>
            <input type="number" id="" name="numeroEntradas" min="1" max="100"><br>
            <label for="idEvento">Precio de las entradas (1-9999):</label>
            <input type="number" id="" name="precioEntradas" min="1" max="9999"><br>
            <select name="idEvento">
                <?php
                foreach ($rows as $row) {
                    echo '<option value="' . $row['nombreEvento'] . '">' . $row['nombreEvento'] . '</option>';
                }
                ?>
            </select>
            <input type="submit" value="Introducir" name="but_submit" id="but_submit" />
        </form>
</body>

</html>