const numero = 105;
if (numero >= 0 && numero <= 10) {
    console.log(numero, 'está entre 0 e 10')
}
else if (numero >= 11 && numero <= 20) {
    console.log(`${numero} está entre 11 e 20`)
}
else if (numero >= 21 && numero <= 30) {
    console.log(`${numero} está entre 21 e 30`)
}
else {
    console.log(numero, 'não se encaixa em nenhuma das condições!')
}