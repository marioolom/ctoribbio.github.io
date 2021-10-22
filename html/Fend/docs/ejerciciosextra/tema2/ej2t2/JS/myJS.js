var arrayDepartamentos = ["Recursos Humanos", "Informática", "Administración"];
var arrayRangoSalarios= ["800-1350", "1351-1999", "2000-2750", ">2750"];
var arrayTrabajadores = [
    ["Lucia", 23, "Valladolid", arrayDepartamentos[2], arrayRangoSalarios[0]],
    ["María", 28, "Salamanca", arrayDepartamentos[0], arrayRangoSalarios[1]],
    ["Alberto", 41, "Barcelona", arrayDepartamentos[2], arrayRangoSalarios[2]],
    ["Lucas", 32, "Madrid", arrayDepartamentos[0], arrayRangoSalarios[2]],
    ["Berta", 19, "Alicante", arrayDepartamentos[1], arrayRangoSalarios[0]],
    ["Roberto", 58, "Toledo", arrayDepartamentos[1], arrayRangoSalarios[2]],
    ["José Luis", 44, "Valladolid", arrayDepartamentos[2], arrayRangoSalarios[2]],
    ["Mariano", 26, "Zamora", arrayDepartamentos[1], arrayRangoSalarios[1]]
];
var arrayOrdenado=arrayTrabajadores.sort();
var lista="Array Ordenado por Nombre\n";
for(var i=0;i<arrayOrdenado.length;i++){
    lista=lista+arrayOrdenado[i]+"\n";
}
alert(lista);
arrayOrdenado=arrayTrabajadores.sort(function(a,b){
    return a[1]-b[1];
});
lista="Array Ordenado por Edad de menor a mayor\n";
for(var i=0;i<arrayOrdenado.length;i++){
    lista=lista+arrayOrdenado[i]+"\n";
}
alert(lista);
arrayOrdenado=arrayTrabajadores.sort(function(a,b){
    return a[2].localeCompare(b[2]);
});
lista="Array Ordenado por ciudad alfabeticamente\n";
for(var i=0;i<arrayOrdenado.length;i++){
    lista=lista+arrayOrdenado[i]+"\n";
}
alert(lista);