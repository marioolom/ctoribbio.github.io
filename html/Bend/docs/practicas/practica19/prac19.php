<?php
# definamos un array bidimensional
$z=array( 
 0 => array (
 0 => 34, 
 1 => 35, 
 2 => 36, 
 ),
 1 => array (
 0 => 134, 
 1 => 135, 
 2 => 136, 
 )
);
# intentemos leer indices y valores mediante un bucle foreach
# y veamos como los valores que extraemos son Arrays (unidimensionales)
# consecuencia del caracter bidimensional del array original
foreach($z as $pepe=>$pepa) {
 echo "Indice: ",$pepe," Valor: ",$pepa,"<br>";
}
/* anidemos dos bucles foreach de la siguiente forma 
 en el primero extraemos un array que es tratado por
 el segundo foreach para extraer el segundo indice
 y el valor realmente contenido en ese elemento bidimensional */
foreach($z as $ind1=>$valor1) {
    foreach($valor1 as $ind2=>$valorReal) {
     echo "Ind. 1: ",$ind1,"Ind. 2: ",$ind2," Valor: ",$valorReal,"<br>";
    }
}
