//Objeto tarea

class Task {

    constructor(taskName, taskDescription) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
    }
    getName() { return this.taskName; }
    getDesc() { return this.taskDescription; }
}

var taskList = new Array();
if(localStorage.getItem("tasklist") != undefined){
    taskList = JSON.parse(localStorage.getItem("tasklist"));
    reloadTaskBar();
}

function addTask(name, description) {
    var name = document.getElementById("taskTitle").value.trim();
    var description = document.getElementById("taskDescription").value.trim();
    var t = new Task(name, description);
    taskList.push(t);
    localStorage.setItem("tasklist",JSON.stringify(taskList));
    console.log(taskList);
    reloadTaskBar();
}

function modTask(event){
    parent = event.target.parentElement;
    
    var nombreMod = parent.querySelector(".titulo").innerText;
    var descMod = parent.querySelector(".descripcion").innerText;
    
    document.querySelector("#taskTitle").value = nombreMod;
    document.querySelector("#taskDescription").value = descMod;
    button.disabled = true;
    var buttonEdit = document.createElement("button");
    buttonEdit.innerText="Editar";
    button.insertAdjacentElement("afterend",buttonEdit);
    buttonEdit.addEventListener("click", (e)=>{
        e.preventDefault();
        target = e.target
        
        console.log(parent.id);
        taskList[parent.id].taskName =   document.querySelector("#taskTitle").value
        taskList[parent.id].taskDescription =   document.querySelector("#taskDescription").value
        
        localStorage.setItem("tasklist",JSON.stringify(taskList));
        reloadTaskBar();
        buttonEdit.remove();
        button.disabled = false;
        var form = document.querySelector("form");
        form.reset();
    })
}

function pushTask(taskName,taskDescription,id){
    var div = document.createElement("div");

    div.classList.add("tarea");
    div.id = id;

    var titleDiv= document.createElement("div");
    titleDiv.classList.add("elemento", "titulo");
    titleDiv.innerText=taskName;

    var descDiv = document.createElement("div");
    descDiv.classList.add("elemento","descripcion");
    descDiv.innerText=taskDescription;

    var borrar = document.createElement("div");
    borrar.classList.add("elemento","borrar");
    borrar.innerText = "X";
    borrar.addEventListener("click",(e)=>{
        removeTask(e)
    })

    var modificar = document.createElement("div");
    modificar.classList.add("elemento","modificar");
    modificar.innerText="Modificar";
    modificar.addEventListener("click", (e)=>{
        modTask(e);
    })

    div.appendChild(titleDiv);
    div.appendChild(descDiv);
    div.appendChild(borrar);
    div.appendChild(modificar); 

    document.querySelector(".taskBar").insertAdjacentElement("beforeend", div);
    
}
function removeTask(event) {
    target = event.target
    taskList.splice(target.parentElement.id,1);
    localStorage.setItem("tasklist",JSON.stringify(taskList));
    reloadTaskBar();
}
function reloadTaskBar(){
    var taskBar = document.querySelector(".taskBar");

    var tareas = taskBar.querySelectorAll(".tarea");

    for(var i = 0; i < tareas.length; i++){
        tareas[i].remove();
    }

    for(var i = 0; i < taskList.length; i++) {
        pushTask(taskList[i].taskName,taskList[i].taskDescription,i);
    }


}


var button = document.getElementById("btnSubmit");

button.addEventListener("click", e => {
    e.preventDefault();
    addTask();
    form.reset();
})
