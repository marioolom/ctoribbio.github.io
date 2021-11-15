var ventana;
var ventana2;
function abrirVentana(){
   ventana= open("","",height=350,width=400);
}

function cerrarVentana(){
    ventana.close();
}

function abrirGoogle(){
    ventana2= open("https://www.google.com/","",height=350,width=400);
}
function cerrarGoogle(){
    ventana2.close();
}

function numeros(){
    var introducidos=new Array();
    for( var i=0;i<3;i++){
       var bool= confirm("Quieres introducir un numero?");
        if(bool){
            var num=prompt("Introduce un numero?");
            while(isNaN(num)){
                var num=prompt("Solo introducir numeros?");
            }
            introducidos.push(num);
            
        }

    }
    alert("El boton 'Confirmar' fue pulsado: "+introducidos.length+" veces");
    alert("El boton 'Cancelar' fue pulsado: "+(3-introducidos.length)+" veces");
    alert(introducidos.join());
}

function comprobarVentana() {
    try{ 
        if(ventana.closed==false){
            alert("La ventana vacia esta abierta")
        }else{
            alert("La ventana vacia esta cerrada");
        }
    }catch(e){ 
        alert("La ventana vacia esta cerrada")
    }
    try{ 
        if(ventana2.closed==false){
            alert("La ventana de Google esta abierta")
        }else{
            alert("La ventana de Google esta cerrada");
        }
    }catch(e){ 
        alert("La ventana de Google esta cerrada")
    }
}
var tiempo;
function escribir(){
    alert("Han pasado 5 segundos ");
}
function contador5s(){
        tiempo=setInterval(escribir,5000);
}
function pararContador(){
        clearInterval(tiempo);
}
function recargarPagina(){
    location.reload();
}