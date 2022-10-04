//Criando referencias do formulario
const body = document.body;
const botao = document.querySelector('#botao')
const bg = document.querySelector('#background')
const textColor = document.querySelector('#cor-texto')
const fontSize = document.querySelector('#tamanho-fonte')
const spacing = document.querySelector('#espacamento')
const textFamily = document.querySelector('#text-family')


window.onload = () => {
    if(localStorage.background){
        body.style.backgroundColor = localStorage.getItem('background')
        bg.value = localStorage.getItem('background')
    }
    if(localStorage.textColor){
        body.style.color = localStorage.getItem('textColor')
        textColor.value = localStorage.getItem('textColor')
    }
    if(localStorage.fontSize){
        body.style.fontSize = localStorage.getItem('fontSize') + 'px'
        fontSize.value = localStorage.getItem('fontSize')
    }
    if(localStorage.spacing){
        body.style.lineHeight = localStorage.getItem('spacing') + 'px'
        spacing.value = localStorage.getItem('spacing')
    }
    if(localStorage.textFamily){
        body.style.fontFamily = localStorage.getItem('textFamily')
        textFamily.value = localStorage.getItem('textFamily')
    }

    
}


botao.addEventListener('click', () => {
    localStorage.setItem('background', bg.value)
    localStorage.setItem('textColor',textColor.value)
    localStorage.setItem('fontSize',fontSize.value)
    localStorage.setItem('spacing',spacing.value)
    localStorage.setItem('textFamily',textFamily.value)

    body.style.backgroundColor = bg.value;
    body.style.color = textColor.value;
    body.style.fontSize = fontSize.value + 'px';
    body.style.lineHeight = spacing.value + 'px';
    body.style.fontFamily = textFamily.value;

})