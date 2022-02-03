window.onload = function () {
    var req = new XMLHttpRequest();
    var req2 = new XMLHttpRequest();

    req.open("GET", "json/denominaciones.json", true);

    req.send();

    req.onload = function () {
        if (req.status === 200 && req.readyState == 4) {
            jsonDO = JSON.parse(req.responseText);

            generarSelect(jsonDO);


        } else {
            console.error("Error Linea 14")
        }

    }
    req2.open("GET", "json/productos.json", true);

    req2.send();

    req2.onload = function () {
        if (req2.status === 200 && req2.readyState == 4) {
            jsonPro = JSON.parse(req2.responseText);


        } else {
            console.error("Error Linea 14")
        }

    }



}

document.querySelector("#denominacion").addEventListener("change", (e) => {
    console.log()
    infoDO(document.querySelector("#denominacion").value);
    tablaDO(document.querySelector("#denominacion").value);
})


function generarSelect(json) {

    var select = document.querySelector("#denominacion");
    var option = document.createElement("option");
    option.setAttribute("selected", "");
    option.setAttribute("value", "default");
    option.innerText = "Seleccione una D.O";
    select.insertAdjacentElement("beforeend", option);

    for (var i = 0; i < json.length; i++) {


        var option = document.createElement("option");

        option.setAttribute("value", Object.values(json[i])[0]);

        option.innerText = Object.values(json[i])[0] + "(" + Object.values(json[i])[1] + ")";

        select.insertAdjacentElement("beforeend", option);

    }
}

function infoDO(denominacion) {
    if (denominacion === "default") {
        document.querySelector("#regionDO").innerHTML = "Seleccione una D.O por favor.";
        document.querySelector("#descripDO").innerHTML = "";
    } else {
        json = jsonDO;

        for (var i = 0; i < json.length; i++) {
            if (Object.values(json[i])[0] == denominacion) {
                document.querySelector("#regionDO").innerHTML = "<h3>" + Object.values(json[i])[1] + "</h3>";
                document.querySelector("#descripDO").innerText = Object.values(json[i])[2];
            }
        }
    }
}
function tablaDO(denominacion) {
    if (denominacion === "default") {
        document.querySelector("#vinosDO").innerHTML = "";
    } else {

        document.querySelector("#vinosDO").innerHTML = "";
        var json = jsonPro;

        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaVino")
        var tdh = document.createElement("tr");
        for (var i = 0; i < Object.keys(json[0]).length; i++) {
            var th = document.createElement("th");
            th.innerText = Object.keys(json[0])[i].toUpperCase();
            tdh.appendChild(th);
        }
        tabla.appendChild(tdh);

        for (var j = 0; j < json.length; j++) {
            if (Object.values(json[j])[2] === denominacion) {
                var tr = document.createElement("tr");
                for (var k = 0; k < Object.keys(json[j]).length; k++) {
                    var td = document.createElement("td");
                    if (k == 4) {
                        var img = document.createElement("img");
                        img.setAttribute("src", Object.values(json[j])[k]);
                        img.setAttribute("height", "150px");
                        td.appendChild(img);
                    } else {

                        td.innerText = Object.values(json[j])[k];

                    }
                    if (k == 0) {
                        td.addEventListener("click", (e) => {
                            if (vista) {
                                vistadetallada(e, true);
                            } else {
                                vistaDetallada(e, false);
                            }
                        })
                    }
                    if (k == 5) {
                        var desc = Object.values(json[j])[k];
                        td.setAttribute("id", j);
                        td.setAttribute("deployed", "false");
                        td.innerHTML = desc.slice(0, 64) + "...";
                        td.addEventListener("click", (e) => {
                            if (e.target.getAttribute("deployed") == "false") {
                                e.target.setAttribute("deployed", "true");
                                e.target.innerText = Object.values(json[e.target.id])[5];
                            } else {
                                e.target.innerText = Object.values(json[e.target.id])[5].slice(0, 64) + "...";

                                e.target.setAttribute("deployed", "false");
                            }
                        })
                    }
                    tr.appendChild(td);
                }
                tabla.appendChild(tr);
            }
        }


        document.querySelector("#vinosDO").appendChild(tabla);
        main = document.querySelector("main");
    }
}

function vistaDetallada(e) {
    var json = jsonPro;

    for (var i = 0; i < json.length; i++) {
        if (Object.values(json[i])[0] == e.target.innerText) {
            main.remove();
            var vista = document.createElement("div");
            var nombre = document.createElement('span');
            nombre.innerHTML = "<h2>Nombre del Vino: " + Object.values(json[i])[0] + "</h2>";


            var bodega = document.createElement("span");
            bodega.innerHTML = "<b>Bodega</b>: " + Object.values(json[i])[1]


            var denominacion = document.createElement("span");
            denominacion.innerHTML = "<b>Denominación de Origen</b>: " + Object.values(json[i])[2]

            var precio = document.createElement("span");
            precio.innerHTML = "<b>Precio</b>: " + Object.values(json[i])[3] + "€";

            var img = document.createElement('img');
            img.setAttribute("src", Object.values(json[i])[4]);
            img.classList.add("imgTarjeta");

            var descripcion = document.createElement('span');
            descripcion.innerHTML = "<b>Descripción</b>: " + Object.values(json[i])[5]

            var tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");


            var volver = document.createElement("button");

            volver.innerText = "Volver";

            volver.addEventListener("click", (e) => {
                vista.remove();
                document.body.appendChild(main);
            })

            tarjeta.appendChild(nombre);
            tarjeta.appendChild(img);
            tarjeta.appendChild(bodega);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(volver);

            vista.insertAdjacentElement("beforeend", tarjeta);
            document.body.appendChild(vista);

        }
    }








}
var jsonPro;
var jsonDO;
var main = "";
var vista = false;
