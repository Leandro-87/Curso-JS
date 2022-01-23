function retornaFuncao(nome){
    return function(){
        return nome
    }
}

const funcao = retornaFuncao('Leandro')
const funcao2 = retornaFuncao('Garcia')
console.log(funcao, funcao2)


console.log(funcao(), funcao2())