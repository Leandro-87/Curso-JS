const nums = [2, 5, 7, 10, 11, 15, 20, 30, 37, 50, 55, 68]
const maior = nums.filter(valor => valor > 20)

console.log(maior)

const pessoas = [
    {nome: 'Jose', idade: 50},
    {nome: 'Jorge', idade: 26},
    {nome: 'Leandro', idade: 34},
    {nome: 'Astrogenibaldo', idade: 12},
    {nome: 'Winderson', idade: 15},
]

const nomeG = pessoas.filter(obj => obj.nome.length > 8)
console.log(nomeG)

const maiorIdade = pessoas.filter(obj => obj.idade > 18)
console.log(maiorIdade)

const ultimaLetraE = pessoas.filter(obj => obj.nome.toLowerCase().startsWith('e'))
console.log(ultimaLetraE)