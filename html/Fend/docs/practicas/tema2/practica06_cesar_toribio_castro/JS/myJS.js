// CESAR TORIBIO CASTRO.- PRACTICA 05.- SENTENCIA FOR

alert("Ejercicio 1.- 5 Holas");
for(var i=0;i<5;i++){
    alert("Hola numero "+(i+1))
}

alert("Ejercicio 2.- Operaciones con dos numeros dados");
var n1=7;
var n2=8;
for(var i=0;i<2;i++){
    alert(
        n1+'+'+n2+('=')+(n1+n2)+('\n')+
        n1+'-'+n2+('=')+(n1-n2)+('\n')+
        n1+'x'+n2+('=')+(n1*n2)+('\n')+
        n1+'/'+n2+('=')+(n1/n2)+('\n'))
}

alert("Ejercicio 3.- Numeros del 1 al 20");
for(var i=1;i<21;i++){
    alert(i);
}

alert("Ejercicio 4.- Factorial");
var numero=parseInt(prompt("Introduce el numero del que quieres conocer el factorial"));
var factorial=1;
for(numero;numero!=1;numero--){
    factorial=factorial*numero;
}
alert(factorial);

alert("Ejercicio 5.- Del 1 a tu edad");
var edad=parseInt(prompt("Introduce tu edad"));
for(var i=1;i!=(edad+1);i++){
    alert(i);
}

alert("Ejercicio 6");
var numero=parseInt(prompt("Introduce un numero"));
for(var i=1;i<numero;i++){
    alert(i);
    i++;
}
alert("Ejercicio 7.- Dibujo con +");
var numero=parseInt(prompt("Introduce la altura del triangulo"));
var iteracion=1;
var dibujo='';
for(var i=0;i<numero;i++){
    for(var j=0;j<iteracion;j++){
        dibujo+='+';
    }
    dibujo+='\n';
    iteracion++;
}
alert(dibujo);

alert("Ejercicio 8.- Dibujo impares");
var numero=parseInt(prompt("Introduce la altura del triangulo"));
var iteracion=1;
var dibujo='';
linea='';
var impar=1;
for(var i=0;i<numero;i++){
    linea='';
    for(var j=0;j<iteracion;j++){
        linea=impar+" "+linea;
        impar=impar+2;
    }
    impar=1;
    dibujo+=linea+'\n';
    iteracion++;
}
alert(dibujo);