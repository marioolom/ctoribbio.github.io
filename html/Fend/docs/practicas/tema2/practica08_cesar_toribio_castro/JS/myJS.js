var pareja = [];    //Array para las parejas 
var equipo = new Array(3);

for (var j = 0; j < 8; j++) {
    alert("Datos de la pareja " + (j + 1));
    for (var k = 0; k < 2; k++) {
        equipo[k] = prompt("Introduce el nombre y apellido del jugador " + (k + 1) + " de la pareja " + (j + 1));
    }
    equipo[2] = true;
    pareja.push(equipo);
    equipo = []; //reiniciamos el array a nada, para evitar que se rellene de nuevo y borre lo anterior 
}
var lista = "Cuartos de final\n-------------------------\n";
for (var i = 0; i < pareja.length; i++) {
    lista = lista + pareja[i][0] + " y " + pareja[i][1] + " contra " + pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\n";
    i++ // volvemos a subir el contador para que pase directamente a la siguiente parjea

}
alert(lista);

for (var i = 0; i < pareja.length; i++) {
    var opcion = confirm("Quien gana entre: \n Pareja 1: " + pareja[i][0] + " y " + pareja[i][1] + " \n Pareja 2: " +
        pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\nAceptar=Pareja 1\n Cancelar=Pareja 2"); //recorremos el array y pintamos sus nombres, y aclaramos al usuario que opcion es cual
    if (opcion == true) {
        pareja[i + 1][2] = false; //establecemos la variable que comprueba si estan clasificados a false para poder eliminarles  a posteriori
    } else {
        pareja[i][2] = false;
    }
    i++;
}
var pareja2 = [];
for (var i = 0; i < pareja.length; i++) {
    if (pareja[i][2] == true) {
        pareja2.push(pareja[i]);    //eliminamos del array las parejas que estan eliminadas y cambiamos datos entre arrays 
    }
}
pareja = pareja2;
//CODIGO REPETIDO LINEA 13
var lista = "Semifinales\n-------------------------\n";
for (var i = 0; i < pareja.length; i++) {
    lista = lista + pareja[i][0] + " y " + pareja[i][1] + " contra " + pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\n";
    i++ 

}
alert(lista);

//CODIGO REPETIDO LINEA 20
for (var i = 0; i < pareja.length; i++) {
    var opcion = confirm("Quien gana entre: \n Pareja 1: " + pareja[i][0] + " y " + pareja[i][1] + " \n Pareja 2: " +
        pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\nAceptar=Pareja 1\n Cancelar=Pareja 2");
    if (opcion == true) {
        pareja[i + 1][2] = false;
    } else {
        pareja[i][2] = false;
    }
    i++;
}
//CODIGO REPETIDO LINEA 31
var pareja2 = [];
for (var i = 0; i < pareja.length; i++) {
    if (pareja[i][2] == true) {
        pareja2.push(pareja[i]);
    }
}
pareja = pareja2;

var lista = "LA GRAN FINAL!!\n-----------------------------\n";
    lista = lista + pareja[0][0] + " y " + pareja[1][1] + " contra " + pareja[1][0] + " y " + pareja[1][1] + "\n";
    // hago la lista en este caso sin contador para no entrar en un bucle de dos solos elementos de los cuales conozco la posicion 
alert(lista);
//hago lo mismo que antes pero de nuevo sin usar contadores porque se sus posiciones
var opcion = confirm("Quien gana entre: \n Pareja 1: " + pareja[0][0] + " y " + pareja[0][1] + " \n Pareja 2: " +
    pareja[1][0] + " y " + pareja[1][1] + "\nAceptar=Pareja 1\n Cancelar=Pareja 2");
if (opcion == true) {
    alert("Los ganadores del torneo son: " + pareja[0][0] + " y " + pareja[0][1] + " \nFELICIDADES, SOIS LOS GANADORES DE UN JAMON");
} else { 
    alert("Los ganadores del torneo son: " + pareja[1][0] + " y " + pareja[1][1] + " \nFELICIDADES, SOIS LOS GANADORES DE UN JAMON");
} //if para saber cual de los dos finalistas es el ganador del torneo 
