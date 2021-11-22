function ejercicio1(){
    var element= document.querySelector("#title");
    element.classList.add("rojo","centrado");
}
function ejercicio2(){
    var elements=document.getElementsByTagName("label");
    for(var i=0;i<elements.length;i++){
        elements[i].classList.add("negrita","subrayado");
    }
}
function ejercicio3() {
    var elements = document.getElementsByTagName("body");
    elements[0].classList.add("background-teal");
}
function ejercicio4(){
    var elements=document.getElementsByTagName("img");
    for(var i=0;i<elements.length;i++){
        elements[i].classList.add("border-apply");
    }
}
function ejercicio5(){
    var elements=document.querySelector("#container2").getElementsByTagName("img");
    elements[0].classList.add("center");
    elements[(elements.length-1)].classList.add("center");
}
function ejercicio6(){
    var elements=document.getElementsByTagName("button");
    for(var i=0;i<elements.length;i++){
        elements[i].classList.add("background-orange","cambio-fuente","border-apply");
    }
}
function ejercicio7(){
    var elements=document.getElementsByTagName("form");
    for(var i=0;i<elements.length;i++){
        elements[i].getElementsByTagName("button")[0].classList.add("background-teal","border-apply","blanco");
        elements[i].getElementsByTagName("button")[0].classList.remove("cambio-fuente","background-orange");
    }
}
function ejercicio8() {
    var elements = document.getElementsByTagName("p");
    elements[0].classList.add("derecha","cambio-fuente","texto18");
}
function ejercicio9() {
    var elements = document.getElementsByTagName("p");
    elements[1].classList.add("texto18","rojo");
}
function ejercicio10(){
    var element= document.querySelector("#select");
    element.classList.add("background-lightblue","border-orange");
}
function ejercicio11(){
    var elements=document.getElementsByTagName("input");
    for(var i=0;i<elements.length;i++){
        elements[i].classList.add("background-teal","border-apply","blanco");
    }
}
function ejercicio12(){
    var elements=document.getElementsByTagName("img");
    for(var i=0;i<elements.length;i++){
        elements[i].classList.toggle("image2");
    }
}
function ejercicio13(){
    var elements=document.getElementsByTagName("h2");
    for(var i=0;i<elements.length;i++){
        elements[i].classList.add("morado","texto20","subrayado");
    }
}
function ejercicio14(){
    var element=document.querySelector("#container2");
    element.classList.remove("menor");
    element.classList.add("ancho");
}
function ejercicio15(){
    var element=document.querySelector("#container1");
    element.classList.add("ancho");
}
function ejercicio16(){
    var elements=document.getElementsByClassName("container");
    for(var i=0;i<elements.length;i++){
        console.log("El elemento "+i+" contiene la clase ancho?: "+elements[i].classList.contains("ancho"));
        console.log("El elemento "+i+" contiene la clase menor?: "+elements[i].classList.contains("menor"));
    }
}