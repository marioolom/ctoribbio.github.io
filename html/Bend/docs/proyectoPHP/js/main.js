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