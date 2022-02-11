

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => construirTabla(data))
}

function getTodos(id){
    fetch("https://jsonplaceholder.typicode.com/users/"+id+"/todos")
    .then(response => response.json())
    .then(data => generarTodos(data))
}

function construirTabla(datos){
    var tabla = document.createElement('table');
    tabla.id = "listado";
    tabla.classList.add("table");
    var tr = document.createElement('tr');
    for(var i = 0; i<7;i++){
        if(i==4){   
            continue;
        }
        
    var th = document.createElement('th');
    if(i==6){
            th.innerText = "Opciones";
            tr.appendChild(th);
            continue;
    }
    th.innerText = Object.keys(datos[0])[i];
    tr.appendChild(th);
    }

    tabla.appendChild(tr);
    

    
    for(var j = 0 ; j < datos.length ; j++){
        var tr = document.createElement('tr');

        for(var k = 0 ; k<7 ; k++){
            
            var td = document.createElement('td');
            if(k==4){
                continue;
            }else if(k==6){
                var boton1 = document.createElement('button');
                boton1.setAttribute("type", "button")
                boton1.setAttribute("usuario", Object.values(datos[j])[0]);
                boton1.classList.add("btn");
                boton1.classList.add("btn-outline-primary");
                boton1.textContent = "Posts";
                boton1.addEventListener("click", (e)=>{
                    getPosts(e.target.getAttribute("usuario"));
                })
                var boton2 = document.createElement('button');
                boton2.setAttribute("type", "button")
                boton2.setAttribute("usuario", Object.values(datos[j])[0]);
                boton2.classList.add("btn");
                boton2.classList.add("btn-outline-secondary");
                boton2.textContent = "Albums";
                boton2.addEventListener("click", (e)=>{
                    
                    getAlbums(e.target.getAttribute("usuario"));
                })
                var boton3 = document.createElement('button');
                boton3.setAttribute("type", "button")
                boton3.setAttribute("usuario", Object.values(datos[j])[0]);
                boton3.classList.add("btn");
                boton3.classList.add("btn-outline-dark");
                boton3.textContent = "Todos";
                boton3.addEventListener("click", (e)=>{
                    getTodos(e.target.getAttribute("usuario"));
                })
                td.appendChild(boton1);
                td.appendChild(boton2);
                td.appendChild(boton3);
                tr.appendChild(td);
                continue;   
                
            }
            td.innerText = Object.values(datos[j])[k];

            if(k==1){
                td.id = j;
                td.addEventListener("click", (e)=>{
                    vistaDetallada(datos[e.target.id]);
                })
            }
            tr.appendChild(td);
            
            
            
        }
        tabla.appendChild(tr);
    }


    document.getElementById("content").appendChild(tabla);
    
    

}


window.onload = function(){
    
    getData();

}

function generarTodos(datos){
    limpiar();

    var tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.id = "todos";

    var tr = document.createElement("tr");
    
    var th = document.createElement("th");
    th.innerText = "ID";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Title";
    tr.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Completado";
    tr.appendChild(th);
    tabla.appendChild(tr);

    for(var i = 0; i<datos.length; i++) {
        var tr = document.createElement("tr");

        for(var j=1; j<4;j++){
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }
        if(Object.values(datos[i])[3]==true){
            td.innerText ="Si";
        }else{
            td.innerText = "No";
        }
        
        tabla.appendChild(tr);

    }
    document.getElementById("listado").insertAdjacentElement("afterend", tabla);
    

}

function vistaDetallada(datos){
    var listado = document.getElementById("listado");
    listado.remove();
    var nombre = document.createElement("span");
    nombre.innerHTML = "<h3>Nombre:"+datos.name+"</h3>";

    var username = document.createElement("span");

    username.innerHTML = "<h4>Username:"+datos.username+"</h4>";

    var email = document.createElement("span");
    
    email.innerText = "Email:"+datos.email;

    var direccion = document.createElement("span");

    direccion.innerHTML ="<br>Direccion:<ul><li>Calle: "+datos.address.street+"</li><li>Apartamento: "+datos.address.suite+"</li><li>Ciudad: "+datos.address.city+"</li><li>Codigo Postal: "+datos.address.zipcode+"</li><li>Coordenadas: <ul><li>Latitud: "+datos.address.geo.lat+"</li><li>Longitud: "+datos.address.geo.lat+"</li></ul></li></ul>";

    var telefono = document.createElement("span");

    telefono.innerText = "Telefono: "+datos.phone;

    var web = document.createElement("span");

    web.innerHTML="<br><a href='"+datos.website+"'>"+datos.website+"</a>";

    var empresa = document.createElement("span");

    empresa.innerHTML = "<br>Empresa: <ul><li>Nombre:"+datos.company.name+"</li><li>Eslógan:"+datos.company.catchPhrase+"</li><li>Sector:"+datos.company.bs+"</li></ul>";

    var contenido = document.getElementById("content");

    var ficha = document.createElement("div");
    

    ficha.appendChild(nombre);
    ficha.appendChild(username);
    ficha.appendChild(email);
    ficha.appendChild(direccion);
    ficha.appendChild(telefono);
    ficha.appendChild(web);
    ficha.appendChild(empresa);
    
    contenido.appendChild(ficha);
    
    
    
    
    
    
    
    
    
    
    
    var boton = document.createElement(boton);
    boton.textContent = "Volver";
    boton.classList.add("btn");
    boton.classList.add("btn-outline-primary");
    
    document.getElementById("content").insertAdjacentElement("afterbegin",boton);
    boton.addEventListener("click",(e)=>{
        boton.remove();
        ficha.remove();
        document.getElementById("content").insertAdjacentElement("afterbegin",listado);
    })
}

function getPosts(id){
    fetch("https://jsonplaceholder.typicode.com/users/"+id+"/posts")
    .then(response => response.json())
    .then(data => generarPosts(data))
}

function generarPosts(datos){
    limpiar();

    var tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.id = "posts";

    var tr = document.createElement("tr");
    
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

    for(var i = 0 ; i< datos.length ; i++){
        var tr = document.createElement("tr");

        for(var j=1; j<4;j++){
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }
        
        var td = document.createElement("td");

        var button = document.createElement("button");

        button.setAttribute("postID",datos[i].id );

        button.innerText = "Comentarios";

        button.classList.add("btn");
        button.classList.add("btn-outline-primary");

        button.addEventListener("click", (e)=>{
            getComments(e.target.getAttribute("postID"));
        })
        td.appendChild(button);



        tr.appendChild(td);
        
        tabla.appendChild(tr);

        
    }
    document.getElementById("listado").insertAdjacentElement("afterend", tabla);


}


function limpiar() {
    if (document.getElementById("todos") != null) {
        document.getElementById("todos").remove();
    } else if (document.getElementById("posts") != null) {
        document.getElementById("posts").remove();
    } else if (document.getElementById("albums") != null) {
        document.getElementById("albums").remove();
    }
    if (document.getElementById("comments") != null) {
        document.getElementById("comments").remove();
        document.getElementById("volver").remove();
    } else if (document.getElementById("fotos") != null) {
        document.getElementById("fotos").remove();
    }
    
}

function getComments(post){
    fetch("https://jsonplaceholder.typicode.com/posts/"+post+"/comments")
    .then(response => response.json())
    .then(data => generarComments(data))
}

function generarComments(datos){
    if (document.getElementById("comments") != null) {
        document.getElementById("comments").remove();
    
        document.getElementById("volver").remove();}

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

    for(var i = 0 ; i< datos.length ; i++){
        var tr = document.createElement("tr");

        for(var j=1; j<Object.values(datos[i]).length;j++){
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.getElementById("posts").insertAdjacentElement("afterend", tabla);






    var volver = document.createElement("button");
    volver.id="volver";
    volver.innerText = "Ocultar";
    document.getElementById("comments").insertAdjacentElement("afterend", volver);
    volver.addEventListener("click", (e)=>{
        document.getElementById("comments").remove();
        volver.remove();
    })   
}

function getAlbums(id){
    fetch("https://jsonplaceholder.typicode.com/users/"+id+"/albums")
    .then(response => response.json())
    .then(data => generarAlbums(data))
}

function generarAlbums(datos){
    limpiar();

    var tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.id = "albums";

    var tr = document.createElement("tr");
    
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

    for(var i=0; i< datos.length ; i++){
        var tr = document.createElement("tr");

        for(var j=1; j<3;j++){
            var td = document.createElement("td");
            td.innerText = Object.values(datos[i])[j];
            tr.appendChild(td);
        }

        var td = document.createElement("td");
        var button = document.createElement("button");
        button.setAttribute("albumID",Object.values(datos[i])[1]);
        button.innerText = "Fotos";
        button.classList.add("btn","btn-outline-primary");

        button.addEventListener("click",(e)=>{
            getFotos(e.target.getAttribute("albumID"));
        })

        td.appendChild(button);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }
    document.getElementById("listado").insertAdjacentElement("afterend", tabla);
}

function getFotos(id) {
    fetch("https://jsonplaceholder.typicode.com/albums/"+id+"/photos")
    .then(response => response.json())
    .then(data => generarFotos(data))
}

function generarFotos(data) {
    if(document.getElementById("fotos")!=null){
        document.getElementById("fotos").remove();
    }
    var div = document.createElement("div");
    div.id = "fotos";

    for(var i = 0; i < data.length; i++) {
        var div2 = document.createElement("div");
        var img = document.createElement("img");
        img.src = data[i].thumbnailUrl;
        img.setAttribute("altLink",data[i].url)
        img.addEventListener("click", (e)=>{
            var tmp = e.target.src;
            e.target.src = e.target.getAttribute("altLink");
            e.target.setAttribute("altLink",tmp)
        })
        div2.appendChild(img);
        var titulo = document.createElement("p");
        titulo.innerText=data[i].title;
        div2.appendChild(titulo);
        div.appendChild(div2);
    }


    var button = document.createElement("button");
    button.classList.add("btn","btn-outline-primary");
    button.innerText="Ocultar";
    button.addEventListener("click", (e)=>{
        div.remove();
    })
    div.insertAdjacentElement("afterbegin", button);
    
    document.getElementById("albums").insertAdjacentElement("afterend", div);
}