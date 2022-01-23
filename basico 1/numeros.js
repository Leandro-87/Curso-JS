const n1 = 7
const n2 = 12
let n3 = 10
n3++ // encrementa +1
n3-- // encrementa -1
++n3 // encrementa +1
--n3 // encrementa -1
let n4 = 0
let n5 = 10
const n6 = parseInt('4.5') // transformando STRING em NUMBER INTEIRO
const n7 = parseFloat('4.5') // transformando STRING em NUMBER REAL
const n8 = Number('4.5') // transformando STRING em NUMBER (INTEIRO OU REAL)

console.log(n4)

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 ** n2 )
console.log(n1 ** n2 / n2)
console.log(n3)

n4 += 2
n4 += 2
n4 += 2

n5 *= 2
n5 *= 2
n5 *= 2

console.log(n5)

console.log(n1 + n6)
console.log(n1 + n7)
console.log(n1 + n8)
console.log(typeof n6, typeof n7, typeof n8)