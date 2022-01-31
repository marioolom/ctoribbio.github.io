class CD {
    constructor(title, artist, country, company, price, year) {
        this.title = title;
        this.artist = artist;
        this.country = country;
        this.company = company;
        this.price = price;
        this.year = year;
    }

    getAttributes() {
        var attr = new Array();

        attr.push(this.title);
        attr.push(this.artist);
        attr.push(this.country);
        attr.push(this.company);
        attr.push(this.price);
        attr.push(this.year);

        return attr;
    }
}

var req = new XMLHttpRequest();

var cdList = new Array();


const button = document.querySelector("#action");

button.addEventListener("click", e => {

    if (document.querySelector("#tabla") != null) {
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
    var xml = req.responseXML;
    var titulos = xml.getElementsByTagName("CD");

    for (var i = 0; i < titulos.length; i++) {
        var titulo = xml.getElementsByTagName("CD")[i].childNodes[1].textContent;
        var artista = xml.getElementsByTagName("CD")[i].childNodes[3].textContent;
        var country = xml.getElementsByTagName("CD")[i].childNodes[5].textContent;
        var company = xml.getElementsByTagName("CD")[i].childNodes[7].textContent;
        var price = xml.getElementsByTagName("CD")[i].childNodes[9].textContent;
        var year = xml.getElementsByTagName("CD")[i].childNodes[11].textContent;

        var cd = new CD(titulo, artista, country, company, price, year);
        cdList.push(cd);
    }

    var div = document.createElement("div");
    div.setAttribute("id", "tablaAG");
    div.classList.add("ag-theme-alpine");

    const columnDefs = [
        { field: "title" },
        { field: "artist" },
        { field: "country" },
        { field: "company" },
        { field: "price" },
        { field: "year" }
    ];

    const gridOptions = {
        defaultColDef: {
            sortable: true,
            filter: true,
            resizable: true,
        },
        pagination: true,
        columnDefs: columnDefs,
        rowData: cdList
    }
    const eGridDiv = document.querySelector("#tablaAG");

    new agGrid.Grid(eGridDiv, gridOptions);
}