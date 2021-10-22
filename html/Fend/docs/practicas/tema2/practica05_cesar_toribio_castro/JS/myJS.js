// CESAR TORIBIO CASTRO.- PRACTICA 05.- SENTENCIA WHILE 

alert("Ejercicio 1.- Numeros hasta que el segundo sea mayor");
var numero1=parseInt(prompt("Introduce un numero"))
do{
    var numero2=parseInt(prompt("Introduce un numero"));
}while(numero1>=numero2)

alert("Ejercicio 2.- Numero de positivos ");
var numero1=parseInt(prompt("Introduce el numero de positivos a introducir"));
var count=0;
while(count<numero1){
    var numero2=parseInt(prompt("Introduce un numero"));
    if(numero2>0){
        count++
    }
}

alert("Ejercicio 3");
var num=100;
var cadena='';
do{
    cadena+=num+",";
    num--;
}while(num>0);
alert(cadena);

alert("Ejercicio 4");
var suma=0;
var num=2;
do{
    suma+=num;
    num+=2;
}while(num<102);
alert(suma);

alert("Ejercicio 5")
suma=0;
var numero2=0;
while(numero2>=0){
    suma+=numero2;
    numero2=parseInt(prompt("Introduce un numero"));
}
alert(suma)

alert("Ejercicio 6");
numero1=parseInt(prompt("Introduce un minimo"));
numero2=parseInt(prompt("Introduce un maximo"));
count=-1;
do{
    numero3=parseInt(prompt("Introduce un numero"));
    count++;
}while(numero3>numero1&&numero3<numero2);
alert(count);

alert("Ejercicio 7");
count=0;
var titulo=prompt("Introduce un titulo de libro");
var lista='';
while(titulo.toLowerCase()!='salir'){
    count++;
    lista+=count+('.- ')+titulo+'\n';
    titulo=prompt("Introduce un titulo de libro");
}
alert(lista);



































