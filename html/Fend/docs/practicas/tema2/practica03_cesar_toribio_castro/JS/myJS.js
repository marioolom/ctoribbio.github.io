alert("Ejercicio 1.- Comprobar 5 y 6")
if(5>6){
    alert("El numero 5 es mayor que el numero 6");

}else{
    if(5==6){
        alert("El numero 5 y el 6 son iguales");

    } else{
        alert("El numero 6 es mayor que el numero 5");

    }
}

alert("Ejercicio 2.-Comprobar si un numero es positivo o negativo")
var numero1=prompt("Introduce el numero con el que quieres trabajar");
if(parseInt(numero1)>0){
    alert("El numero es positivo")
} else{
    if(parseInt(numero1)==0){
        alert("El numero es igual a 0");

    }else{
        alert("El numero es negativo");

    }
}

alert("Ejercicio 3.- Comprobar si un numero es 0 o es distinto de cero")
var numero1=prompt("Introduce el numero con el que quieres trabajar");
if(parseInt(numero1)==0){
    alert("El numero es cero")
} else{
    alert("El numero es distinto de cero");

    }

alert("Ejercicio 4.-Comprobar si un numero es positivo o negativo y si es o no distinto de cero ")
var numero1=prompt("Introduce el numero con el que quieres trabajar");
if(parseInt(numero1)>0){
    alert("El numero es positivo y distinto de cero")
} else{
    if(parseInt(numero1)==0){
        alert("El numero es igual a 0");

    }else{
        alert("El numero es negativo y distinto de cero");

    }
}

alert("Ejercicio 5.- Dias de la semana")
var diaDLS=prompt("Introduce el dia de la semana con el que quieres trabajar");
if(diaDLS.toLowerCase() == "lunes"){
    alert("Empezando la semana...")
} else if(diaDLS.toLowerCase() == "viernes"){
    alert("Fiestaaa!")
}else{
    alert("A seguir con la semana...")
}

alert("Ejercicio 6.- Comparar dos numeros")
numero1=prompt("Introduce el primer numero");
numero2=prompt("Introduce el segundo numero");

if(numero1>numero2){
    alert("El primero es mayor que el segundo");

}else{
    if(numero1==numero2){
        alert("El primero y el segundo son iguales");

    } else{
        alert("El segundo es mayor que el primero");

    }
}

alert("Ejercicio 7.- Edades 3 personas")
edad1=parseInt(prompt("Introduce la edad de la persona 1"));
edad2=parseInt(prompt("Introduce la edad de la persona 2"));
edad3=parseInt(prompt("Introduce la edad de la persona 3"));
if(edad1>edad2){
    alert("Que mayor eres!")
}else if(edad1<edad2){
    alert("uiiii!")
}else{
    alert("Teneis la misma edad!")
}

if(edad2>edad3){
    alert("Con 5 años todavia hay que ir al cole");
}else{
    alert("Seguimos en el cole");
}

alert("Ejercicio 8.- Tabla de multiplicar")
var numero1=parseInt(prompt("Introduce el numero con el que quieres trabajar"));
if(numero1==0){
    alert("Error, el numero no puede ser 0")
} else{
    alert("La tabla de Multiplicar del numero "+numero1);
    alert(numero1+" x 1= "+numero1*1);
    alert(numero1+" x 2= "+numero1*2);
    alert(numero1+" x 3= "+numero1*3);
    alert(numero1+" x 4= "+numero1*4);
    alert(numero1+" x 5= "+numero1*5);
    alert(numero1+" x 6= "+numero1*6);
    alert(numero1+" x 7= "+numero1*7);
    alert(numero1+" x 8= "+numero1*8);
    alert(numero1+" x 9= "+numero1*9);
    alert(numero1+" x 10= "+numero1*10);
}

alert("Ejercicio 9.- Tres numeros y producto o suma")
numero1=parseInt(prompt("Introduce el primer numero"));
numero2=parseInt(prompt("Introduce el segundo numero"));
numero3=parseInt(prompt("Introduce el tercer numero"));
if(numero1<0){
    alert("El producto de los tres es: "+numero1*numero2*numero3)
}else{
    alert("El producto de los tres es: "+(numero1+numero2+numero3))
}

alert("Ejercicio 10.- Comprobar y mostrar 3 numeros")
numero1=parseInt(prompt("Introduce un numero"));
if(numero1>100){
    alert("El numero es mayor que 100")
}else{
    alert("El numero es menor o igual que 100");
}
numero2=parseInt(prompt("Introduce otro numero"));
if(numero2<50){
    alert("El numero es menor que 50")
}else{
    alert("El numero es mayor o igual que 50");
}
numero3=parseInt(prompt("Introduce otro numero"));
if(numero3==10){
    alert("El numero es igual que 10")
}else{
    alert("El numero es distinto a 10");
}

alert(numero1+", "+numero2+", "+numero3);
