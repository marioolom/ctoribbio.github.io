const name = document.getElementById('name');
const surname1 = document.getElementById('surname1');
const surname2 = document.getElementById('surname2');
const expNum = document.getElementById('expNum');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const telf = document.getElementById('telf');
const hobby = document.getElementById('hobby');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('submit');
const avisoL = document.getElementById('avisoL');
const addHobby = document.getElementById('addHobby');

addHobby.addEventListener('click',e => {
    e.preventDefault();
    nuevaAficion();
})

var arrayBotones= new Array();
arrayBotones=document.querySelectorAll(".borrar");

for(var i=0; i<arrayBotones.length; i++){
    arrayBotones[i].addEventListener("click", e=>{
        borrarAficion(e);
    })
}

function borrarAficion(event) {
    event.target.parentElement.remove();
}

function nuevaAficion(){
    var hobbyValue = hobby.value.trim();

    if(!checkEmptyValue(hobbyValue)){

        var div = document.createElement("div");
        div.classList.add("containerAficiones");
    
        var span = document.createElement("span");
        span.setAttribute("id", "nombreAficion");
        span.innerText = hobbyValue;
    
        var div2= document.createElement("div");
        div2.innerText= "X";
        div2.classList.add("borrar");
    
    
        div2.addEventListener("click", e=>{
            borrarAficion(e);
        });
    
        div.appendChild(span);
        div.appendChild(div2);
        
        hobby.value ="";
        hobby.insertAdjacentElement("beforebegin", div);
        printSuccess(hobby);
    
    }else{
        printError(hobby, "La aficion no puede estar vacia");
    }
}


telf.addEventListener("blur", e => {
    telfNumAction(0,"telf");
});

telf.addEventListener("focus", e => {
    telfNumAction(1,"telf");
});

var validated = false;
document.getElementById("age").disabled = true;
btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    if(!avisoL.checked){
        printError(avisoL.parentElement,"Tienes que aceptar el aviso legal");
    }else{
        printSuccess(avisoL.parentElement);
        validateForm();
    }
});
birthdate.addEventListener("blur", e => {
    setAge();
})

expNum.addEventListener("focus", e => {
    expNumAction(1);
});

expNum.addEventListener("blur", e => {
    expNumAction(0);
});

function generateParentInfo() {
    const ageC = document.getElementById("ageC");


    var div = document.createElement("div");
    div.setAttribute("class", "input-control");

    var divT = document.createElement("div");
    divT.setAttribute("class", "input-control");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "error");

    var div3 = document.createElement("div");
    div3.setAttribute("class", "error");

    var label = document.createElement("label");
    label.innerText = "Nombre y apellidos del Padre/Madre/Tutor";
    label.setAttribute("for", "parentName");

    var labelT = document.createElement("label");
    labelT.innerText = "Telefono del responsable";
    labelT.setAttribute("for", "parentT");

    var input = document.createElement("input");
    input.setAttribute("id", "parentName");
    input.setAttribute("name", "parentName");
    input.setAttribute("type", "text");

    var inputT = document.createElement("input");
    inputT.setAttribute("id", "parentTelf");
    inputT.setAttribute("name", "parentTelf");
    inputT.setAttribute("type", "text");



    divT.appendChild(labelT);
    divT.appendChild(inputT);
    divT.appendChild(div3);

    ageC.insertAdjacentElement("afterend", divT);



    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(div2);
    ageC.insertAdjacentElement("afterend", div);

    inputT.addEventListener("blur", e => {
        telfNumAction(0,"parentTelf");
    });

    inputT.addEventListener("focus", e => {
        telfNumAction(1,"parentTelf");
    });

}

function telfNumAction(action,id) {
    if (action == 0) {
        var parentTelf = document.getElementById(id);
        var parentTelfValue = document.getElementById(id).value.trim();

        if (parentTelfValue.length != 9 && !validated) {
            printError(parentTelf, "El numero de telefono tiene que tener 9 cifras");
        }else if(isNaN(parentTelfValue)){
            parentTelf.value="";
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
function setAge() {
    const age = document.getElementById("age");
    age.value = getAge(birthdate.value);

    if (age.value < 18) {

        generateParentInfo();



    }
}
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function expNumAction(action) {
    const expNumValue = expNum.value.trim();
    const nameValue = name.value.trim();
    const surname1Value = surname1.value.trim();
    if (action == 0) {
        if (expNumValue.length > 5) {
            btnSubmit.disabled = true;
            printError(expNum, "El numero de expediente no puede tener mas de 5 cifras")
        } else if (expNumValue.length < 5) {
            btnSubmit.disabled = true;
            printError(expNum, "El numero de expediente no puede tener menos de 5 cifras");
        } else {
            expNum.setAttribute("type", "text")
            expNum.value = nameValue.charAt(0).toUpperCase() + surname1Value.charAt(0).toUpperCase() + expNumValue;
            printSuccess(expNum);
        }
    } else {
        expNum.value = expNumValue.slice(2);
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
    const nameValue = name.value.trim();
    const surname1Value = surname1.value.trim();
    const surname2Value = surname2.value.trim();

    const emailValue = email.value.trim();
    const birthdateValue = birthdate.value.trim();
    const telfValue = telf.value.trim();
    const hobbyValue = hobby.value.trim();

    const hijos = document.getElementsByName("hijos");
    var bool=false;
    for( i = 0; i < hijos.length; i++){
        if(hijos[i].checked){
            bool=true;
        }
    }
    
    if(!bool){
        printError(hijos[0].parentElement.parentElement, "Selecciona alguna de las opciones");
    }else{
        printSuccess(hijos[0].parentElement.parentElement);
    }
    
    if(checkEmptyValue(telfValue)){
        printError(telf,"El numero de telefono es obligatorio");
    }
    if(checkEmptyValue(expNum.value.trim())){
        printError(expNum,"El numero de expediente es obligatorio");
    }

    //validar nombre
    if (checkEmptyValue(nameValue)) {
        printError(name, 'El nombre es obligatorio');
    } else if (nameValue.length > 15) {
        printError(name, 'El nombre debe tener maximo 15 caracteres');
    } else {
        printSuccess(name);
    }

    //validar apellido
    if (checkEmptyValue(surname1Value)) {
        printError(surname1, 'El primer apellido es obligatorio');
    } else if (surname1Value.length > 15) {
        printError(surname1, 'El nombre debe tener maximo 15 caracteres');
    } else {
        printSuccess(surname1);
    }

    //validar apellido 2
    if (surname2Value.length > 15) {
        printError(surname2, 'El nombre debe tener maximo 15 caracteres');
    } else {
        printSuccess(surname2);
    }

    if (document.getElementById("parentName") != null) {
        
        var parentName = document.getElementById("parentName");
        var parentNameValue = document.getElementById("parentName").value.trim();
        if (checkEmptyValue(parentNameValue)) {
            printError(parentName, "El nombre no puede estar vacío");
        } else {
            printSuccess(parentName);
        }
    }




    //validar Email
    if (checkEmptyValue(emailValue)) {
        printError(email, 'El email es obligatorio');
    } else if (!isValidEmail(emailValue)) {
        printError(email, 'El formato de email no es correcto');
    } else {
        printSuccess(email);
    }

}