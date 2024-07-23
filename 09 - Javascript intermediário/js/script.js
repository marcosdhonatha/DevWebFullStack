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
