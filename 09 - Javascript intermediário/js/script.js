//window.alert("Esse é um alerta")

// Pegando elemento pelo ID
let listaOrdenada = document.getElementById("lista")
console.log(listaOrdenada)

// Pegando elemento pelo nome da classe
let item= document.getElementsByClassName("items")
console.log(item)

// Pegando elemento pelo nome da tag 
let items = document.getElementsByTagName("li")
console.log(items)

function hiddenButton(button){

    button.style = "display: none"
}

function changeText(text){
    let textArea= document.getElementsByClassName("text")[0]
    textArea.innerText= text

}

function onmouseOver(elemento){
elemento.style.backgroundColor = "red"

}
function onmouseOut(elemento){
    elemento.style.backgroundColor = "rgb(47, 82, 197)";
 
    }

function events(){
let elemento= document.getElementById("events3");
elemento.onclick = onClick
elemento.addEventListener("mouseover", mouseO)
elemento.addEventListener("mouseout", mouseT)
}

function onClick(){
    body =document.getElementsByTagName("body")[0]
    body.innerText= "hahahaahah"
}
function mouseO(){
    this.style.backgroundColor = "red"
}
function mouseT(){
this.style.backgroundColor = "white"
}   

///////////////////////////////////////////////
// Onclick - Parte 1
function clickonbutton(botton){
    alert("Botão clicado")
    console.log("botão clicado")
    botton.style.color= "red"
}

function textchange(newtext){
    element= document.getElementById("text")

element.innerText=newtext.value
}

///////////////////////////////////////////////
// Onclick - Parte 2

function mouseover(element){
element.style.backgroundColor = "red"
}

function mouseout(element){
element.style.backgroundColor = "blue"
}

///////////////////////////////////////////////
// Onclick - Parte 3
window.onload = function() {
    alert("let's go!");
   }
function carregou(){
    window.alert("aaaaaaaaaaa")
    console.log("aaaaaaaaaaa")
let text = document.getElementById("textoqualquer")
text.innerHTML = "Loading";
}