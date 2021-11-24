
<?php
include "../config.php";
if (!isset($_SESSION['idOrg'])) {
    header('Location: ../loginOrganizador.php');
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
        header("Location:index.php");
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

<div class="ml-5 mt-3 p-5 border border-primary d-flex">
    
    <form method="post" action="" enctype="multipart/form-data" class="form-group">  
    <h1 class="h3 text-center">Crear Nuevo Tramo</h1>
            <div class="m-1 d-flex justify-content-center">
                <label for="idEvento">Numero de entradas (1-100):</label>
                <input type="number" id="" name="numeroEntradas" min="1" max="100"/>
            </div>
            <div class="m-3 d-flex justify-content-center">
            <label for="idEvento">Precio de las entradas (1-9999):</label>
            <input type="number" id="" name="precioEntradas" min="1" max="9999"><br>
            </div>
            <div class="m-3 ">
            <label for="idEvento" class="">Selecciona el Evento</label>
            <select name="idEvento" class="m-2">
                <?php
                foreach ($rows as $row) {
                    echo '<option value="' . $row['nombreEvento'] . '">' . $row['nombreEvento'] . '</option>';
                }
                ?>
            </select>
            </div>
            <div class="m-1 d-flex justify-content-center">
                <button type="submit"name="but_submit" id="but_submit" class="btn btn-primary mr-3">Introducir</button>
                <a href="index.php"><button" id="but_submit" class="btn btn-secondary">Volver</button></a>
            </div>
    
    </form>
</div> 
</body>

</html>