try {
    console.log(naoExisto);
} catch(erro) {
    console.log('Essa variavel nao existe')
}

// NA PRATICA -------------------------

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number')
    {
        throw new Error ('Um numero da sua soma não é válido');
    }
    return x + y
}

try {
    console.log(soma(2, 2))
    console.log(soma(2, 'd'))
} catch(e) {
    console.log('Agora mostro somente o texto de erro que eu quiser')
    // Mostrar o erro abaixo apenas no desenvolvimento
    console.log(e)

}