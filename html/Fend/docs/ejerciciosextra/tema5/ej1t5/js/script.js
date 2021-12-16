ejecutar();
document.querySelector("#apartado5").style.height="20%";
document.querySelector("#apartado5").style.width="20%";
var final;
var tiempo;
var inicio
function ejecutar(){
    
    document.querySelector("#apartado1").addEventListener("click", apartado1);

    document.querySelector("#apartado2").addEventListener("dblclick", apartado2);

    document.querySelector("#apartado3").addEventListener("mouseover", apartado3);

    document.querySelector("#apartado4").addEventListener("mouseover", apartado4b);

    document.querySelector("#apartado4").addEventListener("mouseout", apartado4a);
    document.querySelector("#apartado5").addEventListener("mouseover", () =>{
         inicio = new Date().getTime()
    });

    document.querySelector("#apartado5").addEventListener("mouseout", ()=>{
        final= new Date().getTime();
        tiempo= final-inicio;
        alert("Han pasado "+tiempo+"ms");
    })
    var cells= document.querySelectorAll("td");
    for(var i=0; i<cells.length; i++){
        cells[i].addEventListener("mouseover", apartado6)
    }
    var interval
    document.querySelector("#apartado7").addEventListener("mouseover", ()=>{
        interval=setInterval(generarLetra,333);
     
    })
    
    document.querySelector("#apartado7").addEventListener("mouseout", ()=>{
        clearInterval(interval);
    })
    document.onmousemove  = updateMouse;
}

function updateMouse(){
    var x=window.event.clientX;
    var y=window.event.clientY;

    document.querySelector("#x").textContent = x;
    document.querySelector("#y").textContent = y;
}



function apartado1(){
   this.textContent="PULSADO";
}

function apartado2(){
   var e=document.createElement("p");
   e.textContent="Pulsado";
   this.insertAdjacentElement("afterend",e);
}

function apartado3(){
    this.style.color="red";
}
function apartado4b(){
    this.setAttribute("src","http://images7.memedroid.com/images/UPLOADED622/5d7710d176c70.jpeg")
}
function apartado4a(){
    this.setAttribute("src","https://preview.redd.it/f8a081yna1z41.jpg?auto=webp&s=41ea65eac53c44e22a9fa4c368d727d31ce3c7af")
}

function apartado6(){
    var r = Math.random()/3.92156862745*1000;
    var g = Math.random()/3.92156862745*1000;
    var b = Math.random()/3.92156862745*1000;
    this.style.backgroundColor ="rgb("+r+","+g+","+b+")";
}

function generarLetra(){
    var ascii=document.querySelector("#apartado7").textContent.charCodeAt("0");
    if(ascii==122){
        ascii=96;
        
    }
    console.log(ascii);
    ascii++;
    document.querySelector("#apartado7").textContent= String.fromCharCode(ascii);
    

}