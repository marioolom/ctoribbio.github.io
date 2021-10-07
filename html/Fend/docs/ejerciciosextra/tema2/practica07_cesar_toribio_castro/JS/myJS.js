var totalMalasMes=0;
var totalDevolucionesMes=0;
var pendientes = 0;

var contador = parseInt(prompt("Introduce el numero de dias que trabajaremos"));
while (isNaN(contador) == true) { //comprobacion de numero
    contador = parseInt(prompt("Has introducido un dato invalido, introduce un numero de dias"));
}

for (var i = 0; i < contador; i++) {
    var totalMalas = 0;
    var totalDevoluciones = 0;
     //guardamos las vacunas pendientes
    var stock = 2000-pendientes; //Quitamos las pendientes del stock diario, para hacer que se envian
    pendientes=0;
    while (stock > 0) { //mientras el stock sea superior a 2000 se ejecutan las entregas
        alert(stock + " vacunas disponibles");
        if (stock < 400) {
            alert("Hay menos de 400 vacunas disponibles.")
        }
        var entrega = parseInt(prompt("Introduce el numero de vacunas que hay que entregar"));
        while (isNaN(entrega) == true) { //comprobacion de numero
            entrega = parseInt(prompt("Has introducido un dato invalido, introduce un numero"));
        }
        if (stock < entrega) {
            pendientes = entrega - stock;
            alert("Solo tienes " + stock + " vacunas disponibles, tienes " + pendientes + " pendientes de entregar")
        }
        stock = stock - entrega;
        if (confirm("Existen devoluciones?") == true) {
            var devoluciones = parseInt(prompt("Introduce el numero de vacunas que han sido devueltas"));
            while (isNaN(devoluciones) == true) {
                devoluciones = parseInt(prompt("Has introducido un dato invalido, introduce un numero"));
            }
            totalDevoluciones = totalDevoluciones + devoluciones;
            if (confirm("Existen vacunas en mal estado?") == true) {
                var malas = parseInt(prompt("Introduce el numero de vacunas que han sido devueltas"));
                while (isNaN(malas) == true) {
                    malas = parseInt(prompt("Has introducido un dato invalido, introduce un numero"));
                }
                totalMalas = totalMalas + malas;
            }
            stock = stock + (devoluciones - malas);
        }
        stock >= 0 ? alert("Hay " + stock + " vacunas disponibles actualmente") : alert("Hay 0 vacunas disponibles actualmente");


    }
    alert("Resumen del dia "+ (i+1)+"\n Total Entregadas: 2000\n Total Devueltas " + totalDevoluciones + "\n Total en Mal Estado: " + totalMalas + " \n Total Pendientes: " + pendientes);
    totalDevolucionesMes=totalDevoluciones+totalDevolucionesMes;
    totalMalasMes=totalMalas+totalMalasMes;
}
    alert("Resumen de los ultimos "+contador+" dias\n Total Entregadas: "+2000*contador+"\n Total Devueltas: "+totalDevolucionesMes+"\n Total en Mal Estado: "+totalMalasMes+"\n Total Pendientes: "+pendientes);


