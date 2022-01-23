function* geradora1(){
    yield 'Passo 1';
    yield 'Passo 2';
    yield 'Passo 3';
}

const g1 = geradora1()

console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())


// exibindo resultado com for

function* geradora2(){
    yield 'Passo 1 com for';
    yield 'Passo 2 com for';
    yield 'Passo 3 com for';
}

const g2 = geradora2()

for (let valor of g2){
    console.log(valor)
}


// exibindo resultaod com WHILE (INFINITO)

function* geradora3(){
    let i = 0;
    while(true){
        yield i;
        i++
    }
}

const g3 = geradora3()

console.log(g3.next())
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())


// gerador chamando gerador

function* subGeradora(){
    yield 'sub 1';
    yield 'sub 2';
    yield 'sub 3';
}

function* topGeradora(){
    yield* subGeradora();
    yield 'top 1';
    yield 'top 2';
    yield 'top 3';
}

const topG = topGeradora()
for (let valor of topG){
    console.log(valor)
}