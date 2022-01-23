function newUser(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${nome} ${sobrenome}`
        },
        assunto(assunto){
            return `${nome} manja do assunto ${assunto}`
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2)
        }
    }
}

const user1 = (newUser('Leandro', 'Garcia', 1.76, 70))
const user2 = (newUser('Fernanda', 'Acencio', 1.66, 60))

console.log(user1.assunto('JavaScript'))
console.log(user1.nome , user1.imc())
console.log(user2.nome , user2.imc())
console.log(user1.nomeCompleto)