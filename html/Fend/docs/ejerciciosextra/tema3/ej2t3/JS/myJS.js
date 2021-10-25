alert("Ejercicio 1.- Areas de distintas figuras geometricas");

var lado=parseFloat(prompt("Introduce un numero que servira de lado / radio"));

var aCuadrado= Math.pow(lado,2);
var aTriangulo= Math.pow(lado,2)/2;
var aRectangulo= lado*(lado*2);
var aCircumferencia= Math.PI*Math.pow(lado, 2);

alert("AREAS\nEl area del cuadrado es "+aCuadrado+"cm\n"+
"El area del triangulo es "+aTriangulo+"cm\n El area del rectangulo es "+aRectangulo+"cm\n"+
"El area de la circunferencia es "+Math.round(aCircumferencia)+"cm");

alert("Ejercicio 2");
var numeros= new Array();

for(var i=0;i<4;i++){
    numeros.push(Math.trunc(Math.random()*(51-1+1)+1));
}
alert(numeros.join());

numeros.sort();

alert(numeros.sort(function(a,b){
    return a-b;
}));

