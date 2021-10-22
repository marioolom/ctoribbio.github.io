<?php
echo "<style>
html{
background-color:",$_GET['color'],"
}
</style>";
echo "El method  usado fué: " ,$_SERVER['REQUEST_METHOD'],"<br>";
$c[0]="Division exacta";
$c[1]="uno";
$c[2]="dos";
$c[3]="tres";
$c[4]="cuatro";
$c[5]="cinco";
$c[6]="seis";
$c[7]="siete";
$c[8]="ocho";
$c[9]="nueve";
$c[10]="diez";
$c[11]="once";

echo $c[$_GET['numero']%12];