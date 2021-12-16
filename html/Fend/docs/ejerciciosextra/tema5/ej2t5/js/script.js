
document.body.addEventListener('keydown',(e)=>{
    document.querySelector("#inputkdown").value += e.key;
    infoEvento(e);
})
document.body.addEventListener('keypress',(e)=>{
    document.querySelector("#inputkpress").value += e.key;
    infoEvento(e);
})
document.body.addEventListener('keyup',(e)=>{
    document.querySelector("#inputkup").value += e.key;
    console.log(e);
    infoEvento(e);
})

function infoEvento(e) {
   var div= document.createElement('div')
   div.setAttribute("style", "width:30%;border:2px solid black;")
   var p =document.createElement("p");
   p.textContent = "Evento: "+ e.type;
   div.appendChild(p);
    var keycode= document.createElement("p");
    keycode.textContent = "Keycode: " + e.keyCode;
    div.appendChild(keycode);
    var charcode= document.createElement("p");
    charcode.textContent = "Charcode: " + e.charCode;
    div.appendChild(charcode);
    document.querySelector("#parte2").insertAdjacentElement("beforeend", div)
}
