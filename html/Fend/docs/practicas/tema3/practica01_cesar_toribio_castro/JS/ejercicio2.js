
//CREAMOS UN ARRAY PARA ALMACENAR TODOS LOS ALUMNOS.
var escuela = new Array();
// DECLARAMOS EL OBJETO ALUMNO CON SUS ATRIBUTOS Y METODOS
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
//CREAMOS UNA FUNCION PARA INTRODUCIR A LOS ALUMNOS 
function introducirAlumno(array, num) {
    var nombre = prompt("Introduce el nombre del alumnos " + num);
    var email = prompt("Introduce el email del alumno " + num);
    var telf = prompt("Introduce el numero telefonico del alumno " + num);
    var clases = prompt("Introduce el nombre de las clases del alumno " + num);
    while (clases.toLowerCase() != "oleo" && clases.toLowerCase() != "grabado" && clases.toLowerCase() != "acrilico" && clases.toLowerCase() != "modelaje") {
        console.log(clases.toLowerCase());
        clases = prompt("Dato incorrecto\nIntroduce el nombre de las clases del alumno" + num);
    }
    var dia1 = prompt("Introduce el primer dia que va el alumno" + num + " a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    while (isNaN(dia1) || dia1 < 0 || dia1 > 7) {
        dia1 = prompt("Dato incorrecto\nIntroduce el primer dia que va el alumno" + num + " a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    }
    var dia2 = prompt("Introduce el segundo dia que va el alumno" + num + "a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    while (isNaN(dia2) || dia2 < 0 || dia2 > 7) {
        dia2 = prompt("Dato incorrecto\nIntroduce el segundo dia que va el alumno" + num + " a clase\n1.-Lunes \n2.-Martes \n3.-Miercoles \n4.-Jueves \n5.-Viernes \n6.-Sabado \n7.-Domingo");
    }
    var alumno = new Alumno(nombre, email, telf, clases, dia1, dia2);
    array.push(alumno);
}

// CREAMOS UNA FUNCION MUY SENCILLA PARA CONVERTIR LOS DIAS A TEXTO
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
//CREAMOS UNA FUNCION PARA MOSTRAR LOS DATOS DE LOS ALUMNOS, CON DISTINTOS MODOS DEPENDIENDO DE LA CANTIDAD DE INFORMACION QUE QUERAMOS ENSEÑAR
function datosAlumnos(array, modo) {
    cadena = "--DATOS ALUMNOS--\n"
    for (var i = 0; i < array.length; i++) {
        cadena = cadena + "Nombre: " + array[i].getNombre() + ".\n";
        cadena = cadena + "Email: " + array[i].getEmail() + "\n";
        cadena = cadena + "Telefono: " + array[i].getTelf() + "\n";
        if (modo == 1) {
            cadena = cadena + "Dias que cursa: " + convertirDia(parseInt(array[i].getDia1())) + " y " + convertirDia(parseInt(array[i].getDia2())) + "\n";
            console.log(array[i].getDia1());
            console.log(array[i].getDia2());
        }
        cadena = cadena + "-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x\n";
    }
    return (cadena);
}
//CREAMOS UNA FUNCION QUE DEVUELVA EL NUMERO DE ALUMNOS QUE CURSAN UNA ASIGNATURA QUE LE PASAMOS COMO ARGUMENTO
function numeroAlumnosAsignatura(clase, array) {
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].getClases() == clase.toLowerCase())
            contador++;
    }
    return contador;
}
//CREAMOS UNA FUNCION QUE AÑADA A UN ARRAY SUPLEMENTARIO LOS DATOS DE LOS ALUMNOS QUE CURSAN UNA ASIGNATURA, UN DIA CONCRETO, LE PASAMOS COMO ARGUMENTO EL ARRAY DE LA ESCUELA, Y LUEGO DENTRO EN EL OTRO ARRAY AÑADIMOS SOLO 
//LAS COINCIDENCIAS, Y DEVOLVEMOS EL NUMERO DE ALUMNOS EN BASE A LA LONGITUD DE ESE ARRAY, Y LLAMAMOS AL METODO DE LOS DATOS DE LOS ALUMNOS PASANDOLE COMO ARGUMENTO EL ARRAY SUPLEMENTARIO PARA QUE SOLO ENSEÑE LOS DATOS DE LOS ALUMNOS
//QUE CUMPLAN LAS CONDICIONES
function datosAlumnosAsignaturaDia(clase, array, dia) {
    var arraytmp = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i].getClases() == clase.toLowerCase() && (array[i].getDia1() == dia || array[i].getDia2() == dia)) {
            arraytmp.push(array[i]);
        }
    }
    cadena = "Hay " + arraytmp.length + " alumnos que asisten a " + clase + "el " + convertirDia(parseInt(dia)) + "\n";
    //le pasamos el modo 1 para que muestre los datos de los dias que asisten a clase
    cadena = cadena + datosAlumnos(arraytmp, 1);
    return cadena;
}
//basicamente es la misma funcion pero solamente le pasamos como argumento la clase a la que asiste, no el dia (se que se podria hacer en una sola funcion con mas modos)
function datosAlumnosAsignatura(clase, array) {
    var arraytmp = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i].getClases() == clase.toLowerCase())
            arraytmp.push(array[i]);
    }
    cadena = "Hay " + arraytmp.length + " alumnos que asisten a " + clase + "\n";
    cadena = cadena + datosAlumnos(arraytmp, 1);
    return cadena;
}


//Creamos el menú
var salir = false;
while (salir == false) {
    var opcion = prompt("Introduce la opcion que quieres trabajar\n 0: Introducir Alumnos\n 1: Datos de todos los alumnos \n 2: Contar Alumnos que estudian oleo \n 3: Conocer los datos de los alumnos que cursan oleo un dia concreto\n 4: Conocer dias que van a clase los alumnos de una asignatura concreta \n 5:Salir");
    if ((opcion != 0 && opcion != 5) && escuela.length == 0) {
        alert("No puedes acceder a estas opciones sin antes introducir alumnos");
    } else {
        switch (parseInt(opcion)) {
            case 0:
                var numero = parseInt(prompt("Introduce el numero de alumnos que quieres introducir"));
                for (var i = 1; i <= numero; i++) {
                    introducirAlumno(escuela, i);
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
                alert(datosAlumnosAsignaturaDia("oleo", escuela, dia1));
                break;
            case 4:
                var clases = prompt("Introduce el nombre de la clase que quieres conocer");
                alert(datosAlumnosAsignatura(clases, escuela));
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