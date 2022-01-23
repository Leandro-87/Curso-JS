const ns = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i of ns){

    if (i === 3 || i === 5){
        console.log('Pula o numero')
        continue
    }

    console.log(i)

    if (i === 7){
        console.log('Com o break ele PARA o loop')
        break
    }
}