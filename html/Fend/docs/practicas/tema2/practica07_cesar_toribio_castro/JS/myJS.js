alert("Ejercicio 1.- Introducir nombres y mostrarlos");
var nombres = new Array(10);
for (var i = 0; i < nombres.length; i++) {
    nombres[i] = prompt("Introduce el nombre numero " + (i + 1));
}
alert(nombres.join());

alert("Ejercicio 2.- Arrays con elementos.");
var array1 = new Array(5);
var array2 = new Array(5);
for (var i = 0; i < array1.length; i++) {
    array1[i] = prompt("Introduce el elemento numero " + (i + 1));
}
for (var i = 0; i < array2.length; i++) {
    array2[i] = prompt("Introduce el elemento numero " + (i + 1));
}
if (array1.length == array2.length) {
    alert("Los dos Arrays son iguales");
} else {
    alert("Los dos Arrays son distintos");
}
var boolean = true;
for (var i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
        boolean = false;
    }
}
if (boolean == true) {
    alert("Los dos arrays contienen los mismos elementos");
} else {
    alert("No contienen los mismos elementos");
}

alert("Ejercicio 3.- Suma y Producto de Array con numeros iguales");
var nums = new Array(10);
for (var i = 0; i < nums.length; i++) {
    do {
        var num = prompt("Introduce el numero " + i);
        nums[i] = num;
    } while (isNaN(num) || num != nums[0])
}
var result = [0, 1];
for (var i = 0; i < nums.length; i++) {
    result[0] = parseInt(result[0]) + parseInt(nums[i]);
    result[1] = parseInt(result[1]) * parseInt(nums[i]);
}
alert("Resultado\n Suma: " + result[0] + "\n Producto: " + result[1]);

alert("Ejercicio 4.- Comprobar dias lectivos de Diciembre");
var diciembre = new Array(31);
for (var i = 0; i < diciembre.length; i++) {
    diciembre[i] = i + 1;
}
var festivos = [6, "Fiesta Laboral", 7, "Dia No lectivo", 8, "Fiesta Laboral"];
var consulta = prompt("Introduce el dia que quieres consultar");
while (consulta.toLowerCase() != "salir") {
    boolean = false;
    for (var i = 0; i < festivos.length; i++) {
        if (parseInt(consulta) > 31) {
            alert("Dia no Valido")
            boolean = true;
            break;
        }
        if (parseInt(consulta) >= 23) {
            alert("Dia " + consulta + ": Vacaciones de navidad");
            boolean = true;
            break;
        }
        if (parseInt(consulta) == festivos[i]) {
            alert("Dia " + festivos[i] + ": " + festivos[i + 1]);
            boolean = true;
            break;
        }
    }
    if (boolean == false) {
        alert("Dia Lectivo");
    }
    consulta = prompt("Introduce el dia que quieres consultar");
}
alert("Ejercicio 5.- Mostrar info. profesores y asignaturas");

var arrayProfesores = ["Daniel", "Jose Luis", "Ana Rosa", "Nacho"];
var arrayAlumnos = ["20", "18", "23", "15"];
var arrayAsignatura = ["DWEC", "DWES", "DINT", "DAPW"];
var alerta = "";
for (var i = 0; i < arrayProfesores.length; i++) {
    alerta = alerta + (arrayProfesores[i] + " imparte la asignatura de " + arrayAsignatura[i] + " y tiene " + arrayAlumnos[i] + " alumnos en clase.\n");
}
alert(alerta);