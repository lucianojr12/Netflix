

let botao = document.getElementById("botao-pergunta")
let pergunta = document.getElementById("pergunta")
let cruz = document.getElementById("imagem-pergunta")


function botaopergunta(){

if(pergunta.style.display=="none") {
    pergunta.style.display = "block"
    cruz.id = "imagem-pergunta-girar"
} else {
     pergunta.style.display = "none"
    cruz.id = "imagem-pergunta"
}
}
botao.addEventListener("click", botaopergunta)

