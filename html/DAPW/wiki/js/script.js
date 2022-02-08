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
                for(var i=0;i<json.length;i++) {
                    if(json[i].title == id){
                        document.getElementById("wiki_text").innerHTML = json[i].description;
                        document.getElementById("wiki_title").textContent = title
                    }else{
                        console.log(id);
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
