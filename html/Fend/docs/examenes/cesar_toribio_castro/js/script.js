//Arrays para almacenar datos, tanto de stock como el carrito
var carrito = new Array();
var stock = new Array();
//Clase fruta para trabajar y sus metodos necesarios
class Fruta {
    constructor(nombre, cantidad, precio, ruta, tipo) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.ruta = ruta;
        this.tipo = tipo;
    }
    getTipo() { return this.tipo; }
    getNombre() { return this.nombre; };
    getPrecio() { return this.precio; };
    getRuta() { return this.ruta; };
    getCantidad() { return this.cantidad; };

    setCantidad(cantidad) { this.cantidad = cantidad; };
}

//Funcion que actualiza el contenido del footer en caliente
function actStockFooter(){
    var total=0;
    for(var i = 0; i < stock.length; i++){
        total=total+parseInt(stock[i].getCantidad());
    }
    document.querySelector("#totalKg").textContent = total;
    return false;
}

//Funcion que sirve para crear stock
function crearStock() {
    var bandera = true;
    while (bandera) {
        var nombre = prompt("Introduce el nombre de la fruta");
        var cantidad = prompt("Introduce la cantidad de esta fruta de la que dispones");
        while (isNaN(cantidad)) {
            cantidad = prompt("Dato Incorrecto\nIntroduce la cantidad de esta fruta de la que dispones");
        }
        var precio = prompt("Introduce el precio/kilo de esta fruta");
        while (isNaN(precio)) {
            precio = prompt("Dato Incorrecto\nIntroduce el precio/kilo de esta fruta");
        }
        var ruta = prompt("Introduce una URL que contenga una imagen de la fruta");
        var tipo = prompt("Introduce el tipo de la fruta\n1.-Ácida\n2.-Semiacida\n3.-Dulces\n4.-Neutras");
        while (isNaN(tipo) || (tipo != 1 && tipo != 2 && tipo != 3 && tipo != 4)) {
            tipo = prompt("Dato Incorrecto\nIntroduce el tipo de la fruta\n1.-Ácida\n2.-Semiacida\n3.-Dulces\n4.-Neutras");
        }
        var fruta = new Fruta(nombre, cantidad, precio, ruta, tipo);
        stock.push(fruta);
        bandera = confirm("Quieres introducir mas stock?");
    }
    actualizarStock(1);
    actStockFooter();
}

//Funcion para añadir elementos al carrito
function anadirCarrito(i) {
    //Borramos el boton si existiese, para evitar que se duplique al añadir mas de un articulo al carrito
    if(document.querySelector("#fin")!=null){
        document.querySelector("#fin").remove();
    }
    //Borramos el parrafo cuando se añaden nuevos elementos 
    if(document.querySelector("aside p")!=null){
        document.querySelector("aside p").remove();
    }


    var producto = stock[i];
    var bandera = false;

    //Funcionamiento del carrito
    //En los indices pares del array se almacenan los productos y en los impares el numero de su indice anterior que han sido almacenados
    //Si un producto aun no ha sido añadido al carrito, se le añade al carrito, y se pone un 1 en el siguiente elemento del array
    // Si por el contrario ya existia, se suma uno al siguiente indice despues del producto seleccionado, para saber cuantas veces se ha aadido
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i] === producto) {
            carrito[(i + 1)]++;
            bandera = true;
            break;
        }
    }
    if (bandera == false) {
        carrito.push(producto);
        carrito.push("1");
    }
    //Por cada elemento añadido al carrito se borra entero 
    var borrar = document.querySelectorAll(".productoFilaCarrito");
    for (var i = 0; i < borrar.length; i++) {
        borrar[i].remove();
    }

    //Se crea entero de nuevo, para tener en cuenta el numero de vecesque se ha añadido un elemento al carrito
    // se itera de 2 en 2 para evitar que se entre en el elemento que controla el numero de esa fruta que hay 
    for (j = 0; j < carrito.length; j+=2) {
        var div = document.createElement("div");
            div.className = "productoFilaCarrito";
            var span = document.createElement("span");
            span.textContent=carrito[j].getNombre()+" - Cantidad: "+carrito[j+1];
            div.appendChild(span);
            document.querySelector(".precioTotal").insertAdjacentElement("beforebegin", div);
    }
    //Añadimos el total y lo almacenamos 
    var total=0;
    for(var i=0; i<carrito.length; i+=2){
        total=total+(parseInt(carrito[i+1])*carrito[i].getPrecio());
    }
    //Creamos el display para el precio total 
    var p=document.createElement("p");
    p.textContent="Total= "+total+"€ ";
    document.querySelector(".precioTotal").appendChild(p);
    //Creamos el boton 
    var boton=document.createElement("button");
    boton.textContent="Procesar pedido";
    boton.setAttribute("onclick","finPedido()");
    boton.setAttribute("id", "fin")
    document.querySelector(".precioTotal").insertAdjacentElement("afterend", boton);
}

//Funcion para actualizar el stock de un tipo dado, se reutiliza esta funcion para multiples parte de la
//Aplicacion p.ej para los botones de categoria
function actualizarStock(tipo) {
    var bandera=false;
    var borrar = document.querySelectorAll(".productoFilaStock");
    for (var i = 0; i < borrar.length; i++) {
        borrar[i].remove();
    }

    //sigue el mismo razonamiento que al añadir al carrito, misma logica, pero con mas elementos
    for (i = 0; i < stock.length; i++) {
        if (stock[i].getTipo() == tipo) {
            var div = document.createElement("div");
            div.className = "productoFilaStock";
            var span = document.createElement("span");
            span.setAttribute("id", stock[i].getNombre());
            span.textContent = stock[i].getNombre() + " - Precio: " + stock[i].getPrecio() + "€/Kg - Disponible: " + stock[i].getCantidad() + "Kg";
            var img = document.createElement("img");
            img.setAttribute("onclick", "anadirCarrito(" + i + ")");
            img.setAttribute("src", stock[i].getRuta());
            img.setAttribute("alt", stock[i].getNombre());
            img.setAttribute("height", "50px");
            div.appendChild(span);
            div.appendChild(img);
            document.querySelector("#productos").insertAdjacentElement("beforeend", div);
            bandera=true;
        }
    }
    if(!bandera){
        if(document.querySelector("#productos p")==null){
            var p= document.createElement("p");
            p.textContent="No hay productos de esta categoria";
            document.querySelector("#productos").appendChild(p);
        }
        
    }else{
        if(document.querySelector("#productos p")!=null){
            document.querySelector("#productos p").remove();
        }
    }

}

//Tramita el fin de lpedido borrando lso elementos del aside y vaciando el array carrito, además, reinicia el texto de
//Que no hay nada añadido aun al carrito
function finPedido(){
    for (var i = 0; i < stock.length; i++) {
        for(var j=0;j<carrito.length;j+=2) {
            if(stock[i]===carrito[j]) {
                stock[i].setCantidad(stock[i].getCantidad()-parseInt(carrito[(j+1)]));
                carrito.splice(i,2);
            }
        }
    }
    document.querySelector("#fin").remove();
    document.querySelector("aside p").textContent=" ";
    var productosCarrito=document.querySelectorAll(".productoFilaCarrito");
    for(var i=0; i<productosCarrito.length; i++){
        productosCarrito[i].remove();
    }
   var p= document.createElement("p");
   p.textContent="No hay productos en el carrito";
    document.querySelector("aside h3").insertAdjacentElement("afterend",p);
    actStockFooter();

}
//añadimos un atributo onclick a los bototnes para que llamen a la funcion actualizarstock con el tipo determinado de cada una de ella s
 
var botonesTipo=document.querySelectorAll("#categorias button");
for(var i=0; i<botonesTipo.length; i++){
    botonesTipo[i].setAttribute("onclick", "actualizarStock("+(i+1)+");");
}

//Añadimos un atributo Onclick al enlace para llamar a la funcion
var a = document.getElementById("insertarStock");
a.setAttribute("onclick", "crearStock();");