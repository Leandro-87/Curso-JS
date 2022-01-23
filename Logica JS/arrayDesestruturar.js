const array = ['C-52', 'Ots', 'Fennec', 'Ram-7', 'Gallil', 'Sentex'];
const [arma1, , arma2, ...outrarArmas] = array;             // CHAMAR O NADA CONTA INDEX ( , , )


console.log(array)
console.log(arma1, arma2)
console.log(outrarArmas)

const arrayArray = [ ['A', 'B', "C"] , [1, 2, 3] , ['X', 'Y', 'Z'] ]; 
const [lista1, lista2, lista3] = arrayArray

console.log(arrayArray[2][1])
console.log(lista2[2])