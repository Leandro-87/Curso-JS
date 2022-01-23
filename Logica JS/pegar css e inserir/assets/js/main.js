const secao = document.querySelector('.container')
const paragrafos = secao.querySelectorAll('p')

const estilos = getComputedStyle(document.body)
const colorBg = estilos.backgroundColor
console.log(colorBg)

for(let i of paragrafos){
    i.style.backgroundColor = colorBg
    i.style.color = '#fff'
    i.style.borderRadius = '4px'
    i.style.padding = '0 7px'
}