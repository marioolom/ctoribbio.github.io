//Definimos la clase de usuario, y asignamos que depende de si recibe 0 o 1 si tiene o no hijos

class Usuario {

    constructor(nameUser, ap1, ap2, fechaN, emailUser, telfUser, hijos) {

        this.nameUser = nameUser;
        this.ap1 = ap1;
        this.ap2 = ap2;
        this.fechaN = fechaN;
        this.emailUser = emailUser;
        this.telfUser = telfUser;
        if (hijos == 0) {
            this.hijos = "No";
        } else {
            this.hijos = "Si";
        }
    }
}

//Seleccionamos todos los campos
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

//Creamos unas pocas variables booleanas que sirven para controlar algunas cosas
var hasChild;
var error = false;
var validated = false;

//Creamos la lista de usuarios
var lista = new Array();


//Añadimos eventos a los campos
telf.addEventListener("blur", e => {
    telfNumAction(0, "telf");
});

telf.addEventListener("focus", e => {
    telfNumAction(1, "telf");
});



form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    if (!error) {
        form.reset();
        clearForm();
    }
});

btnTabla.addEventListener('click', e => {
    e.preventDefault();
    validateForm();
    if (!error) {
        generarTabla();

    }
})

//Funcion para limpiar los cuadros verdes del formulario
function clearForm() {
    var arrayInputs = document.querySelectorAll(".input-control")
    for (var i = 0; i < arrayInputs.length; i++) {
        arrayInputs[i].classList.remove("success");
    }
}

//Borramos el fomulario, y generamos una tabla con los atributos necesarios
function generarTabla() {
    formulario.remove();
    var div = document.createElement("div");
    div.setAttribute("id", "tablaAG");
    div.classList.add("ag-theme-alpine");
    var button = document.createElement("button");
    button.innerText = "Volver atrás";
    button.addEventListener("click", e => {
        generarFormulario();
    })
    div.appendChild(button);
    document.body.appendChild(div);


    const columnDefs = [
        { field: "nameUser" },
        { field: "ap1" },
        { field: "ap2" },
        { field: "fechaN" },
        { field: "emailUser" },
        { field: "telfUser" },
        { field: "hijos" }
    ];

    const gridOptions = {
        defaultColDef: {
            sortable: true,
            filter: true,
            resizable: true,
        },
        pagination: true,
        columnDefs: columnDefs,
        rowData: lista
    }
    const eGridDiv = document.querySelector("#tablaAG");

    new agGrid.Grid(eGridDiv, gridOptions);

}

//Borramos la tabla y generamos de nuevo el formulario
function generarFormulario() {
    var tabla = document.querySelector("#tablaAG");
    tabla.remove();
    document.body.appendChild(formulario);
    form.reset();
    clearForm();
}

//Creamos una funcion para el numero de telefono depende de la accion que se realice sobre el mismo
function telfNumAction(action, id) {
    if (action == 0) {
        var parentTelf = document.getElementById(id);
        var parentTelfValue = document.getElementById(id).value.trim();

        if (parentTelfValue.length != 9 && !validated) {
            error = true;
            printError(parentTelf, "El numero de telefono tiene que tener 9 cifras");
        } else if (isNaN(parentTelfValue)) {
            parentTelf.value = "";
            error = true;
            printError(parentTelf, "El campo tiene que ser un numero");
        } else {
            var tmp1, tmp2;
            tmp1 = parentTelfValue.slice(3, 6);
            tmp2 = parentTelfValue.slice(6, 9);
            validated = true;
            parentTelf.value = parentTelfValue.slice(0, 3) + "-" + tmp1 + "-" + tmp2;
            printSuccess(parentTelf);
        }
    } else {
        validated = false;
    }

}

//Funciones de error o exito
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

//Funcion para comprobar si un valor esta vacio
function checkEmptyValue(value) {
    if (value === '') {
        return true;
    } else {
        return false;
    }
}

//Funcion para comprobar el email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Funcion para validar el formulario 
function validateForm() {
    error = false;
    const nameValue = name.value.trim();
    const surname1Value = surname1.value.trim();
    const surname2Value = surname2.value.trim();

    const emailValue = email.value.trim();
    const birthdateValue = birthdate.value.trim();
    const telfValue = telf.value.trim();

    if (checkEmptyValue(telfValue)) {
        printError(telf, "El numero de telefono es obligatorio");
        error = true;
    } else {
        printSuccess(telf);
    }

    if (checkEmptyValue(birthdateValue)) {
        error = true;
        printError(birthdate, "La fecha de nacimiento no puede estar vacía");
    } else {
        printSuccess(birthdate);
    }

    if (checkEmptyValue(birthdateValue)) {
        printError(birthdate, "La fecha de nacimiento no puede estar vacía");
        error = true;
    } else {
        printSuccess(birthdate);
    }

    const hijos = document.getElementsByName("hijos");
    var bool = false;
    for (i = 0; i < hijos.length; i++) {
        if (hijos[i].checked) {
            bool = true;
        }
    }


    //validar si se ha seleccionado algun radio, y se asigna valores a hasChild para marcar si tiene o no hijos
    if (!bool) {
        printError(hijos[0].parentElement.parentElement, "Selecciona alguna de las opciones");
    } else {
        printSuccess(hijos[0].parentElement.parentElement);
        if (hijos[0].checked) {
            hasChild = 1;
        } else {
            hasChild = 0;
        }
    }

    //validar nombre
    if (checkEmptyValue(nameValue)) {
        printError(name, 'El nombre es obligatorio');
        error = true;
    } else if (nameValue.length > 15) {
        printError(name, 'El nombre debe tener maximo 15 caracteres');
        error = true;
    } else {
        printSuccess(name);
    }

    //validar apellido
    if (checkEmptyValue(surname1Value)) {
        printError(surname1, 'El primer apellido es obligatorio');
        error = true;
    } else if (surname1Value.length > 15) {
        printError(surname1, 'El nombre debe tener maximo 15 caracteres');
        error = true;
    } else {
        printSuccess(surname1);
    }

    //validar apellido 2
    if (surname2Value.length > 15) {
        error = true;
        printError(surname2, 'El nombre debe tener maximo 15 caracteres');
    } else {
        printSuccess(surname2);
    }

    //validar Email
    if (checkEmptyValue(emailValue)) {
        error = true;
        printError(email, 'El email es obligatorio');
    } else if (!isValidEmail(emailValue)) {
        error = true;
        printError(email, 'El formato de email no es correcto');
    } else {
        printSuccess(email);
    }

    //Si no hay error, se crea un usuario y se añade a la lista
    if (!error) {
        var u = new Usuario(nameValue, surname1Value, surname2Value, birthdateValue, emailValue, telfValue, hasChild);
        lista.push(u);
    }
}