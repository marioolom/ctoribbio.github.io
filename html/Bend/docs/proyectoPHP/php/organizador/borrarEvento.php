<?php
include "../config.php";
if (!isset($_SESSION['idOrg'])) {
    header('Location: ../loginOrganizador.php');
}
$sql_query = "select * from eventos";
$result = mysqli_query($con, $sql_query);
while ($row = $result->fetch_array()) {
    $rows[] = $row;
}

$err = "";
if (isset($_POST['but_submit'])) {
    $idEvento = $_POST['borrado'];
    $sql_query = "DELETE FROM eventos WHERE idEvento=" . $idEvento . ";";
    $sql_query2 = "DELETE FROM tickets WHERE idEvento=" . $idEvento . ";";
    echo $sql_query;
    if (mysqli_query($con, $sql_query) && mysqli_query($con, $sql_query2)) {
        $err = "Borrado";
        header("Refresh:0");
    } else {
        $err = "Dato no introducido";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <link href="../../css/crearEvento.css" rel="stylesheet" type="text/css">
</head>

<body>
    <form method="post" action="">
        <div id="div_login">
            <h1>Borrar Evento</h1>
            <?php echo $err; ?>
            <div>
                <select name="borrado">
                    <?php
                    $i = 1;
                    foreach ($rows as $row) {
                        echo "<option value='" . $row['idEvento'] . "'>" . $row['nombreEvento'] . " </option>";
                    }
                    ?>
                </select>
            </div>
            <div>
                <input type="submit" value="Introducir" name="but_submit" id="but_submit" />
            </div>
        </div>
    </form>
</body>

</html>