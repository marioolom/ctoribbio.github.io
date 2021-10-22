alert("Ejercicio 1.- Mostrar cadena de fecha completa");

var a= new Date();

switch (a.getDay()){
    case 0:
        var dia="Lunes";
        break;
    case 1:
        var dia="Martes";
        break;
    case 2:
        var dia="Miercoles";
        break;
    case 3:
        var dia="Jueves";
        break;
    case 4:
        var dia="Viernes";
        break;
    case 5:
        var dia="Sabado";
        break;
    case 6:
        var dia="Domingo";
        break;
    
}

switch (a.getMonth()){
    case 0:
        var mes="Enero";
        break;
    case 1:
        var mes="Febrero";
        break;
    case 2:
        var mes="Marzo";
        break;
    case 3:
        var mes="Abril";
        break;
    case 4:
        var mes="Mayo";
        break;
    case 5:
        var mes="Junio";
        break;
    case 6:
        var mes="Julio";
        break;
    case 7:
        var mes="Agosto";
        break;
    case 8:
        var mes="Septiembre";
        break;
    case 9:
        var mes="Octubre";
        break;
    case 10:
        var mes="Noviembre";
        break;
    case 11:
        var mes="Diciembre";
        break;
}
alert("Hoy es "+dia+" "+a.getDate()+" de "+mes+" del año "+a.getFullYear()+" y son las "+a.toLocaleTimeString());

alert("Ejercicio 2: Mostrar fecha con formato");

var a= new Date("2020/10/3 16:05:00");

switch (a.getDay()){
    case 1:
        var dia="Lunes";
        break;
    case 2:
        var dia="Martes";
        break;
    case 3:
        var dia="Miercoles";
        break;
    case 4:
        var dia="Jueves";
        break;
    case 5:
        var dia="Viernes";
        break;
    case 6:
        var dia="Sabado";
        break;
    case 0:
        var dia="Domingo";
        break;
    
}

switch (a.getMonth()){
    case 0:
        var mes="Enero";
        break;
    case 1:
        var mes="Febrero";
        break;
    case 2:
        var mes="Marzo";
        break;
    case 3:
        var mes="Abril";
        break;
    case 4:
        var mes="Mayo";
        break;
    case 5:
        var mes="Junio";
        break;
    case 6:
        var mes="Julio";
        break;
    case 7:
        var mes="Agosto";
        break;
    case 8:
        var mes="Septiembre";
        break;
    case 9:
        var mes="Octubre";
        break;
    case 10:
        var mes="Noviembre";
        break;
    case 11:
        var mes="Diciembre";
        break;
}

alert(a.getDate()+" de "+mes+" del año "+a.getFullYear()+", "+a.toLocaleTimeString());

alert("Ejercicio 3");
var a= new Date("2020/10/3 16:05:00");
var b= new Date();

alert(b.toLocaleDateString()+"\n"+a.toLocaleDateString());

alert("Ejercicio 4");

var timer1=new Date();

prompt("Introduce tu nombre");

var timer2=new Date();
alert("Has tardado "+((parseInt(timer2.getTime())-parseInt(timer1.getTime()))/1000)+" segundos en escribir tu nombre");

alert("Ejercicio 5");

var año=parseInt(prompt("Introduce un año"));
var mes=parseInt(prompt("Introduce un mes"));

var a = new Date(año+"/"+mes);
var calendario="";
var contador=0;
if(a.getDay()!=1){
    while(contador!=a.getDay()){
        calendario=calendario+"\t\t\t";
        contador++
    }
}
while(a.getMonth()==(mes-1)){

    switch (a.getDay()){
        case 1:
            var dia="L";
            break;
        case 2:
            var dia="M";
            break;
        case 3:
            var dia="X";
            break;
        case 4:
            var dia="J";
            break;
        case 5:
            var dia="V";
            break;
        case 6:
            var dia="S";
            break;
        case 0:
            var dia="D";
            break;
    }
    if(a.getDate()<10){
        numero="0"+a.getDate();
    }else{
        numero=a.getDate();
    }
    var calendario=calendario+"|"+numero+"-"+dia;
    if(a.getDay()==0){
    calendario=calendario+"\n";
    }
    a.setDate((a.getDate()+1));
}
alert(calendario);

