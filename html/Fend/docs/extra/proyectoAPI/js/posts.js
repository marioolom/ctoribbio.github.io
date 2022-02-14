window.onload = function() {
        getData(1);
};


function generarTodo(datos) {
    var select = document.createElement("select");
    select.id = "selectUser";
    select.addEventListener("change", (e) =>{
        if(e.target.value!=-1){
            getData(3, e.target.value);
        }else{
            document.getElementById("posts").remove();
            
            document.getElementById("volver").remove();
            document.getElementById("comments").remove();
            document.querySelector("select").remove();
            getData(1);
        }
    })
    var option = document.createElement("option");
    option.textContent = "Seleccione un usuario";
    option.value= -1;
    option.setAttribute("default", "");
    select.appendChild(option);
    for(var i = 0; i < datos.length; i++) {
        var option = document.createElement("option");
        option.textContent = datos[i].name;
        option.value = datos[i].id;
        select.appendChild(option);
    }
   document.getElementById("content").appendChild(select);
   getData(2);
    
}

function generarPosts(datos) {
    var div = document.createElement("div");
    div.id = "posts";
    var tabla = document.createElement("table");
    tabla.classList.add("table");

    var tr = document.createElement("tr");

    var th = document.createElement("th");
    th.innerText = "userID";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "ID";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Title";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Body";
    tr.appendChild(th);
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Comentarios";
    tr.appendChild(th);
    tabla.appendChild(tr);

    for (var i = 0; i < datos.length; i++) {
        var tr = document.createElement("tr");

        for (var j = 0; j < 4; j++) {
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }

        var td = document.createElement("td");

        var button = document.createElement("button");

        button.setAttribute("postID", datos[i].id);

        button.innerText = "Comentarios";

        button.classList.add("btn", "btn-outline-primary");

        button.addEventListener("click", (e) => {
            getData(4,e.target.getAttribute("postID"));
        })
        td.appendChild(button);



        tr.appendChild(td);

        tabla.appendChild(tr);


    }
    div.appendChild(tabla);
    document.getElementById("selectUser").insertAdjacentElement("afterend", div);

}

function generarComments(datos) {
    if (document.getElementById("comments") != null) {
        document.getElementById("comments").remove();

        document.getElementById("volver").remove();
    }

    var tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.id = "comments";

    var tr = document.createElement("tr");

    var th = document.createElement("th");
    th.innerText = "ID";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Nombre";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Email";
    tr.appendChild(th);
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Body";
    tr.appendChild(th);
    tabla.appendChild(tr);

    for (var i = 0; i < datos.length; i++) {
        var tr = document.createElement("tr");

        for (var j = 1; j < Object.values(datos[i]).length; j++) {
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.getElementById("posts").insertAdjacentElement("afterend", tabla);






    var volver = document.createElement("button");
    volver.id = "volver";
    volver.innerText = "Ocultar";
    document.getElementById("comments").insertAdjacentElement("afterend", volver);
    volver.addEventListener("click", (e) => {
        document.getElementById("comments").remove();
        volver.remove();
    })
}

async function getData(mod,id) {
    switch (mod) {
         case 1:
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                generarTodo(data);
            })
            break;
        case 2:
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                generarPosts(data);
            })
            break;
        case 3:
            document.getElementById("posts").remove();
            fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
            .then(response => response.json())
            .then(data => {
                generarPosts(data);
            })
            break;
        case 4:
            fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
            .then(response => response.json())
            .then(data => {
                generarComments(data);
            })
            break;

    }
   
}