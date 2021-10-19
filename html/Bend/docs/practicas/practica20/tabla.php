<?php
$columna=8;
print("<table border='2'>");
for ($i=1;$i<$columna;$i++){
    print("<tr>");
    for ($j=1;$j<$columna;$j++){
        print("<td>".($i*$j)."</td>");
}
}
print("</table>");
?>