function soma(a, b) {
    return a + b;
}

console.log(soma(7, 2))


// USANDO PARA REPRODUIR UM OBJETO
function gamerArma(pessoa, arma){
    return {pessoa, arma};
}

const diego = gamerArma('Diego', 'Ram-7')
const alessandro = gamerArma('Alessandro', 'Escopeta')

console.log(diego, alessandro)


// EXEMPLO LEGAL
function multiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = multiplicador(2)
const triplica = multiplicador(3)
const quadriplica = multiplicador(4)

console.log(duplica(10))
console.log(triplica(10))
console.log(quadriplica(10))
