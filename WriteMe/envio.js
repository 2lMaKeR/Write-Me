var env =window.document.getElementById('enviar')
env.addEventListener('mouseenter', entrar)
env.addEventListener('mouseout', sair)
env.addEventListener('click', click)
function entrar(){
    env.style.background='black'
}
function sair(){
    env.style.background='rgba(0, 0, 0, 0.404)'
}
function click(){}