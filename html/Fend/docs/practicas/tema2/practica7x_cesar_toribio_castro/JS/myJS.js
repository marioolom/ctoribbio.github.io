var stock=2000;
var totalMalas=0;
var totalDevoluciones=0;
var pendientes=0; //guardamos las vacunas pendientes
while(stock>0){ //mientras el stock sea superior a 2000 se ejecutan las entregas
    alert(stock+" vacunas disponibles");
    if(stock<400){
        alert("Hay menos de 400 vacunas disponibles.")
    }
    var entrega=parseInt(prompt("Introduce el numero de vacunas que hay que entregar"));
    while(isNaN(entrega)==true){ //comprobacion de numero
        entrega=parseInt(prompt("Has introducido un dato invalido, introduce un numero"));
    }
    if(stock<entrega){
        pendientes=entrega-stock;
        alert("Solo tienes "+stock+" vacunas disponibles, tienes "+pendientes+" pendientes de entregar")
    }
    stock=stock-entrega;
    if(confirm("Existen devoluciones?")==true){
        var devoluciones=parseInt(prompt("Introduce el numero de vacunas que han sido devueltas"));
        while(isNaN(devoluciones)==true){
            devoluciones=parseInt(prompt("Has introducido un dato invalido, introduce un numero"));
        }
        totalDevoluciones=totalDevoluciones+devoluciones;
        if(confirm("Existen vacunas en mal estado?")==true){
            var malas=parseInt(prompt("Introduce el numero de vacunas que han sido devueltas"));
            while(isNaN(malas)==true||malas>devoluciones){
                malas=parseInt(prompt("Has introducido un dato invalido, introduce un numero"));
            }
            totalMalas=totalMalas+malas;            
        }
        stock=stock+(devoluciones-malas);
    }
    stock>=0 ? alert("Hay "+stock+" vacunas disponibles actualmente") : alert("Hay 0 vacunas disponibles actualmente");
    

}
alert("Resumen del dia\n Total Entregadas: 2000\n Total Devueltas "+totalDevoluciones+"\n Total en Mal Estado: "+totalMalas+" \n Total Pendientes: "+pendientes);
alert("Fin del programa");
