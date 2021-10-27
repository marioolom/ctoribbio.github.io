<?php
# recogemos en una variable el nombre de BASE DE DATOS 

$base="ctoribbio"; 


$tabla="demo4"; 

$c=mysqli_connect("localhost","cesar","cesar"); 

$v1=$_GET['DNI'];
$v1=$_GET['DNI'];
mysqli_query($c,"INSERT $tabla (DNI,Nombre,Apellido1,Apellido2, Nacimiento,Sexo,Hora,Fumador,Idiomas) VALUES ('$v1','$v2','$v3','$v4','$v5','$v6','$v7','$v8',$v9)"); 
?>