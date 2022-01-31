var req = new XMLHttpRequest();



const button = document.querySelector("#action");

button.addEventListener("click", e => {

    if(document.querySelector("#tabla")!=null){
        document.querySelector("#tabla").remove();
    }

    req.open("GET", "xml/catalogo.xml", true);

    req.send();

    req.onload = function () {
        if (req.status === 200 && req.readyState == 4) {
            generarTabla(req)
        } else {
            document.querySelector("#lipsum").innerText = "Error: " + req.status;
        }

    }
})

function generarTabla(req) {
    var table = document.createElement("table");
    table.id="tabla";
    table.style.border = "1px solid black";
    var xml = req.responseXML;
    var th = document.createElement("th");
    var tr = document.createElement("tr");
    th.innerText = "Nº";
    th.style.border = "1px solid black";
    table.appendChild(tr);
    tr.appendChild(th);
    for (var i = 1; i < 12; i++) {
        if (i % 2 != 0) {
            var th = document.createElement("th");
            th.style.border = "1px solid black";
            th.innerText = xml.getElementsByTagName("CD")[0].childNodes[i].tagName;
            tr.appendChild(th);
        }
    }

    var titulos = xml.getElementsByTagName("CD");

    for(var i = 0; i < titulos.length; i++){
       var tr= document.createElement("tr");
        table.appendChild(tr);
        var td = document.createElement("td");
        td.innerText=i+1;
        td.style.border = "1px solid black";
        tr.appendChild(td);
        for (var j = 1; j < 12; j++) {
            var td = document.createElement("td");
            td.style.border = "1px solid black";
            if (j % 2 != 0) {
                td.innerText = xml.getElementsByTagName("CD")[i].childNodes[j].textContent;
                tr.appendChild(td);
            }

    }
}

    document.querySelector("#lipsum").insertAdjacentElement("afterend", table);
}

function procesarXML(req) {


    console.log();

    var cds = xml.getElementsByTagName("CD");


}