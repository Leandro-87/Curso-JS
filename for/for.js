for (let i = 0; i <= 5; i++) {
    console.log(`Post ${i}`)
}

// iniciando de qualquer numero e contando de 10 em 10
for (let i = 10; i <= 50; i += 10){
    console.log(`+ 10 = ${i}`)
}

// iniciando no negativo
for (let i = -3; i <= 2; i++){
    console.log(`do -3 ao ${i}`)
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log(i, par)
}
