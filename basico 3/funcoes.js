function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
}

saudacao('Leandro')
saudacao('Cleiton')

function teste(nome){
    return `Boa tarde ${nome}`
}

const boaTarde = teste('Maicon')
console.log(boaTarde)

function soma(x = 1, y = 1) {    // o '= 1' serve para caso nao passe nenhum valor
    const resultado = x + y;
    return resultado
}

console.log(soma())
console.log(soma(5))
console.log(soma(150,400))



const raiz = function(n){       // funcoes anonimas
    return n ** 0.5;
};

console.log(raiz(9))
console.log(raiz(40))

const mult = (x, y) => x * y;   // Arrow function
console.log(mult(2,2))
console.log(mult(10,2))

const triplo = x => x * 3;   // Arrow function
console.log(triplo(10))
console.log(triplo(15))