function arrayShuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
}

function desvelarTablero() {
    for (var i = 0; i < document.querySelectorAll(".carta").length; i++) {
        document.getElementById(i).setAttribute("src", "assets/cards/" + cartas[i]);
    }
}

function generarTablero(x,y) {
    for (var i = 0; i < x; i++) {
        var fila = document.createElement("div");
        fila.setAttribute("class", "fila");
        for (var j = 0; j < y; j++) {
            var carta = document.createElement("div");
            carta.setAttribute("class", "carta");
            fila.appendChild(carta);
        }
        document.querySelector("#tablero").appendChild(fila);
    }

    for (var l = 0; l < ((x*y)/2) ; l++) {

        cartas.push(opciones[l]);
        cartas.push(opciones[l]);
    }
    arrayShuffle(cartas);

    rellenarTablero();
}

function revelar(i) {
    if (abiertas == 0) {
        abiertas++;
        document.getElementById(i).setAttribute("src", "assets/cards/" + cartas[i]);
        guess = i;
    } else {
        if (i != guess) {
            document.getElementById(i).setAttribute("src", "assets/cards/" + cartas[i]);
            if (cartas[i] == cartas[guess]) {
                abiertas = 0;

            } else {
                document.getElementById(i).setAttribute("src", "assets/cards/reverso.png");
                document.getElementById(guess).setAttribute("src", "assets/cards/reverso.png");
                guess = null;
                abiertas = 0;
            }
        } else {
            document.getElementById(i).setAttribute("src", "assets/cards/reverso.png");
            abiertas = 0;
        }

    }
}
function rellenarTablero(){
    for (var i = 0; i < document.querySelectorAll(".carta").length; i++) {
        var img = document.createElement("img");
        img.classList.add("imagen");
        img.setAttribute("id", i)
        img.setAttribute("src", "assets/cards/reverso.png");
        document.querySelectorAll(".carta")[i].appendChild(img);
    
        document.querySelectorAll(".carta")[i].addEventListener("click", () => {
            revelar(window.event.target.getAttribute("id"));
        })
    }
}


var cartas = new Array();
var opciones = new Array();
var abiertas = 0;

opciones = ["audi.png", "bentley.png", "bmw.png", "corvette.png", "mclaren.png", "mercedes.png", "nissan.png", "porsche.png"];

document.querySelector("#desvelar").addEventListener("click", desvelarTablero);
document.querySelector("#reiniciar").addEventListener("click", () => { location.reload() });
document.querySelector("#jugar").addEventListener("click",()=>{
    var x = document.querySelector("#valorX").value;
    var y = document.querySelector("#valorY").value;
    generarTablero(x,y);
    document.querySelector("#game").style.display="block";
    document.querySelector("#menu").style.display="none";
})
arrayShuffle(cartas);


var guess;


