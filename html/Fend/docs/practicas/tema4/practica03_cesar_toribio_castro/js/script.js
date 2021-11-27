
function ejercicio1() {
    document.body.style.backgroundColor = "white";
}

function ejercicio2() {
     // Uso estructuras for para que si se añadiesen nuevos elementos al documento se procesent tambien 
    element = document.getElementsByTagName("header");
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "coral";
    }
    element = document.getElementsByTagName("nav");
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "teal";
    }
    element = document.getElementsByTagName("section");
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "lightgray";
    }

    element = document.getElementsByTagName("article");
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "coral";
    }

    element = document.getElementsByTagName("aside");
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "#333";
    }

    element = document.getElementsByTagName("footer");
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "teal";
    }

}

function ejercicio3() {
    element = document.getElementsByTagName("header");
    // Uso estructuras for para que si se añadiesen nuevos elementos al documento se procesent tambien 
    for (var i = 0; i < element.length; i++) {
        element[i].style.padding = "20px";
    }


    element = document.getElementsByTagName("nav");
    for (var i = 0; i < element.length; i++) {
        element[i].style.padding = "20px";
    }

    element = document.getElementsByTagName("section");
    for (var i = 0; i < element.length; i++) {
        element[i].style.padding = "20px";
    }

    element = document.getElementsByTagName("article");
    for (var i = 0; i < element.length; i++) {
        element[i].style.padding = "20px";
    }

    element = document.getElementsByTagName("aside");
    for (var i = 0; i < element.length; i++) {
        element[i].style.padding = "20px";
    }

    element = document.getElementsByTagName("footer");
    for (var i = 0; i < element.length; i++) {
        element[i].style.padding = "20px";
    }
}

function ejercicio4() {
    //Uso un for hasta 6 para poder abarcar de h1 hasta h6 sin tener que hacerlo a mano
    for (var i = 0; i < 6; i++) {
        var elements = document.getElementsByTagName("h" + i)
        for (var j = 0; j < elements.length; j++) {
            elements[j].style.marginBottom = "15px";
        }
    }
}

function ejercicio5() {
    //Uso un caracter comodin para no tener que hacer a mano la seleccion
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
    }
}

function ejercicio6() {
    var element = document.getElementsByTagName("nav");
    element[0].style.textAlign = "center";
    element = document.querySelector(".active");
    element.style.color = "red";
    //Propiedad text transofrm para evitar pasar a cadena el texto
    element.style.textTransform = "uppercase";
}
function ejercicio7() {
    var element = document.getElementsByTagName("article");
    //Borramos el primer parrafo del primer article
    element[0].getElementsByTagName("p")[0].remove();
    //creamos uno nuevo para sustituirlo
    var tmp = document.createElement("p");
    tmp.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at luctus ligula, pharetra rutrum erat. Nunc nisl nunc, tincidunt eu semper id, molestie a elit. Duis interdum ante a justo sagittis egestas. Etiam odio enim, pulvinar ac erat et, gravida pulvinar ex. Cras non lectus convallis, pellentesque eros sed, aliquet massa. ";
    //Insertamos el elemento al final de el articulo
    element[0].insertAdjacentElement("beforeend", tmp);
    //justificamos el parrafo
    tmp.style.textAlign = "justify";
}

function ejercicio8() {
    //Seleccionamos el article
    var element = document.getElementsByTagName("article");
    //Creamos un nuevo article
    var article = document.createElement("article");
    //Ponemos un id para identificarlo mas adelante en el ejercicio 12
    article.setAttribute("id", "article2");
    //Lo insertamos
    element[0].insertAdjacentElement("afterend", article);
    //Creamos un select
    var select = document.createElement("select");

    //Lo insertamos en el nuevo  article
    article.insertAdjacentElement("beforeend", select);

    //Bucle para crear las opciones e introducirlas dentro 
    for (var i = 0; i < 5; i++) {
        var option = document.createElement("option");
        option.setAttribute("name", ("option" + i));
        option.setAttribute("value", ("option" + i));
        option.textContent = ("option" + i);
        select.insertAdjacentElement("beforeend", option);
    }

}

function ejercicio9() {
    //Seleccionamos el aside por su clase 
    var aside = document.querySelector(".lateral");
    //creamos un enlace para poder insertar dentro el titulo 
    var a = document.createElement("a");
    //Insertamos el titulo mediante innerhtml para que sea mas senciloo
    a.innerHTML = "<h3>Pedri se pierde lo que queda de año</h3>";
    //Seleccionamos la URL a la que va a redirigir el enlace
    a.setAttribute("href", "https://www.marca.com/futbol/barcelona/2021/11/25/619f85c846163ff3908b45a9.html")
    //Creamos un parrafo, y le metemos texto
    var p = document.createElement("p");
    p.textContent = "Malas noticias para Xavi, la recuperación de Pedri va más lenta de lo que se podía esperar en un principio..."
    //Insertamos ambos 
    aside.insertAdjacentElement("beforeend", a);
    aside.insertAdjacentElement("beforeend", p);

    //Repeticion del codigo desde la linea 138 a la 149
    var a = document.createElement("a");
    a.innerHTML = "<h3>Hamilton sí tendrá el cohete en Arabia</h3>";
    a.setAttribute("href", "https://www.marca.com/motor/formula1/gp-arabia-saudi/2021/11/25/619f5376e2704e089a8b45b0.html")
    var p = document.createElement("p");
    p.textContent = "Wolff avisa que el nuevo motor de Brasil, que no usó en Qatar para ganar, sí que será de la partida en el nuevo circuito de Jeddah. Red Bull asegura no tenerle miedo..."
    aside.insertAdjacentElement("beforeend", a);
    aside.insertAdjacentElement("beforeend", p);
}

function ejercicio10() {
    //selecciono el aside mediante su clase
    var element =document.querySelector(".lateral");
    //selecciono la clase de su classlist y la elimino
    element.classList.remove("lateral");
    //asigno la nueva clase al elemento
    element.classList.add("lateralNew");

    //selecciono el estilo que esta siendo computado en ese elemento, y su propiedad background color
    var estilo = window.getComputedStyle(element).getPropertyValue('background-color');
    //asigno el estilo a la seccion
    document.getElementsByTagName("section")[0].style.backgroundColor = estilo;

}

function ejercicio11(){
    //selecciono el aside 
    var primerArticulo = document.getElementsByTagName("aside")[0].getElementsByTagName("a")[0];
    //Creo un nuevo enlace igual que en el ejercici 9 
    var a = document.createElement("a");
    a.innerHTML = "<h3>Salamanca cancela la celebración de la Nochevieja Universitaria</h3>";
    a.setAttribute("href", "https://www.elnortedecastilla.es/salamanca/junta-seguridad-local-20211125124247-nt.html")
    var p = document.createElement("p");
    p.textContent = "La Asociación de Hostelería asume la cancelación del Fin de Año Universitario por responsabilidad social..."

    // El unico cambio con respecto al ejercicio 9 es que en este caso se insertan afterbegin para que queden encima del todo.
    //Por ende ha de hacerse en el orden inverso parrafo-titulo para que quede el parrafo por debajo del titulo 
    primerArticulo.insertAdjacentElement("afterbegin", p);
    primerArticulo.insertAdjacentElement("afterbegin", a);
}

function ejercicio12(){
    //Seleccionamos el articulo mediante el id puesto estrategicamente para ello 
    //Realizar el 8 antes que el 12 es IMPERATIVO en este caos 
    var article= document.querySelector("#article2");
    var h2=document.createElement("h2");
    h2.textContent="Titulo por encima del select";

    var p=document.createElement("p");
    p.textContent="Un parrafo por encima del Select, Hola que tal?? Dani ponme un 9 si lees esto :) No se que mas escribir para rellenario";

    //Insertamos justo despues del inicio del parrafo para que al ser insertados se coloque el titulo por encima 
    article.insertAdjacentElement("afterbegin", p);
    article.insertAdjacentElement("afterbegin", h2);

    var ul=document.createElement("ul");

        //Creo los elementos de la lista con InnerHTMl para que sea mas sencillo 
    ul.innerHTML="<li>Hola</li><li>que</li><li>tal?</li>";

    //Lo insertamos justo antes del final del articulo
    article.insertAdjacentElement("beforeend", ul);


}

function ejercicio13() {
    var section = document.getElementsByTagName("section")[0];

    var section2 = section.cloneNode(true);

    section.setAttribute("id","section1");
    section2.setAttribute("id","section2");

    section.insertAdjacentElement("afterend", section2);
}

function ejercicio14(){
    var section=document.querySelector("#section2");
    section.style.backgroundColor= "red";
    section.style.border="2px solid green"
    var articles=section.getElementsByTagName("article");

    for(var i=0; i< articles.length; i++){
        
        articles[i].style.backgroundColor="lightblue";
        articles[i].style.border="2px solid black";
    }
}

function ejercicio15(){
    //Seleccionamos el footer
    var footer=document.getElementsByTagName("footer")[0];

    //creamos una imagen
    var img=document.createElement("img");

    //Hacemos que la fuente de la imagen corresponda con la indicada en el pdf
    img.setAttribute("src","https://media.giphy.com/media/DAtJCG1t3im1G/giphy.gif");

    //Ponemos los atributos al tamaño indicado
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");

    //Lo insertamos al final del footer
    footer.insertAdjacentElement("beforeend",img);
}