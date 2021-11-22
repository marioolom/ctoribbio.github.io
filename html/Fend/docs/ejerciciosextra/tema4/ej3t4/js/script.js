function parte2(){
    document.querySelector("#cabecera").textContent ="He cambiado jaja";
}
function parte3(){
    document.querySelector("#cabecera").remove();
    element=document.createElement("h2");
    element.textContent="Definitivos";
    header.appendChild(element);
}

// Retrieve main body 

var body=document.getElementsByTagName("body");

//Create a Header
var header = document.createElement("header");
//Insert Header into the body
body[0].insertAdjacentElement("afterbegin",header);
//Create element H1 & assign the text
var element=document.createElement("h1");
element.setAttribute("id", "cabecera")
element.textContent="Cabecera";
//Insert h1 into the header
header.insertAdjacentElement("afterbegin", element);
//Create a Section
element=document.createElement("section");
//Set attribute for easier retrieval
element.setAttribute("id", "section");
//Insert the section after the end of the header thus at same level
header.insertAdjacentElement("afterend", element);
//Creating a temporary variable for father element assignation

var temp=element; //temp is section

//Creation of an article
element=document.createElement("article");
//Inserting the article
temp.insertAdjacentElement("afterbegin", element);
//Same Assignation
temp=element; //temp is article

//Creation of h2 & assign of text
element=document.createElement("h2");
element.textContent="Titulo de Seccion";
//Inserting 
temp.insertAdjacentElement("afterbegin", element);
//Creation of p
element=document.createElement("p");
element.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing";
//Inserting the p before the end 
temp.insertAdjacentElement("beforeend", element);
//creating the aside 
element=document.createElement("aside"); //element is aside
//setting atribute to the aside for easier retrievaal
element.setAttribute("id", "aside");
temp=document.querySelector("#section"); //temp is section
//inserting aside after the end of section thus at the same level
temp.insertAdjacentElement("afterend", element);
temp=element; //temp es aside
//same piece of code
element=document.createElement("h3");
element.textContent="Titulo de aside";
temp.insertAdjacentElement("afterbegin", element);

element=document.createElement("ul");
temp.insertAdjacentElement("beforeend", element);
temp=element;  //temp es ul 

element=document.createElement("li");
temp.insertAdjacentElement("afterbegin", element);

temp=element; //temp es li
element=document.createElement("a");
element.setAttribute("href", "#")
element.textContent="item uno";
//inserting first list element
temp.insertAdjacentElement("afterbegin", element);
//cloning the list to anoter variable to modify
var li2=temp.cloneNode(true);
//retrieve the first a in the second list intem, and changing his content 
li2.getElementsByTagName("a")[0].textContent= "item dos";
//inserting the new list
temp.insertAdjacentElement("afterend", li2);
//moving to aside
var aside= document.querySelector("#aside");
//inserting footer
element=document.createElement("footer");
aside.insertAdjacentElement("afterend", element);

temp=element; //temp es footer

element=document.createElement("h3");
element.textContent="Pie de Pagina";

temp.insertAdjacentElement("afterbegin",element);

//Parte 2 del ejercicio 
temp=document.querySelector("#section");
element=document.createElement("article");
temp.insertAdjacentElement("beforeend", element);

temp=element;//temp is article2 

element=document.createElement("h2");
element.textContent="Header Article 2 ";
temp.insertAdjacentElement("beforeend", element);
element=document.createElement("p");
element.textContent="Parrafo 1, Article 2 ";
temp.insertAdjacentElement("beforeend", element);
element=document.createElement("p");
element.textContent="Parrafo 2, Article 2";
temp.insertAdjacentElement("beforeend", element);

temp=document.getElementsByTagName("h3")[0];
element=document.createElement("img");
element.setAttribute("src", "./mina.jpg");
element.setAttribute("height","200");
element.setAttribute("width","200");
temp.insertAdjacentElement("afterend", element);

temp=document.getElementsByTagName("footer")[0];
element=document.createElement("button");
element.textContent="Parte 2";
element.setAttribute("onclick","parte2();");
temp.insertAdjacentElement("beforeend", element);

var boton2=element.cloneNode(true);
boton2.textContent="Parte 3";
boton2.setAttribute("onclick","parte3();");
temp.insertAdjacentElement("beforeend", boton2);






