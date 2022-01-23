function divisiveis(numero){
    if (numero % 3 === 0 && numero % 5 === 0) return 'Divisivel por 3 e 5'
    if (numero % 3 === 0) return 'Divisivel por 3'
    if (numero % 5 === 0) return 'Divisivel por 5'
    return numero
}

for (let i = 0; i <= 100; i++){
    console.log(i, divisiveis(i))

}