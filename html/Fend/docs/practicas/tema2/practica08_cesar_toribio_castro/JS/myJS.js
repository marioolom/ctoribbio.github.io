var pareja = [];    //Array para las parejas 
var equipo = new Array(3); //Array de 3 posiciones, dos de nombres de jugadores, y uno tercero para comprobar si siguen clasificados 

for (var j = 0; j < 8; j++) { //Bucle para rellenar el array
    alert("Datos de la pareja " + (j + 1));
    for (var k = 0; k < 2; k++) { //Establezco dos para el contador para que solo pida nombres de los jugadores
        do {
            equipo[k] = prompt("Introduce el nombre y apellido del jugador " + (k + 1) + " de la pareja " + (j + 1));
        } while (isNaN(parseInt(equipo[k])) == false) //validamos que los datos introducidos sean una cadena
    }
    equipo[2] = true; //establecemos en tercera posicion que siguen clasificados
    pareja.push(equipo); //introducimos el array recien creado al array de las parejas
    equipo = []; //reiniciamos el array a nada, para evitar que se rellene de nuevo y borre lo anterior 
}


var lista = "Viernes: Cuartos de final\n-------------------------\n";
for (var i = 0; i < pareja.length; i++) { //bucle para mostrar los partidos de cada fase
    lista = lista + pareja[i][0] + " y " + pareja[i][1] + " contra " + pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\n"; //Para mostrarlos con una sola pasada, solo  tenemos en cuenta las posiciones del array impares.
    i++; // volvemos a subir el contador para que pase directamente a la siguiente parjea

}


alert(lista); //mostramos la lista de los jugadores


for (var i = 0; i < pareja.length; i++) { //bucle para decidir quien gana en cada pareja
    var opcion = confirm("Quien gana entre: \n Pareja 1: " + pareja[i][0] + " y " + pareja[i][1] + " \n Pareja 2: " +
        pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\nAceptar=Pareja 1\n Cancelar=Pareja 2"); //Usamos el mismo planteamiento que al mostrar los partidos, pero esta vez con un confirm
    if (opcion == true) {
        pareja[i + 1][2] = false; //establecemos la variable que comprueba si estan clasificados a false para poder eliminarles  a posteriori
    } else {
        pareja[i][2] = false;//establecemos la variable que comprueba si estan clasificados a false para poder eliminarles  a posteriori
    }
    i++;
}


var pareja2 = [];  //array auxiliar para almacenar tan solo las parejas clasificadas
for (var i = 0; i < pareja.length; i++) { //bucle para eliminar las parejas que estan eliminadas
    if (pareja[i][2] == true) {
        pareja2.push(pareja[i]);    //comprobamos si la posicion 3 del array sigue a true tras los partidos, si es asi, movemos la pareja al array auxiliar
    }
}
pareja = pareja2; //pasamos el array auxiliar al primer array 


//CODIGO REPETIDO LINEA 13

var lista = "Sabado: Semifinales\n-------------------------\n"; //bucle para mostrar los partidos de cada fase
for (var i = 0; i < pareja.length; i++) {
    lista = lista + pareja[i][0] + " y " + pareja[i][1] + " contra " + pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\n"; //Para mostrarlos con una sola pasada, solo  tenemos en cuenta las posiciones del array impares.
    i++;// volvemos a subir el contador para que pase directamente a la siguiente parjea

}
alert(lista);

//CODIGO REPETIDO LINEA 20

for (var i = 0; i < pareja.length; i++) { //bucle para decidir quien gana en cada pareja
    var opcion = confirm("Quien gana entre: \n Pareja 1: " + pareja[i][0] + " y " + pareja[i][1] + " \n Pareja 2: " +
        pareja[i + 1][0] + " y " + pareja[i + 1][1] + "\nAceptar=Pareja 1\n Cancelar=Pareja 2"); //Usamos el mismo planteamiento que al mostrar los partidos, pero esta vez con un confirm
    if (opcion == true) {
        pareja[i + 1][2] = false;  //establecemos la variable que comprueba si estan clasificados a false para poder eliminarles  a posteriori
    } else {
        pareja[i][2] = false; //establecemos la variable que comprueba si estan clasificados a false para poder eliminarles  a posteriori
    }
    i++;
}

//CODIGO REPETIDO LINEA 31

var pareja2 = []; //array auxiliar para almacenar tan solo las parejas clasificadas
for (var i = 0; i < pareja.length; i++) { //bucle para eliminar las parejas que estan eliminadas
    if (pareja[i][2] == true) {
        pareja2.push(pareja[i]); //comprobamos si la posicion 3 del array sigue a true tras los partidos, si es asi, movemos la pareja al array auxiliar
    }
}
pareja = pareja2; //pasamos el array auxiliar al primer array

var lista = "DOMINGO: LA GRAN FINAL!!\n-----------------------------\n";
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
alert("Fin del programa.");