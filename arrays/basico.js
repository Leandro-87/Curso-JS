//const nomes = ['Jorge', 'Michel', 'Eduardo']
const nomes = new Array('Jorge', 'Michel', 'Eduardo', 'Luan', 'Rafael')
nomes[1] = 'Marcos'
delete nomes[0]

// const novo = nomes -> Assim as duas const viram a mesma
const novo = [...nomes]
novo.pop()

console.log(nomes)
console.log(novo)

// ***
novo.pop() // apaga de tras pra frente
const removido = novo.pop() // da pra guardar em uma variavel

novo.shift() // apaga de frente para tras 

novo.push('Wesley') // add no final
novo.unshift('Gustavo') // add no comeco

console.log(novo)

const Slice = nomes.slice(1, 3)
console.log(Slice)

const Slice2 = nomes.slice(2, -1)
console.log(Slice2)

// .sPlice faz tudo do  *** até aqui

const endereco = 'Eduardo Vergueiro de Lorena, Jd Planalto, 5-44, 22A, Bauru'
const endDetalhe = endereco.split(',') 

console.log(endereco)
console.log(endDetalhe)