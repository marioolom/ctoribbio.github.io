var album = "";
function getData(mod, id) {
    switch (mod) {
        case 1:
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    generarTodo(data);
                })
            break;
        case 2:
            fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(data => {
                    generarAlbums(data);
                })
            break;
        case 3:
            document.getElementById("albums").remove();
            fetch('https://jsonplaceholder.typicode.com/albums?userId=' + id)
                .then(response => response.json())
                .then(data => {
                    generarAlbums(data);
                })
            break;
        case 4:
            fetch('https://jsonplaceholder.typicode.com/albums/' + id + '/photos')
                .then(response => response.json())
                .then(data => {
                    generarFotos(data);
                })
            break;
    }
}
window.onload = function () {
    getData(1);
}

function generarTodo(datos) {
    var select = document.createElement("select");
    select.id = "selectUser";
    select.addEventListener("change", (e) => {
        if(e.target.value!=-1){
            getData(3, e.target.value);
        }else{
            document.getElementById("albums").remove();
            document.getElementById("fotos").remove();
            document.querySelector("select").remove();
            getData(1);
        }
        
    })
    var option = document.createElement("option");
    option.textContent = "Seleccione un usuario";
    option.value= -1;
    option.setAttribute("default", "");
    select.appendChild(option);
    for (var i = 0; i < datos.length; i++) {
        var option = document.createElement("option");
        option.textContent = datos[i].name;
        option.value = datos[i].id;
        select.appendChild(option);
    }
    document.getElementById("content").appendChild(select);
    getData(2);

}



function generarAlbums(datos) {
    var tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.id = "albums";

    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.innerText = "User ID";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "ID";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Title";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Fotos";
    tr.appendChild(th);
    tabla.appendChild(tr);

    for (var i = 0; i < datos.length; i++) {
        var tr = document.createElement("tr");

        for (var j = 0; j < 3; j++) {
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }

        var td = document.createElement("td");
        var button = document.createElement("button");
        button.setAttribute("albumID", Object.values(datos[i])[1]);
        button.innerText = "Fotos";
        button.classList.add("btn", "btn-outline-primary");

        button.addEventListener("click", (e) => {
            getData(4,e.target.getAttribute("albumID"));
        })

        td.appendChild(button);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }
    document.getElementById("selectUser").insertAdjacentElement("afterend", tabla);
}   

function generarFotos(data){
    if (document.getElementById("fotos") != null) {
        document.getElementById("fotos").remove();
    }
    var div = document.createElement("div");
    div.classList.add("fotos");
    div.id = "fotos";

    for (var i = 0; i < data.length; i++) {
        var div2 = document.createElement("div");
        div2.classList.add("tarjeta");
        var img = document.createElement("img");
        img.src = data[i].thumbnailUrl;
        img.setAttribute("altLink", data[i].url)
        img.addEventListener("click", (e) => {
            var tmp = e.target.src;
            e.target.src = e.target.getAttribute("altLink");
            e.target.setAttribute("altLink", tmp)
        })
        div2.appendChild(img);
        var titulo = document.createElement("p");
        titulo.innerText = data[i].title;
        div2.appendChild(titulo);
        div.appendChild(div2);
    }


    var button = document.createElement("button");
    button.classList.add("btn", "btn-outline-primary");
    button.innerText = "Ocultar";
    button.addEventListener("click", (e) => {
        div.remove();
    })
    div.insertAdjacentElement("afterbegin", button);

    document.getElementById("albums").insertAdjacentElement("afterend", div);
}