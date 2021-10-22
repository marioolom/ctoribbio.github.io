// CESAR TORIBIO CASTRO.- DESARROLLO WEB EN LADO CLIENTE.- PRACTICA 04- SWITCH

alert("Ejercicio 1.- Dia de la semana");
var dia=parseInt(prompt("Introduce un dia de la semana (1-7)"))
switch(dia){
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        alert("Error.");
        break;
}

alert("Ejercicio 2.- Reconocer caracteres");
var caracter=prompt("Introduce un carácter");
switch(caracter.toLowerCase()){
    case 'a':
        alert("Has introducido una 'a'");
        break;
    case 'e':
        alert("Has introducido una 'e'");
        break;
    case 'i':
        alert("Has introducido una 'i'");
        break;
    case 'o':
        alert("Has introducido una 'o'");
        break;
    case 'u':
        alert("Has introducido una 'u'");
        break;
    default:
        alert("Has introducido un caracter no reconocido");
        break;
}

alert("Ejercicio 3.-Controlar edad");
var edad=parseInt(prompt("Introduce tu edad"));
switch(true){
    case edad<13&&edad>0:
        alert("Educación Primaria");
        break;
    case edad>=13&&edad<18:
        alert("Educación Secundaria");
        break;
    case edad>=18&&edad<65:
        alert("Edad de Vida Laboral");
        break;
    case edad>65:
        alert("Jubilación");
        break;
    default:
        alert("Error");
        break;
}

alert("Ejercicio 4.- Tienda Mascotas");
var producto=parseInt(prompt("Introduce el codigo del producto que quieres comprar.- 1.-Movil(220€) 2.-Teclado(90€) 3.-USB(40€)"));
switch(producto){
    case 1:
        alert("Movil añadido al carrito.- Total: 220€");
        var descuento=prompt("Introduce un codigo de descuento si conoces alguno");
        switch(descuento.toUpperCase()){
            case 'HOLA1':
            alert("El nuevo precio es: "+(220*0.85));
            break;
            case 'BIENVENIDO1':
            alert("El nuevo precio es: "+(220*0.88));
            break;
            case 'AFILIADO':
            alert("El nuevo precio es: "+(220*0.80));
            break;
            default:
            alert("El precio sin descuento es: 220");
            break;
}
        break;
    case 2:
        alert("Teclado añadido al carrito.- Total: 90€");
        var descuento=prompt("Introduce un codigo de descuento si conoces alguno");
        switch(descuento.toUpperCase()){
            case 'HOLA1':
            alert("El nuevo precio es: "+(90*0.85));
            break;
            case 'BIENVENIDO1':
            alert("El nuevo precio es: "+(90*0.88));
            break;
            case 'AFILIADO':
            alert("El nuevo precio es: "+(90*0.80));
            break;
            default:
            alert("El precio sin descuento es: 90");
            break;
}
        break;
    case 3:
        alert("USB añadido al carrito.- Total: 40€");
        var descuento=prompt("Introduce un codigo de descuento si conoces alguno");
        switch(descuento.toUpperCase()){
            case 'HOLA1':
            alert("El nuevo precio es: "+(40*0.85));
            break;
            case 'BIENVENIDO1':
            alert("El nuevo precio es: "+(40*0.88));
            break;
            case 'AFILIADO':
            alert("El nuevo precio es: "+(40*0.80));
            break;
            default:
            alert("El precio sin descuento es: "+(40*0.85));
            break;
}
        break;
    default:
        alert("Producto no existente");
        break;
}
