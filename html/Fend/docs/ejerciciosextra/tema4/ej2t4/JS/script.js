// Ejercicio 1
alert("Ejercicio 1: Mostrar informacion del document");

var cadena="Titulo del Documento: "+document.title+"\nUltima Fecha de Modificacion: "+document.lastModified+"\nDominio: "+document.domain+"\nURL Completa: "+document.URL;
alert(cadena);

//Ejercicio 2
alert("Ejercicio 2: Mostrar informacion de atributos");

var x= document.getElementsByTagName("form");
console.log("Hay "+x.length+" formularios en el documento HTML ");
for(var i=0; i<x.length; i++){
    console.log("Hay "+x[i].elements.length+" elementos en el formulario "+(i+1));
    console.log(x[i]);
}

x=document.getElementsByTagName("img");
console.log("Hay "+x.length+" imagenes en el documento HTML ");
for( i=0; i<x.length; i++){
    console.log("Atributo src de la imagen "+(i+1)+": "  + x[i].getAttribute("src"));
    console.log("Atributo alt de la imagen "+(i+1)+": "  + x[i].getAttribute("alt"));
    console.log("Atributo title de la imagen "+(i+1)+": "+ x[i].getAttribute("title"));
}

x=document.getElementsByTagName("a");
console.log("Hay "+x.length+" enlaces en el documento HTML ");
for( i=0; i<x.length; i++){
    console.log("Atributo href del enlace "+(i+1)+": "  + x[i].getAttribute("src"));
}

x=document.getElementsByTagName("p");
console.log("Hay "+x.length+" enlaces en el documento HTML ");
for( i=0; i<x.length; i++){
    console.log("Texto del parrafo "+(i+1)+": "  + x[i].textContent);
}

x=document.getElementById('uno');
console.log(x);

x=document.getElementsByClassName("verde");
console.log("Hay "+x.length+" enlaces en el documento HTML con la clase verde");
for( i=0; i<x.length; i++){
    console.log(x[i]);
}
