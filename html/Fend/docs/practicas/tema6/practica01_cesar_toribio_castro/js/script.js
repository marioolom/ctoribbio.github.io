class Usuario {
    
    constructor(nameUser,ap1,ap2,fechaN,emailUser,telfUser){
        
        this.nameUser = nameUser;
        this.ap1 = ap1;
        this.ap2 = ap2;
        this.fechaN = fechaN;
        this.emailUser = emailUser;
        this.telfUser = telfUser;
    }

    

}

const name = document.getElementById('name');
const surname1 = document.getElementById('surname1');
const surname2 = document.getElementById('surname2');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const telf = document.getElementById('telf');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('submit');

const btnTabla = document.getElementById('btnTabla');
const formulario = document.getElementById("formularioR");
var error=false;

var lista = new Array();
var listaJSON;


telf.addEventListener("blur", e => {
    telfNumAction(0,"telf");
});

telf.addEventListener("focus", e => {
    telfNumAction(1,"telf");
});

var validated = false;


form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    generarTabla();
});

btnTabla.addEventListener('click',e=>{
    generarFormulario();
})

function generarTabla(){
   formulario.remove();
   console.log(lista);
   var div = document.createElement("div");
    div.setAttribute("id", "tablaAG");
    div.classList.add("ag-theme-alpine");
   document.body.appendChild(div);
   // var listaParse = JSON.parse(listaJSON);


    const columnDefs = [
        {field: "nameUser"},
        {field: "ap1"},
        {field: "ap2"},
        {field: "fechaN"},
        {field: "emailUser"},
        {field: "telfUser"}
    ];

    const gridOptions = {
        columnDefs: columnDefs,
        rowData: lista
    }
    const eGridDiv = document.querySelector("#tablaAG");

    new agGrid.Grid(eGridDiv,gridOptions);

}

function generarFormulario(){
    document.body.appendChild(formulario);
}

function telfNumAction(action,id) {
    if (action == 0) {
        var parentTelf = document.getElementById(id);
        var parentTelfValue = document.getElementById(id).value.trim();

        if (parentTelfValue.length != 9 && !validated) {
            error=true;
            printError(parentTelf, "El numero de telefono tiene que tener 9 cifras");
        }else if(isNaN(parentTelfValue)){
            parentTelf.value="";
            error=true;
            printError(parentTelf, "El campo tiene que ser un numero");
        } else {
            var tmp1,tmp2;
            tmp1=parentTelfValue.slice(3,6);
            tmp2=parentTelfValue.slice(6,9);
            validated=true;
            parentTelf.value=parentTelfValue.slice(0,3)+"-"+tmp1+"-"+tmp2;
            printSuccess(parentTelf);
        }
    } else {
       validated = false;     
    }   

}

function printError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function printSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function checkEmptyValue(value) {
    if (value === '') {
        return true;
    } else {
        return false;
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    error=false;
    const nameValue = name.value.trim();
    const surname1Value = surname1.value.trim();
    const surname2Value = surname2.value.trim();

    const emailValue = email.value.trim();
    const birthdateValue = birthdate.value.trim();
    const telfValue = telf.value.trim();

    if(checkEmptyValue(telfValue)){
        printError(telf,"El numero de telefono es obligatorio");
        error=true;
    }else{
        printSuccess(telf);
    }

    if(checkEmptyValue(birthdateValue)){
        error=true;
        printError(birthdate,"La fecha de nacimiento no puede estar vacía");
    }else{
        printSuccess(birthdate);
    }

    if(checkEmptyValue(birthdateValue)){
        printError(birthdate,"La fecha de nacimiento no puede estar vacía");
        error=true;
    }else{
        printSuccess(birthdate);
    }

    //validar nombre
    if (checkEmptyValue(nameValue)) {
        printError(name, 'El nombre es obligatorio');
        error=true;
    } else if (nameValue.length > 15) {
        printError(name, 'El nombre debe tener maximo 15 caracteres');
        error=true;
    } else {
        printSuccess(name);
    }

    //validar apellido
    if (checkEmptyValue(surname1Value)) {
        printError(surname1, 'El primer apellido es obligatorio');
        error=true;
    } else if (surname1Value.length > 15) {
        printError(surname1, 'El nombre debe tener maximo 15 caracteres');
        error=true;
    } else {
        printSuccess(surname1);
    }

    //validar apellido 2
    if (surname2Value.length > 15) {
        error=true;
        printError(surname2, 'El nombre debe tener maximo 15 caracteres');
    } else {
        printSuccess(surname2);
    }

    if (document.getElementById("parentName") != null) {
        
        var parentName = document.getElementById("parentName");
        var parentNameValue = document.getElementById("parentName").value.trim();
        if (checkEmptyValue(parentNameValue)) {
            error=true;
            printError(parentName, "El nombre no puede estar vacío");
        } else {
            printSuccess(parentName);
        }
    }




    //validar Email
    if (checkEmptyValue(emailValue)) {
        error=true;
        printError(email, 'El email es obligatorio');
    } else if (!isValidEmail(emailValue)) {
        error=true;
        printError(email, 'El formato de email no es correcto');
    } else {
        printSuccess(email);
    }


    if(error){
        alert("Han habido errores");
    }else{
      var u = new Usuario(nameValue,surname1Value,surname2Value,birthdateValue,emailValue,telfValue);
      
      //listaJSON = JSON.stringify(u);
      lista.push(u);
    }   

}