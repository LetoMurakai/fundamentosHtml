/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let tel = document.querySelector('#tel')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let telOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let foto = document.querySelector('#foto')


function validaNome() {

   let txtNome = document.querySelector('#txtNome')
   if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome Inválido'
      nome.style.border = '2px solid red' 
   } else {
      txtNome.innerHTML = 'Nome Válido'
      nome.style.border = '2px solid green'
      nomeOk = true
   }

}

function validaEmail() {
   let txtEmail = document.querySelector('#txtEmail') 

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
      txtEmail.innerHTML = 'E-mail inválido'
      email.style.border = '2px solid red' 
   } else {
      txtEmail.innerHTML = 'E-mail válido'
      email.style.border = '2px solid green'
      emailOk = true
   }
}

function validaTel() {
    let txtTel = document.querySelector('#txtTel') 
 
    if (tel.value.indexOf('11') == -1 || tel.value.indexOf('9') == -1 ) {
        txtTel.innerHTML = 'Telefone inválido'
        tel.style.border = '2px solid red' 
    } else {
        txtTel.innerHTML = 'Telefone válido'
        tel.style.border = '2px solid green'
       telOk = true
    }
 }

function validaAssunto() {
   let txtAssunto = document.querySelector('#txtAssunto')

   if (assunto.value.length >= 100) {
      txtAssunto.innerHTML = 'limite maximo de texto 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
   } else {
      txtAssunto.style.display = 'none'
      assuntoOk = true
   }
}

function enviar() {
   if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}

function mapaZoom() {
   mapa.style.transition = '0.8s'
   mapa.style.width = '800px'
   mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.transition = '1s'
   mapa.style.width = '400px'
   mapa.style.height = '250px'
}

function moverFoto(){
    foto.style.transition = '0.2s'
    foto.style.width = '210px'
}
function fotoNormal(){
    foto.style.transition = '0.2s'
    foto.style.width = '200px'
}