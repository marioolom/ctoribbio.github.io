<?php 

echo "El method  usado fué: " ,$_SERVER['REQUEST_METHOD'],"<br>";

echo  $_GET['num1']+$_GET['num2'],"<br>";

echo  $_GET['num1']-$_GET['num2'],"<br>";

echo  $_GET['num1']*$_GET['num2'],"<br>";

echo  $_GET['num1']/$_GET['num2'],"<br>";

echo  ceil(pow(($_GET['num1']+$_GET['num2']),4)),"<br>";

echo  ceil(pow((pow(( $_GET['num1']+$_GET['num2']),1/2)),1)),"<br>";
?>