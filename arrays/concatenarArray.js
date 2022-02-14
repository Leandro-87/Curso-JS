// o + nao funciona, numbers passa a ser um string

const a = [1, 2, 3]
const b = [4, 5, 6]
console.log(a.concat(b))
console.log(a.concat(b, [7, 8, 9], 'fim'))

// ...rest -> ...spred

console.log(...a, ...b)
console.log(...a, ...b, [7, 8, 9], 'fim')
console.log(...a, ...b, ...[7, 8, 9], 'fim')
