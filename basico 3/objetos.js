// exemplo de dois objetos

const player01 = {
    nome: 'Leandro',
    idade: 34,
    arma: 'C58',
}

const player02 = {
    nome: 'Zigueira',
    idade: 30,
    arma: 'Ots',
}

console.log(player01, player02)
console.log(player01.arma, player02.idade) // retornar item dentro do obj

// funcao para criar obj

function criaVisitante(nome, bebida, dias) {
    return {
        nome, bebida, estadias: dias
    };
}

console.log(criaVisitante('Leandro', 'Eisenbahn' , '3'))
console.log(criaVisitante('Fernanda', 'Gin' , '3'))
console.log(criaVisitante('Luiz', 'Amstel' , true))

const aluno01 = {
    nome: 'Charles',
    sobrenome: 'Thompson',
    idade: 10,
    ano: 1,

    serie() {
        console.log(`O aluno ${this.nome} ${this.sobrenome} vai para a ${this.ano}ª série com ${this.idade} anos`)
    },
    incrementaIdade() {             //incrementa 1 a cada vez que for chamado
        this.idade++, this.ano++;
    }
}

aluno01.serie()
aluno01.incrementaIdade()
aluno01.serie()
aluno01.incrementaIdade()
aluno01.serie()
aluno01.incrementaIdade()
aluno01.serie()
aluno01.incrementaIdade()
aluno01.serie()