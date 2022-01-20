//Objeto tarea

class Task {

    constructor(taskName, taskDescription) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
    }
}

var taskList = new Array();

function addTask(name, description) {
    var name = document.getElementById("taskTitle").value.trim();
    var description = document.getElementById("taskDescription").value.trim();
    var t = new Task(name, description);
    taskList.push(t);
}

function removeTask(name) {
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].name == name) {
            taskList.splice(i, 1);
        }
    }
}


var button = document.getElementById("submitBtn");

button.addEventListener("click", e => {
    e.preventDefault();
    addTask();
})