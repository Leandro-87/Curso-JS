const nome = 'Leandro'
const sobrenome = 'Garcia'
const peso = 72
const altura = 1.76
let imc = peso / (altura * altura)
let anoNascimento = 1987
let anoAtual = new Date().getFullYear()

console.log(nome, sobrenome, 'tem', anoAtual - anoNascimento , 'anos')
console.log(`pesa ${peso}kg, mede, ${altura}m e seu IMC é de, ${imc}`) // masi pratico e novo

