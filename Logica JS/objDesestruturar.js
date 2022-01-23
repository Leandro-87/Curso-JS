const pessoa = {
    nome: 'Leandro',
    idade: 34,
    end: {
        rua: 'Eduardo Vergueiro',
        bairro: 'Jd Planalto',
        condominio: 'Villagio di Roma'
    }
}

const {nome, sobrenome = 'não informado', end: {condominio, bairro, ...restoEnd}, ...resto} = pessoa
console.log(nome, sobrenome, condominio, bairro)
console.log(resto, restoEnd)
