<?php
function crearTabla($col,$fil){
    print("<table border='2'>");
    for ($i=1;$i<=$col;$i++){
        print("<tr>");
        for ($j=1;$j<=$fil;$j++){
            print("<td>".($i*$j)."</td>");
    }
    }
    print("</table>");
}
crearTabla(5,5);
?>