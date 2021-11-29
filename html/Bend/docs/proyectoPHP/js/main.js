function loginError(){
    var boton= document.querySelector("#btnSignIn");
    boton.classList.remove("btn-primary");
    boton.classList.add("btn-warning");
    var tmp=document.querySelector("#h1");
    tmp.textContent="Usuario y/o Contraseña invalidos";
}
function loginOrgError(){
    var boton= document.querySelector("#btnSignIn");
    boton.classList.remove("btn-primary");
    boton.classList.add("btn-warning");
    element=document.createElement("h4");
    element.textContent="ID o Codigo de Acceso no validos";
    var tmp=document.querySelector("#h1");
    tmp.insertAdjacentElement("afterend", element);
}

function borradoEvento(evento,idTicket){
    
    var bool=confirm("Estas seguro de que quieres eliminar el evento: "+evento+"?");
    if(bool){
        window.location.href="index.php?idEvento="+idTicket;
    }
}

function borradoUsuario(username){
    var bool=confirm("Estas seguro de que quieres eliminar el usuario: "+username+"?");
    if(bool){
        window.location.href="index.php?username="+username;
    }
}

function borradoOrganizador(idOrg,nombre){
    var bool=confirm("Estas seguro de que quieres eliminar el organizador: "+nombre+"?");
    if(bool){
        window.location.href="index.php?idOrg="+idOrg;
    }
}

function borradoCupon(codCupon){
    var bool=confirm("Estas seguro de que quieres eliminar el cupón: "+codCupon+"?");
    if(bool){
        window.location.href="index.php?codCupon="+codCupon;
    }
}

function generarEntrada(nombre, apellido, nombreevento, localizacion,fechaEvento,path,fechaN,count,idTicket){
    
    document.querySelector("#nombreApellidos").textContent= "Nombre y Apellidos del asistente: " +nombre.toUpperCase() + " " + apellido.toUpperCase();
    document.querySelector("#fechaN").textContent= "Fecha de Nacimiento del asistente: "+fechaN;
    document.querySelector("#nombreEvento").textContent="Nombre del Evento: "+nombreevento;
    document.querySelector("#localizacionEvento").textContent="Localizacion del Evento: " +localizacion;
    document.querySelector("#fechaEvento").textContent="Fecha del Evento: " +fechaEvento;
    document.querySelector("#header").setAttribute("src", path);
    for(var i= 0; i<count;i++){
        
        document.querySelector("#contenedorqr").innerHTML= document.querySelector("#contenedorqr").innerHTML+'<img src="../../assets/qr.jpg" id="qr"></img>';
    }

}

function fechaActual(){
    var fecha = new Date();
    fecha = fecha.toISOString().split('T')[0];
    document.querySelector("#inputFecha").setAttribute("min", fecha);
}

function calcularFecha(){
    var fecha = new Date();
    fecha.setFullYear(fecha.getFullYear()-18);
    
    document.querySelector("#inputFecha").setAttribute("max", fecha.toISOString().split('T')[0]);
}