//Objeto Vehiculo y Comprador
var concesionario = new Array();
function Vehiculo(tipo, marca, estado) {
    this.tipo = tipo;
    this.marca = marca;
    this.estado = estado;
    this.toString = function () {
        var cadena = this.tipo + " " + this.marca + " " + this.estado + " " + this.comprador.dni + " " + this.comprador.nombre + " " + this.comprador.apellidos;
        return cadena;
    }
    this.comprador = function Comprador(dni, nombre, apellidos) {
        this.comprador.dni = dni;
        this.comprador.nombre = nombre;
        this.comprador.apellidos = apellidos;
    }
    this.getDni = function () {
        return this.comprador.dni;
    }
    this.getMarca = function () {
        return this.marca;
    }
    this.getEstado = function () {
        return this.estado;
    }
}
function contarVehiculos(array) {
    return array.length;
}
function introducirVehiculo(num) {
    var tipo = parseInt(prompt("Introduce el tipo del vehiculo numero " + num + "\n1: Turismo\n2:Furgoneta"));
    while (tipo != 1 && tipo != 2) {
        tipo = parseInt(prompt("Dato Invalido\nIntroduce el tipo del vehiculo numero " + num + "\n1: Turismo\n2:Furgoneta"));
    }
    var marca = prompt("Introduce la marca de el vehiculo numero " + num).toLowerCase();
    var estado = prompt("Introduce el estado del vehiculo numero " + num + ":\n 1.-Vendido\n2.-Reservado\n3.-En stock");
    while (estado != 1 && estado != 2 && estado != 3) {
        estado = prompt("Dato Invalido\nIntroduce el estado del vehiculo numero " + num + ":\n 1.-Vendido\n2.-Reservado\n3.-En stock");
    }
    var vehiculo = new Vehiculo(tipo, marca, estado);

    if (estado == 1 || estado == 2) {
        var dniComprador = prompt("Introduce el dni del comprador\n (Este dato no esta validado por que no es el tema de esta practica)");
        var nombreComprador = prompt("Introduce el nombre del comprador (Este dato no esta validado por que no es el tema de esta practica)");
        var apellidosComprador = prompt("Introduce los apellidos del comprador (Este dato no esta validado por que no es el tema de esta practica)");
        var vehiculo = new Vehiculo(tipo, marca, estado);
        vehiculo.comprador(dniComprador, nombreComprador, apellidosComprador);
    } else {
        var vehiculo = new Vehiculo(tipo, marca, estado);
    }
    concesionario.push(vehiculo);
}

function datosVehiculosXCompradores(array) {
    var contador=1;
    var cadena = "Hay " + contarVehiculos(array) + " Vehiculos en el concesionario\n\t\tCOMPRADORES\n";
    for (var i = 0; i < array.length; i++) {
        if(concesionario[i].getEstado()!=3){
            cadena = cadena + "DNI del Comprador " + (contador) + ": " + concesionario[i].getDni() + "\n";
            contador++;
        }
    }
    return cadena;
}

function numeroVehiculosMarca(marca, array) {
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].getMarca() == marca.toLowerCase() && array[i].getEstado() == 3)
            contador++;
    }
    return contador;
}

//FIN DE FUNCIONES INICIO DE PROGRAMA
var salir =false;
while(salir==false){
    var opcion=prompt("Introduce la opcion que quieres trabajar\n 0:Introducir Vehiculos\n1:Contar Vehiculos\n 2: Contar Vehiculos y conocer los DNIs de los compradores\n 3: Conocer vehiculos en stock de una marca\n 4:Salir");
    if(opcion!=0&&concesionario.length==0){
        alert("No puedes acceder a estas opciones sin antes introducir vehiculos");
    }else{
        switch(parseInt(opcion)){
            case 0:
                var numero = parseInt(prompt("Introduce el numero de vehiculos que quieres introducir"));
                for (var i = 1; i <= numero; i++) {
                    introducirVehiculo((i));
                }
                break;
            case 1:
                alert("Hay " + contarVehiculos(concesionario) + " vehiculos en el concesionario");
                break;
            case 2:
                alert(datosVehiculosXCompradores(concesionario));
                break;
            case 3:
                var marca = prompt("De que marca quieres conocer el numero de vehiculos?");
                alert("Hay " + numeroVehiculosMarca(marca, concesionario) + " vehiculos de " + marca + " en el concesionario en stock");
                break;
            case 4:
                salir=true;
                break;
            default:
                alert("Opcion Invalida");
                break;
        }
    }
}








