let nome = window.document.getElementById ("nome")

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
     
    if (nome.value.legth < 3) {
         alert("nome inválido")
    }

}