function contarNumeros(num){
    for(var i=num;i>0;i--){
        alert(i);
    }
}
function cambiarPosicion(num){
    var temp0=num.charAt(0);
    var temp1=num.charAt(1);
    var numeroFinal=temp1.concat(temp0);
    return(numeroFinal);
}

function operaciones(num1,num2){
    alert(num1+"+"+num2+"="+(num1+num2)+"\n"+num1+"-"+num2+"="+(num1-num2)+"\n"+num1+"*"+num2+"="+num1*num2+"\n"+num1+"/"+num2+"="+num1/num2+"\n");
}

//funcion 4 hacer una funcion que valide un email en base a si tiene @, mas de una @ o no tiene puntos 
function validarEmail(cadena){
    //validacion sencilla de que si un email no contiene @, punto, o mas de una arroba, retorne false
    //y si el email esta bien, retorne true 
    if(cadena.includes('@')==false || cadena.includes('.')==false|| cadena.substr((cadena.indexOf("@")+1),(cadena.length-1)).includes("@")){ 
        return false;
    }else{
        return true;
    }
}
//funcion 5 calcular la edad de alguien siendo pasado como argumento su fecha de nacimiento.
function calcularEdad(stringFecha) {
    var fechaActual = new Date(); //obtenemos la fecha actual
    var fechaN = new Date(stringFecha); //obtenemos una fecha de nacimiento con el string de la fecha de nacimiento
    var edad = fechaActual.getFullYear() - fechaN.getFullYear(); //calculamos la diferencia de años para tener una edad aproximada
    var mes = fechaActual.getMonth() - fechaN.getMonth(); //calculamos la diferencia de meses
    //calculamo que si la diferencia de meses es negativa, es decir, naciste un mes posterior al actual,
    //o que si el mes es el mismo, pero el dia en el que naciste es posterior, reste uno a la edad aproximada
    //que calculamos antes
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaN.getDate())) {
        edad--;
    }
    return edad; //devolvermos la edad
}
//funcion 6

function calculoNominas(salario,retencion,numPagas){
    //calculamos las retenciones como valor numerico y no porcentual y se lo restamos al sario anual,
    //a continuacion dividimos el salario toital entre el numero de pagas
    var neto=(salario-salario*(retencion/100))/numPagas; 
    return neto;
}

var menu=0;

while(menu!=7){
    menu=parseInt(prompt("Introduce la funcion que quieres utilizar\n"+
    "1: Cuenta atras\n2:Intercambiar posiciones de un numero de dos cifras\n3:Operaciones\n"+
    "4:Validacion de email\n5:Calcular tu edad\n6: Calcular tu salario neto mensual\n7:Salir"));
    switch(menu){
        case 1:
            var cuentaAtras=parseInt(prompt("Introduce el numero del que quieres iniciar la cuenta atras"));
            while(isNaN(cuentaAtras)){
                cuentaAtras=parseInt(prompt("Tienes que introducir un numero"));
            }
            contarNumeros(cuentaAtras);
            break;
        case 2:
            var num=parseInt(prompt("Introduce un numero de 2 cifras"));
            while(isNaN(num)||num/100>=1){
                num=parseInt(prompt("Introduce un numero de 2 cifras"));
            }
            tmp=""+num;
            alert(cambiarPosicion(tmp));
            break;
        case 3:
            var num1=parseInt(prompt("Introduce el primer numero para realizar operacioens"));
            while(isNaN(num1)){
                num1=parseInt(prompt("Tienes que introducir un numero"));
            }
            var num2=parseInt(prompt("Introduce el primer numero para realizar operacioens"));
            while(isNaN(num2)){
                num2=parseInt(prompt("Tienes que introducir un numero"));
            }
            operaciones(num1, num2);
            break;
        case 4:
            var bandera=validarEmail(prompt("Introduce el email que quieres validar"));
            bandera?alert("email correcto"):alert("email incorrecto");
            break;
        case 5:
            alert(calcularEdad(prompt("Introduce tu fecha de nacimiento en formato DD/MM/YYYY")));
            break;
        case 6:
            var salario=parseInt(prompt("Introduce tu salario anual"));
            while(isNaN(salario)){
                salario=parseInt(prompt("Tienes que introducir un numero"));
            }
            var retencion=parseInt(prompt("Introduce tu retencion"));
            while(isNaN(retencion)){
                retencion=parseInt(prompt("Tienes que introducir un numero"));
            }
            var numPagas=parseInt(prompt("Introduce tu numero de pagas"));
            while(isNaN(numPagas)){
                numPagas=parseInt(prompt("Tienes que introducir un numero"));
            }
            alert("Tu salario neto es: "+calculoNominas(salario, retencion, numPagas)+"€");
            break;
        case 7:
            break;
        default:
            alert("Has introducido una opcion invalida");
            break;
    }
}
