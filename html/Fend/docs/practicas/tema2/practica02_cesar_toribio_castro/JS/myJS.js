//CESAR TORIBIO 2ºDAW DESARROLLO LADO CLIENTE


alert("Ejercicio 1");
alert("(34 + 5)*3/2= " + (34 + 5) * 3 / 2);
alert("Ejercicio 2");
var numero1 = prompt("Introduce el numero que quieres comprobar...");
var par = numero1 % 2;
par == 0 ? alert("El numero es par") : alert("El numero es impar"); //primer valor despues de los : para true, segundo para false

alert("Ejercicio 3.- Un numero, sumar 5 e incrementar 1");
var numero2 = prompt("Introduce el numero con el que quieres trabajar...");
var x = (parseInt(numero2) + 5)
alert(++x); //realizo el incremento antes de la alerta

alert("Ejercicio 4.- Decrementar 1 al valor introducido por el usuario");
var numero3 = prompt("Introduce el numero con el que quieres trabajar...");
var x = (parseInt(numero3));
alert(--x);

alert("Ejercicio 5.- Comprobar mayor o menor de edad");
var edad = prompt("Introduce tu edad")
edad > 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad");

alert("Ejercicio 6.- Comprobar si los numeros introducidos son iguales");
var numero1 = prompt("Introduce el primer numero que quieres comprobar...");
var numero2 = prompt("Introduce el segundo numero que quieres comprobar...");

numero1 == numero2 ? alert("Son iguales") : alert("Son diferentes");

alert("Ejercicio 7.- Sumar dos numeros introducidos por el usuario");
var numero1 = prompt("Introduce el primer numero que quieres sumar...");
var numero2 = prompt("Introduce el segundo numero que quieres sumar...");

alert("La suma es igual a " + (parseInt(numero1) + parseInt(numero2))); //parseo los numeros para que no se concatenenen

alert("Ejercicio 8.- Operandos AND y OR")
var a = 0
var b = 1;
var c = 0
var A = (a && b) == (a && c); //Hago las comparaciones y las asigno a variables
var B = (a || b) != (a && c);
var C = (a && c) == (b && c);
var D = (b || c) != (b || a);

alert("A.- (A AND B) es igual a (A AND C).-" + A);      //(FALSE) == (FALSE) = TRUE
alert("B.- (A OR B) es distinto a (A AND C).-" + B);    //(TRUE) != (FALSE) = TRUE
alert("C.- (A AND C) es igual a (B AND C).-" + C);      //(FALSE) == (FALSE) = TRUE
alert("D.- (B OR C) es distinto a (B OR A).-" + D);     //(TRUE) == (TRUE) = FALSE
