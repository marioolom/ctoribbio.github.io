var boton = document.getElementsByClassName("listItem");
var entries = document.getElementsByClassName("entry");
var json;
window.onload = function() {
    var req = new XMLHttpRequest();
    req.open("GET", "json/entries.json", true);

    req.send();

    req.onload = function () {
        if (req.status === 200 && req.readyState == 4) {
            json = JSON.parse(req.responseText);
        } else {
            console.error("Error Linea 14")
        }

    }
}







function updateContent(id,title) {
    console.log(Object.values(json[0]));
                for(var i=0;i<json.length;i++) {
                    if(Object.values(json[i])[0]==id){
                        document.getElementById("wiki_text").textContent = Object.values(json[i])[1];
                        document.getElementById("wiki_title").textContent = title
                    }
                }
            }

for(var i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click",(e) => {
        e.target.childNodes[1].classList.toggle("shown");
    })
}

for(var i = 0; i < entries.length; i++) {
    entries[i].addEventListener("click",(e) => {
        e.stopPropagation();
        updateContent(e.target.id,e.target.innerText);

        
    })
}
