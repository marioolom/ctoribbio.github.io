<?php 

echo "El method  usado fué: " ,$_SERVER['REQUEST_METHOD'],"<br>";

$a=  $_GET['num1']+$_GET['num2'];

$b=  $_GET['num1']-$_GET['num2'];

$c=  $_GET['num1']*$_GET['num2'];

$d=  $_GET['num1']/$_GET['num2'];

$e=pow(($_GET['num1']+$_GET['num2']),4);

$f=pow((pow(( $_GET['num1']+$_GET['num2']),1/2)),1);

echo  number_format($a ,4 , "," ,"."),"<br>";
echo  number_format($b ,4 , "," ,"."),"<br>";
echo  number_format($c ,4 , "," ,"."),"<br>";
echo  number_format($d ,4 , "," ,"."),"<br>";
echo  number_format($e ,4 , "," ,"."),"<br>";
echo  number_format($f ,4 , "," ,"."),"<br>";
?>