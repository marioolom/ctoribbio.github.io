<?php
include "../config.php";

// Check user login or not
if (!isset($_SESSION['uname'])) {
    header('Location: ../index.php');
}

// logout
if (isset($_POST['but_logout'])) {
    session_destroy();
    header('Location: ../index.php');
}
?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/navbar.css">
</head>

<body class="body">
<!--
<body>
    <header>Compra de entradas</header>
    <nav>
        <ul>
            <a href="./home.php">
                <div class="navItem">
                    <li>Inicio</li>
                </div>
            </a>
            <a href="./misTickets.php">
                <div class="navItem">
                    <li>Tus Tickets</li>
                </div>
            </a>
            <a href="./compra.php">
                <div class="navItem">
                    <li>Comprar Tickets</li>
                </div>
            </a>
            <div class="navItem">
                <li>
                    <form method='post' action="">
                        <input type="submit" value="Logout" name="but_logout">
                    </form>
                </li>
            </div>
            <ul>
    </nav> !-->
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="./index.php">TicketGo </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="./index.php">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="compra.php">Compra de entradas</a>
                </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="misTickets.php">Mis tickets</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-md-0" action="" method="post">
                <button class="btn btn-primary" name="but_logout" type="submit" placeholder="Logout" aria-label="Logout">Logout</button>
            </form>
        </div>
    </nav>
    <main>
    <div class="px-4 py-5 my-5 text-center bg-grey rounded mb-5">
    <embed class="d-block mx-auto mb-4" src="../../assets/logo.svg" alt="" width="100" height="100">
    <h1 class="display-5 fw-bold">No te pierdas nada</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Todos los eventos en tu zona, ciudad, comunidad, pais, estan aquí.<br>La diversion te espera</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="compra.php"><button type="button" class="btn btn-primary btn-lg px-4 gap-3">Compra ahora</button></a>
      </div>
    </div>
  </div>
  <div class="px-4 py-5 my-5 text-center bg-grey rounded mt-5">
  <embed class="d-block mx-auto mb-4" src="../../assets/logo.svg" alt="" width="100" height="100">
    <h1 class="display-5 fw-bold">Comparte con tus amigos</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Las entradas de todo el grupo en el mismo lugar, sin preocupaciones, sin problemas</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="misTickets.php"><button type="button" class="btn btn-primary btn-lg px-4 gap-3">Tus Tickets</button></a>
      </div>
    </div>
  </div>
    </main>
    <script>window.jQuery || document.write('<script src="../../js/jquery-slim.min.js"><\/script>')</script>
    <script src="../../js/popper.min.js"></script>
    <script type="text/javascript" src="../../js/bootstrap.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
</body>

</html>