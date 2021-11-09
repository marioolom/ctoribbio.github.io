var editorial = new Array();

class Libro {
    constructor(isbn, titulo, autor, numPag, tematica, tapa, numEdicion, comercial) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPag = numPag;
        this.tematica = tematica;
        this.tapa = tapa;
        this.numEdicion = numEdicion;
        this.comercial = comercial;
    }
    getIsbn() { return this.isbn };
    getTitulo() { return this.titulo; }
    getAutor() { return this.autor; }
    getNumPag() { return this.numPag; }
    getTapa() { return this.tapa; }
    getNumEdicion() { return this.numEdicion; }
    getTematica() { return this.tematica; }
    getComercial() { return this.comercial; }

    setIsbn(isbn) { this.isbn = isbn; }

    setTematica(tematica) { this.tematica = tematica };
    setTitulo(titulo) { this.titulo = titulo };
    setAutor(autor) { this.autor = autor };
    setNumPag(numPag) { this.numPag = numPag };
    setTapa(tapa) { this.tapa = tapa };
    setNumEdicion(numEdicion) { this.numEdicion = numEdicion };
    setTematica(tematica) { this.tematica = tematica };
    setComercial(comercial) { this.comercial = comercial };

    translateTapa(tapa){
        if(tapa==1){
            return "dura";
        }else{
            return "blanda";
        }
    }
    toString() {
        return "ISBN: "+this.isbn + ", Titulo: " + this.titulo + ", Autor: " + this.autor + ", Numero de paginas: " + this.numPag + ", Tapa " + this.translateTapa(this.tapa) + ", Edicion numero " + this.numEdicion + ", Tematica: " + this.tematica + ", Comercial: " + this.comercial;
    }
}


//Funcion para añadir libros
function añadirLibro(array) {
    var isbn = parseInt(prompt("Introduce el ISBN del libro..."));
    while (isNaN(isbn)) {;
        isbn = parseInt(prompt("Dato Incorrecto \nIntroduce el ISBN del libro..."));
    }
    var titulo = prompt("Introduce un titulo de libro");
    var autor = prompt("Introduce el auto del libro...");
    var numPag = parseInt(prompt("Introduce el numero de paginas del libro..."));
    while (isNaN(numPag)) {
        numPag = parseInt(prompt("Dato Incorrecto\nIntroduce el numero de paginas del libro..."));
    }
    var tematica = prompt("Introduce la tematica del libro...\nInformatica,Biología,Artes Plasticas,Legislacion\nSIN TILDES!!!");
    while (tematica.toLowerCase() != "informatica" && tematica.toLowerCase() != "biologia" && tematica.toLowerCase() != "artes plásticas" && tematica.toLowerCase() != "legislacion") {
        tematica = prompt("Dato Incorrecto\nIntroduce la tematica del libro...\nInformatica,Biología,Artes Plasticas,Legislacion\nSIN TILDES!!!");
    }
    var tapa = prompt("Introduce el formato fisico del libro\n 1.- Tapa Dura\n 2.- Tapa Blanda")
    while (isNaN(tapa) || (tapa != 1 && tapa != 2)) {
        tapa = prompt("Dato Incorrecto \nIntroduce el formato fisico del libro\n 1.- Tapa Dura\n 2.- Tapa Blanda");
    }
    var comercial = prompt("Introduce el comercial del libro...");
    var numEdicion = prompt("Introduce el numero de edicion del libro...");
    while (isNaN(numEdicion)) {
        numEdicion = prompt("Dato Incorrecto \nIntroduce el numero de edicion del libro...");
    }

    var libro = new Libro(isbn, titulo, autor, numPag, tematica.toLowerCase(), tapa, numEdicion, comercial.toLowerCase());
    array.push(libro);
}

function borrarLibro(array) {
    var opcion = parseInt(prompt("Bienvenido al menu de borrado...\nIntroduzca como buscar el libro para continuar...\n1.-ISBN\n2.-Titulo\n3.-Autor"));
    switch (opcion) {
        case 1:
            var isbn = parseInt(prompt("Introduce el ISBN del libro..."));
            var bandera = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].getIsbn() == isbn) {
                    bandera = true;
                    var borrar = confirm("Libro encontrado: " + array[i].getTitulo() + " del autor " + array[i].getAutor() + " ,estás seguro de la eliminacion?");
                    if (borrar == true) {
                        array.splice(i, 1);
                    } else {
                        alert("Borrado Cancelado...");
                    }
                }
            }
            if (bandera == false) {
                alert("Ese ISBN no ha sido encontrado...");
            }
            break;

        case 2:
            var titulo = prompt("Introduce el ISBN del libro...");
            var bandera = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].getTitulo() == titulo) {
                    bandera = true;
                    var borrar = confirm("Libro encontrado: " + array[i].getTitulo() + " de " + array[i].getAutor() + " ,estás seguro de la eliminacion?");
                    if (borrar == true) {
                        array.splice(i, 1);
                    } else {
                        alert("Borrado Cancelado...")
                    }
                }
            }
            if (bandera == false) {
                alert("Ese titulo no ha sido encontrado...");
            }
            break;
        case 3:
            var autor = prompt("Introduce el ISBN del libro...");
            var bandera = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].getAutor() == autor) {
                    bandera = true;
                    var borrar = confirm("Libro encontrado: " + array[i].getTitulo() + " de " + array[i].getAutor() + " ,estás seguro de la eliminacion?");
                    if (borrar == true) {
                        array.splice(i, 1);
                    } else {
                        alert("Borrado Cancelado...")
                    }
                }
            }
            if (bandera == false) {
                alert("Ese Autor no ha sido encontrado...");
            }
            break;
    }
}

function modificarLibro(array) {
    var isbn = parseInt(prompt("Introduce el ISBN del libro..."));
    var bandera = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].getIsbn() == isbn) {
            bandera = true;
            var isbn = parseInt(prompt("Introduce el nuevo ISBN del libro...\nIntroduce -1 si no quieres modificarlo"));
            while (isNaN(isbn)) {
                isbn = parseInt(prompt("Dato Incorrecto \nIntroduce el nuevo ISBN del libro...\nIntroduce -1 si no quieres modificarlo"));
            }
            if (isbn != -1) {
                array[i].setIsbn(isbn);
            }
            var titulo = prompt("Introduce el nuevo titulo de libro...\n-1 si no quieres modificarlo");
            if (titulo != -1) {
                array[i].setTitulo(titulo);
            }
            var autor = prompt("Introduce el nuevo autor de libro...\n-1 si no quieres modificarlo");
            if (autor != -1) {
                array[i].setAutor(autor);
            }
            var numPag = parseInt(prompt("Introduce el nuevo numero de paginas del libro...\nIntroduce -1 si no quieres modificarlo"));
            while (isNaN(numPag)) {
                numPag = parseInt(prompt("Dato Incorrecto \nIntroduce el nuevo numero de paginas del libro...\nIntroduce -1 si no quieres modificarlo"));
            }
            if (numPag != -1) {
                array[i].setNumPag(numPag);
            }
            var tematica = prompt("Introduce la nueva tematica del libro...\nIntroduce -1 si no quieres modificarlo\nInformatica,Biología,Artes Plasticas,Legislacion");
            while (tematica != -1 && (tematica.toLowerCase() != "informática" && tematica.toLowerCase() != "informatica") && (tematica.toLowerCase() != "biología" && tematica.toLowerCase() != "biologia") && (tematica.toLowerCase() != "artes plasticas" && tematica.toLowerCase() != "artes plásticas") && (tematica.toLowerCase() != "legislación" && tematica.toLowerCase() != "legislacion")) {
                tematica = prompt("Dato Incorrecto\nIntroduce la nueva tematica del libro...\nIntroduce -1 si no quieres modificarlo\nInformatica,Biología,Artes Plasticas,Legislacion");
            }
            if (tematica != -1) {
                array[i].setTematica(tematica);
            }
            var tapa = prompt("Introduce el nuevo formato fisico del libro...\n 1.- Tapa Dura\n 2.- Tapa Blanda\n-1 si no quieres modificarlo");
            while (isNaN(tapa) || (tapa != 1 && tapa != 2)) {
                tapa = prompt("Dato Incorrecto \nIntroduce el nuevo formato fisico del libro...\n 1.- Tapa Dura\n 2.- Tapa Blanda\n-1 si no quieres modificarlo");
            }
            if (tapa != -1) {
                array[i].setTapa(tapa);
            }
            var comercial = prompt("Introduce el nuevo comercial de libro...\n-1 si no quieres modificarlo");
            if (comercial != -1) {
                array[i].setComercial(comercial);
            }
            var numEdicion = prompt("Introduce el nuevo numero de edicion del libro...\n-1 si no quieres modificarlo");
            while (isNaN(numEdicion)) {
                numEdicion = prompt("Dato Incorrecto \nIntroduce el nuevo numero de edicion del libro...\n-1 si no quieres modificarlo");
            }
            if (comercial != -1) {
                array[i].setNumEdicion(numEdicion);
            }
        }
    }
    if (bandera == false) {
        alert("Ese ISBN no ha sido encontrado...");
    }
}

function contarLibrosTematica(array) {
    var contador = 0;
    var tematica = prompt("Introduce la tematica que quieres contar...\nInformatica,Biología,Artes Plasticas,Legislacion");
    while ((tematica.toLowerCase() != "informática" && tematica.toLowerCase() != "informatica") && (tematica.toLowerCase() != "biología" && tematica.toLowerCase() != "biologia") && (tematica.toLowerCase() != "artes plasticas" && tematica.toLowerCase() != "artes plásticas") && (tematica.toLowerCase() != "legislación" && tematica.toLowerCase() != "legislacion")) {
        tematica = prompt("Dato Incorrecto\nIntroduce la tematica que quieres contar...\nInformatica,Biología,Artes Plasticas,Legislacion");
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i].getTematica() == tematica) {
            contador++;
        }
    }
    alert("Hay " + contador + " libros de la tematica: " + tematica);
}
function verLibros(array) {
    for (var i = 0; i < array.length; i++) {
        alert(array[i].toString());
    }
}

function comercialesTematica(array){
    var comercialesTematica=new Array();
    var tematica= prompt("Introduce la tematica de los comerciales que quieres conocer");
    for (var i = 0; i <array.length; i++){
        if(comercialesTematica.includes(array[i].getComercial())==false && array[i].getTematica()==tematica.toLowerCase()){
            comercialesTematica.push(array[i].getComercial());
        }
    }
    alert("Los comerciales de "+tematica+" son: "+comercialesTematica.join())
}
var bandera = true;

while (bandera != false) {
    var opcion = parseInt(prompt("Introduce la funcion a realizar...\n1.-Introducir libro\n2.-Borrar Libro\n3.-Modificar libro\n4.-Contar libros por tematicas\n5.- Mostrar todos los libros\n6.-Conocer los comerciales de una tematica\n7.-Salir"));
    if (opcion != 1 && opcion != 7 && editorial.length == 0) {
        alert("No puedes acceder a estas opciones sin antes añadir libros");
    } else {
        switch (opcion) {
            case 1:
                añadirLibro(editorial);
                break;
            case 2:
                borrarLibro(editorial);
                break;
            case 3:
                modificarLibro(editorial);
                break;
            case 4:
                contarLibrosTematica(editorial);
                break;
            case 5:
                verLibros(editorial);
                break;
            case 6:
                comercialesTematica(editorial);
                break;
            case 7:
                alert("Fin del programa");
                bandera = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
}
