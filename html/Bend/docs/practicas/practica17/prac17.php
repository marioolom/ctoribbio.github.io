<?php
$filas=5; $columnas=3;
print ("<table border=2 width=400 align=center>");
$filas--;
while ($filas>0):
 echo "<tr>";
 $filas--;
 while ($columnas>0):
 echo "<td>";
 print "fila: ".$filas." columna: ".$columnas;
 print ("</td>");
 $columnas--;
 endwhile;
 $columnas=3;
 echo "</TR>";
endwhile;
print "</table>";
?>