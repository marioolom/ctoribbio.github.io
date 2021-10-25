alert("Ejercicio 1");

var cadena1=prompt("Introduce la cadena numero 1");
var cadena2=prompt("Introduce la cadena numero 2");

if(cadena1.length!=cadena2.length){
    alert("Error, las cadenas son de distinta longitud");
}else{
var equal=true;
for(var i=0;i<cadena1.length;i++){
    if(cadena1.charAt(i)!=cadena2.charAt(i)){
        equal=false;
        break;
    }
}
if(equal==true){
    alert("Las cadenas son iguales");
}else{
    alert("Las cadenas son distintas");
}
}

alert("Ejercicio 2");
x=0;
while(x<5){
    var cadena=prompt("Introduce una frase con al menos 5 palabras separadas por espacip");
    cadena=cadena.trim();
    var x= cadena.split(' ').length;
}
var tmp=new Array();
tmp.push(cadena.charAt(0));
for(var i=0;i<cadena.length;i++){
    if(cadena.charAt(i)==' '){
        tmp.push(cadena.charAt((i+1)));
    }
}
var boolean=true;
for(var i=0;i<tmp.length;i++){
    for(var j=0;j<tmp.length;j++){
        if(tmp[i]!=tmp[j]){
            boolean=false;
            break;
        }
    }
}
if(boolean==true){
    alert("OK");
}else{
    alert(tmp.join());
}

