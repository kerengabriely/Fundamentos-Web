 // por tag: getElementeByTagNome()
// por id: getElementById ()
// por nome: getElementsByNome ()
// por classe: getElemetsByClassNome ()
//por seletor: querySelector (), mais usado 

//  windoow = chamei o DOM
//  ----> método

let nome = document.querySelector ("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false

let mapa = document.querySelector ("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }
    else { 
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        let nomeOK = true
    }
}

function validaEmail() { 
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        let emailOK = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 5) {
        txtAssunto.innerHTML = "Texto grande, máximo 100 caracteres"
        txtAssunto.style.color = "red"
    }

    else { 
        txtAssunto.style.display = "none";
        let assuntoOK = true
    }
}

function enviar() {
    if (nomeOK == true & emailOK == true & assuntoOK == true ) {
    alert ("Fomulário enviado com sucesso") 
    }
    else {
        alert ("Preench o formulário corretamente, antes de envar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}

