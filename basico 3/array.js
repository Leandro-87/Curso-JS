const armamentos = ['C58', 'Ots', 'sentex', 'Granada de Concussão']

console.log(armamentos)

console.log('Troca a', armamentos[1])
armamentos[1] = 'Mac10'
console.log(armamentos)

armamentos.push('Trophy')
armamentos.push('Vant')
console.log(armamentos)

armamentos.unshift('Revive')
console.log(armamentos)

armamentos.pop()
console.log(armamentos)

const usou = armamentos.pop()
const revive = armamentos.shift()
console.log(armamentos)
console.log('Voce ja usou o', usou)
console.log('Voce ja usou o', revive)

delete armamentos[2]
console.log(armamentos)

console.log(armamentos.slice(0, -2))
console.log(armamentos.slice(0, 3))
console.log('Essa variavel é uma array:', armamentos instanceof Array)