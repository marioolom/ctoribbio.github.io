<?php
echo "El method  usado fué: " ,$_SERVER['REQUEST_METHOD'],"<br>";
printf("%'*12.2f Euros", $_GET['numero']);
echo "<br>";
echo strtoupper(substr(nl2br($_GET['texto']),0,10)).strtolower(substr(nl2br($_GET['texto']),10));
$a=123;
$b="123";


