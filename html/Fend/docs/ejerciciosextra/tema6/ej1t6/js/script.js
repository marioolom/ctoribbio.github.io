function validateForm(){
    if(validateEmail()&&validatePass()&&validateUser()){
        alert("Bienvenido al sistema ");
    }
}

function validateEmail(){
var campoEmail = document.querySelector("#inputEM");

if(campoEmail.value.trim()==""){
    alert("El campo email no puede estar vacio");
    return false;
}else{
    if(/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/.test(campoEmail.value.trim())){
        return true;
    }else{
     alert("Email no valido");
     return false;
    }
}
}

function validatePass(){
var campoPass=document.querySelector("#inputPW");
var campoPass2=document.querySelector("#inputPW2");
if(campoPass.value.trim()=="" ||campoPass2.value.trim()==""){
        alert("La contraseña no puede estar vacia");
        return false; 
}else{
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(campoPass.value.trim())){
        if(campoPass.value.trim()!=campoPass2.value.trim()){
            alert("Tienes que repetir la mismca contraseña en ambos campos");
        }else{
            return true;
        }
    }else{
        alert("La contraseña tiene que contener minimo 8 caracteres, un caracter en mayusculas, uno en minusculas y un caracter especial");
        return false;
    }
}
}

function validateUser(){
   var inputUser = document.querySelector("#inputUN").value;
    if(inputUser.trim()==""){
        alert("El campo usuario no puede quedar vacío");
    }else{
        if(inputUser.charAt(0) == inputUser.charAt(0).toUpperCase()){
            alert("El primer caracter del usuario no puede ser mayusculas");
        }else{
            return true;
        }
    }
    
}


var bsub=document.querySelector("#btSubmit");

bsub.addEventListener("click",(e)=>{
    e.preventDefault();
    validateForm();
})