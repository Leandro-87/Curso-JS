let a = 'let A';
let b = a;
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)

b = a
console.log(a, b)

// Arrays são mutaveis, assim como Objetos e Functions

let x = [1, 2, 3]
let y = x
let z = x
let w = [...x]
console.log(x, y)

x.push(4, 5)
console.log(x, y)

y.pop()
console.log(x, y)
console.log(z)
console.log(w)

// com objts

let obj01 = {
    nome: 'Leandro',
    sobrenome: 'Garcia'
}

let obj02 = {...obj01}

obj01.nome = 'Flávio'

console.log(obj01, obj02)