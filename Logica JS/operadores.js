// && - || - !

// && = E (AND)
console.log(true && true && true && true)
console.log(true && true && false && true)

// || = OU (OR)
console.log(true || true || false || true)
console.log(true && true && true || false)
console.log(false || false) // só retorna falso se todas marcacoes forem falsas

const usuario = 'Braia';
const senha = '123456';
const logar = usuario === 'Braia' && senha === '123456' 
console.log('Usuario logado:', logar)

// ! Não (inverte o valor)

console.log(!true)
console.log(!!true)
console.log(!false)
console.log(!!false)

// Coisa bacana do ||

let corUsuario = null

console.log('Usuario nao selecionou a cor. Configuramos a cor padrão:', corUsuario || 'Blue')

corUsuario = 'Green'

console.log('Usuario selecionou a cor:', corUsuario || 'Blue')