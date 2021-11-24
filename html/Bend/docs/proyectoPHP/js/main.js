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