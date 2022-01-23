const clientes = ['Marcos', 'Rafael', 'Douglas']

for(let i in clientes) {
    console.log(clientes[i])
}

const dadosCliente = {
    nome: clientes[0],
    sobrenome: 'Silva',
    idade: 28
}

for (let chave in dadosCliente){
    console.log(`${chave} = ${dadosCliente[chave]}`)
}