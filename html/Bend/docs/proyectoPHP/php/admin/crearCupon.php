<?php include "../config.php";

if (!isset($_SESSION['uname'])) {
    header('Location: ../index.php');
}

$bandera=true;
if(isset($_POST['enviarCupon'])){
    $sql_query3="SELECT * FROM cupones WHERE codigoCupon='".$_POST['codigoCupon']."';";
    echo $sql_query3;
    $result3=mysqli_query($con,$sql_query3);
    if(mysqli_num_rows($result3)>0){
        $bandera=false;
    }else{
        $sql_query4="INSERT INTO cupones(codigoCupon,username,cuantia) VALUES('".$_POST['codigoCupon']."','".$_POST['username']."',".$_POST['cuantia'].");";
        echo $sql_query4;
        $result4=mysqli_query($con,$sql_query4);
        if(!$result4){
           $bandera=false; 
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="containerForms" class="contenedor ancho  bordenegro fondoazul">
        <h2>Crear un nuevo cupon de descuento</h2>
        <?php if(!$bandera){
            echo "Error";
        }?>
    <form method="post" action="" class="formulario centrado">
        <input type="text" name="codigoCupon" placeholder="Codigo del cupón" required class="ancho"><br>
        <input type="text" name="username" placeholder="Usuario del cupon (global para globales)" value="global" required><br>
        <input type="number" name="cuantia" placeholder="Cantidad" required><br>
        <input type="submit" name="enviarCupon" placeholder="Crear">
        <input type="reset" name="reset" placeholder="Borrar">
    </form>
    <button><a href="index.php">Volver</a></button>
    </div>
</body>
</html>