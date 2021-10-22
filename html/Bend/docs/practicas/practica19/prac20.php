<?php
 $a=array("Lunes","Martes","Miercoloes","Jueves",
 "Viernes","Sábado","Domingo");
 $b=array(
 "Precio" => "17340 euros",
 "Color" => "Rojo",
 "Llantas" => "Aluminio");
 $c=47; $d=""; $e=array();
echo "<h3>Valores usando sizeof()</h3>";
echo " a tiene: ",sizeof($a)," elementos<br>";
echo " b tiene: ",sizeof($b)," elementos<br>";
echo " e tiene: ",sizeof($e)," elementos<br>";
echo " f tiene: ",sizeof($f)," elementos<br>";
echo "<h3>Valores usando count()</h3>";
echo " a tiene: ",count($a)," elementos<br>";
echo " b tiene: ",count($b)," elementos<br>";
echo " e tiene: ",count($e)," elementos<br>";
echo " f tiene: ",count($f)," elementos<br>";

$a=array("Lunes","Martes","Miercoloes","Jueves",
 "Viernes","Sábado","Domingo");
$b=array(
 "Precio"=>"17340 euros",
 "Color" =>"Rojo",
 "Llantas" =>"Aluminio");
$c=47; $d=""; $e=array();
echo "<h3>Variables definidas</h3>";
echo " ¿Esta definida la variable a ? ",isset($a),"<br>";
echo " ¿Esta definida la variable b ? ",isset($b),"<br>";
echo " ¿Esta definida la variable c ? ",isset($c),"<br>";
echo " ¿Esta definida la variable d ? ",isset($d),"<br>";
echo " ¿Esta definida la variable e ? ",isset($e),"<br>";
echo " ¿Esta definida la variable f ? ",isset($f),"<br>";
echo "<h3>Identificación de tipos de variables</h3>";
echo " ¿La variable a es un array ? ",is_array($a),"<br>";
echo " ¿La variable a es tipo double ? ",is_double($a),"<br>";
echo " ¿La variable a es un entero ? ",is_int($a),"<br>";
echo " ¿La variable a es un entero ? ",is_long($a),"<br>";
echo "<h3>Eliminando variables</h3>"; 
echo "La dimensión de a es: ",count($a),"<br>";
unset($a[0]); 
echo "Nueva dimensión de a: ",count($a),"<br>";
echo "La dimensión de b es: ",count($b),"<br>";
unset($b);
echo "Nueva dimensión de b: ",count($b),"<br>";
echo " ¿Sigue definida la variable b ? ",isset($b),"<br>";
?>