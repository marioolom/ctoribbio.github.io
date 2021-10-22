<?php
$columna=[];
print("<table border='2'>");
for ($i=0;$i<6;){
    $bool=false;
    print("<tr>");
    $num=random_int(0,49);
    for($k=0;$k<count($columna);$k++){
        if($columna[$k]==$num){
            $bool=true;
        }
    }
    if(!$bool){
        $i++;
        array_push($columna,$num);
        print("<td>".($num)."</td>");
        print("</tr>");
    }
}
print("</table>");
?>