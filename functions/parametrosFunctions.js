//o argumento sustenta
function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }
    console.log(arguments)
    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7)


// o parametro pode ser invalido que nao tem problema
function funcao2(a, b, c, d, e, f){
    console.log(a, b, c)
}
funcao2(1, 2, 3)

// o parametro pode ser invalido que nao tem problema mas o valor fica indefinido
function funcao3(a, b, c, d, e, f){
    console.log(a, b, c, d, e)
}
funcao3(1, 2, 3)

// --------------------
function funcao4(a, b = 0, c = 2){
    // b = b || 0  ------ MODO ANTIGO DE DISER QUE B SE NAO FOR ARGUMENTADO É IGAL A 0
    console.log(a + b)
}
funcao4(5, ' -> está somando 5+0 pq B nao foi argumentado e C não esta somando pq nao foi argumentado')

// parametros com ARRAY, funciona igual para OBJ
function funcao5([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade)
}

funcao5(['Leandro', 'Garcia', 34])

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
conta('*', 1, 30, 10, 2)