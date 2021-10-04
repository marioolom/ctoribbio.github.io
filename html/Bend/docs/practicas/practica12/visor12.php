<?php
echo "El method  usado fué: " ,$_SERVER['REQUEST_METHOD'],"<br>";
printf("%'*12.2f Euros", $_GET['numero']);
echo "<br>";
echo strtoupper(substr($_GET['texto'],0,10)),substr($_GET['texto'],10);