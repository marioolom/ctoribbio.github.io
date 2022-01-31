var boton = document.getElementsByClassName("listItem");
var entries = document.getElementsByClassName("entry");
var req = new XMLHttpRequest();


function updateContent(id,title) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'entries.xml', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status != 200) {
                console.error("err")
            } 
            else {
                var xml = xhr.responseXML;
                var elements = xml.getElementsByTagName("entry");
                for(var i=0;i<elements.length;i++) {
                    if(elements[i].getElementsByTagName("title")[0].textContent==id){
                        document.getElementById("wiki_text").textContent = elements[i].getElementsByTagName("description")[0].textContent
                        document.getElementById("wiki_title").textContent = title
                    }
                }
            }
        }
    };
    xhr.send();
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
