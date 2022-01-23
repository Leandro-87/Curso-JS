function maior(x, y){
    if (x > y){
        return x;
    }else{
        return y
    }
}
console.log(maior(11, 57 ))

// MESMA FUNCAO REDUZIDA

function maior2(x, y){
    return x > y ? x : y
}

console.log(maior2(50, 68))

// COM ARROW FUNCTION

const maior3 = (x, y) => x > y ? x : y
console.log(maior3(207, 34))