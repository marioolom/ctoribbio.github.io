var escuela = new Array();

function Alumno(nombre, email, telf, clases, dia1, dia2) {
    this.nombre = nombre;
    this.email = email;
    this.telf = telf;
    this.clases = clases;
    this.dia1 = dia1;
    this.dia2 = dia2;
    this.getNombre = function () { return this.nombre; }
    this.getEmail = function () { return this.email; }
    this.getTelf = function () { return this.telf; }
    this.getClases = function () { return this.clases; }
    this.getDia1 = function () { return this.dia1; }
    this.getDia2 = function () { return this.dia2; }
}

function introducirAlumno(array, num) {
    var nombre = prompt("Introduce el nombre del alumnos" + num);
    var email = prompt("Introduce el email del alumno" + num);
    var telf = prompt("Introduce el numero telefonico del alumno " + num);
    var clases = prompt("Introduce el nombre de las clases del alumno" + num);
    var dia1 = prompt("Introduce el primer dia que va el alumno" + num + " a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    while (isNaN(dia1) || dia1 < 0 || dia1 > 7) {
        dia1 = prompt("Dato incorrecto\nIntroduce el primer dia que va el alumno" + num + " a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    }
    var dia2 = prompt("Introduce el segundo dia que va el alumno" + num + "a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    while (isNaN(dia2) || dia2 < 0 || dia2 > 7) {
        dia2 = prompt("Dato incorrecto\nIntroduce el segundo dia que va el alumno" + num + " a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    }
    var alumno = new Alumno(nombre, email, clases, dia1, dia2);
    array.push(alumno);
}
function convertirDia(dia) {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miercoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sabado";
        case 7:
            return "Domingo";
    }
}
function datosAlumnos(array) {
    cadena = "--DATOS ALUMNOS--\n"
    for (var i = 0; i < array.length; i++) {
        cadena = cadena + "Nombre: " + array[i].getNombre() + ".\n";
        cadena = cadena + "Email: " + array[i].getEmail() + "\n";
        cadena = cadena + "Telefono: " + array[i].getTelf() + "\n";
        cadena = cadena + "-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x\n";
    }
    return(cadena);
}

function numeroAlumnosAsignatura(clase, array) {
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].getClases() == clase.toLowerCase())
            contador++;
    }
    return contador;
}

function datosAlumnosAsignaturaDia(clase, array, dia) {
    var contador = 0;
    var arraytmp = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i].getClases() == clase.toLowerCase() && (array[i].getDia1() == dia || array[i].getDia2() == dia))
            contador++;
        arraytmp.push(array[i]);
    }
    cadena = "Hay " + contador + " alumnos que asisten a " + clase + "el dia " + convertirDia(dia) + "\n";
    cadena = cadena + datosAlumnos(arraytmp);
    return cadena;
}
function datosAlumnosAsignatura(clase, array) {
    var contador = 0;
    var arraytmp = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i].getClases() == clase.toLowerCase())
            contador++;
        arraytmp.push(array[i]);
    }
    cadena = "Hay " + contador + " alumnos que asisten a " + clase + "\n";
    cadena = cadena + datosAlumnos(arraytmp);
    return cadena;
}
var salir = false;
while (salir == false) {
    var opcion = prompt("Introduce la opcion que quieres trabajar\n 0:Introducir Alumnos\n1:Contar Alumnos que estudian Oleo\n 2: Contar Alumnos que estudian oleo un dia concreto\n 3: Conocer dias que van a clase los alumnos de una asignatura concreta\n 4:Salir");
    if (opcion != 0 && escuela.length == 0) {
        alert("No puedes acceder a estas opciones sin antes introducir vehiculos");
    } else {
        switch (parseInt(opcion)) {
            case 0:
                var numero = parseInt(prompt("Introduce el numero de vehiculos que quieres introducir"));
                for (var i = 1; i <= numero; i++) {
                    introducirAlumno(escuela,i);
                }
                break;
            case 1:
                alert(datosAlumnos(escuela));
                break;
            case 2:
                alert(numeroAlumnosAsignatura("oleo", escuela));
                break;
            case 3:
                var dia1 = prompt("Introduce el dia que quieres conocer\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
                while (isNaN(dia1) || dia1 < 0 || dia1 > 7) {
                    dia1 = prompt("Dato incorrecto\nIntroduce el primer dia que quieres conocer\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
                }
                alert(datosAlumnosAsignaturaDia("oleo",escuela,dia1));
                break;
            case 4:
                var clases = prompt("Introduce el nombre de la clase que quieres conocer");
                alert(datosAlumnosAsignatura(clases,escuela));
                break;
            case 5:
                salir = true;
                break;
            default:
                alert("Opcion Invalida");
                break;
        }
    }
}