alert('essa janela aparece com a função "ALERT"')
confirm('essa janela aparace com o função "CONFIRM", tendo as opções FALSE ou TRUE')
let frase = prompt('essa janela aparece com a função "PROMPT". Digite algo')

let confirmar = confirm('essa vai aparecer no console')

console.log('Vc digitou:', frase)
console.log('Confirmado:', confirmar)

let vendasDia = prompt('Qual foi sua venda diaria?')
let gorjeta = prompt('Quanto recebeu de gorjeta?')

vendasDia = Number(vendasDia)
gorjeta = Number(gorjeta)

let valorTotal = vendasDia + gorjeta
alert(`Você recebeu hoje R$ ${valorTotal}`) 