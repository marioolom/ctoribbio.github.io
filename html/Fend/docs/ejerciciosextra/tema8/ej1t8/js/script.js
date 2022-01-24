const button = document.querySelector("#action");

var req = new XMLHttpRequest();

button.addEventListener("click", e=>{
    req.send();

    req.onload = function() {
        if(req.status === 200 && req.readyState == 4){
            document.querySelector("#lipsum").innerText = this.responseText;
        }else{
            document.querySelector("#lipsum").innerText = "Error: "+req.status;
        }
        
    }
})

req.open("GET","lipsum.txt",true);
    