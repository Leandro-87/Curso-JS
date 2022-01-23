const data = new Date();
const novaData = new Date(2021, 3, 20, 15, 14, 20);

console.log(data.toString())
console.log(novaData.toString())

console.log('Dia:', data.getDate())
console.log('Hora:', data.getHours())
console.log('Minutos:', data.getMinutes())
console.log('Segundos:', data.getSeconds())
console.log('Milisegundos:', data.getMilliseconds())
console.log('Ano:', data.getFullYear())
console.log('Mês:', data.getMonth())
console.log('Dia da semana:', data.getDay())
