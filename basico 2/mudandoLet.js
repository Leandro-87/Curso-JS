let varA = 'A' // -> B
let varB = 'B' // -> C
let varC = 'C' // -> A

const gravaVarA = varA

varA = varB
varB = varC
varC = gravaVarA

console.log(varA, varB, varC)




// ou




let a = 'A'; // -> B
let b = 'B'; // -> C
let c = 'C'; // -> A

[a, b, c] = [b, c, a]

console.log(a, b, c)