let curso = 'HTML'
const nome = 'Leandro'
const ano = 1987
const vendas = 10
const valor = 38
const diasTrabalhadoMes = 22 
const saldo = vendas * valor
const saldoMensal = saldo * diasTrabalhadoMes

curso = 'JavaScript'
console.log('Menu nome é',nome,'e nasci em', ano)
alert('Se você quer aprender ' + curso + ' pode prosseguir') //(Não funciona a demonstração aqui no VScode)
console.log(curso)
console.log('Vendas por dia:', 'R$' + saldo)
console.log('Vendas no mês:', 'R$' + saldoMensal)
console.log(typeof nome)
console.log(typeof(saldo)) // pode usar outras "()" ou nao
console.log(typeof vendas)