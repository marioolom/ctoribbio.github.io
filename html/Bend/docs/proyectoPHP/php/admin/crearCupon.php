



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
        }else{
            header("Location:index.php");
        }
    }
}
?>
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
    <!-- Bootstrap core CSS -->
    <link href="../../css/signin.css" rel="stylesheet">
</head>

<body class="text-center">
    <div class="d-flex justify-content-center">
        <div class="align-left">
            <form class="form-signin m-5 float-center " action="" method="post">
                <h1 class="h3 mr-5 ml-5 mb-3 font-weight-normal" id="h1">Registro</h1>
                <label for="codCupon" class="sr-only">ID de Organizador</label>
                <input type="text" id="codigoCupon" class="form-control" placeholder="Codigo del cupon" name="codigoCupon" required autofocus>
                <label for="inputUser" class="sr-only">Username</label>
                <input type="text" id="inputUser" class="form-control custom" placeholder="Username" value="global" name="username" required>
                <input type="number" class="form-control" placeholder="Cuantia en %" name="cuantia" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit" name="enviarCupon" id="btnSignIn">Crear Cupon</button>
            </form>
        </div>
        <div class="align-self-end ">
            <a href="index.php"><button class="btn btn-primary">Atrás</button></a>
        </div>
    </div>
    <script type="text/javascript" src="../js/main.js"></script>
</body>

</html>