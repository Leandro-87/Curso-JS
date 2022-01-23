const a = 'Colocar Entre "Aspas Duplas"';
const b = "colocar entre 'aspas simples'";
const c = "colocar entre \"aspas duplas\", jeito estranho";
const d = "colocar \\Barra invertida\\ no texto";
const concat = 'Concatenação';
const telefone = '14998368683';
const num1 = 2;
const num2 = 5.75;
const num3 = 1987;
const num4 = 490.58987651698;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a[4]);
console.log(a.charAt(1));
console.log(a.concat(' acrescenta algo, nao sei pq usaria assim'));
console.log('Tipos de', concat);
console.log('Tipos de ' + concat);
console.log(`Tipos de ${concat}. A mais usual`);
console.log(`A palavra "aspas" foi encontrada no índice`, a.indexOf('aspas'));
console.log(concat.match(/[a-z]/g));
console.log(a.replace('colocar', 'inserir'));
console.log(a.replace(/a/g , '*'));
console.log(telefone.replace(/[0-9]/g , '*'));
console.log('Essa frase tem', a.length, 'Letras');
console.log(c.slice(4, 24))
console.log(c.slice(-4))
console.log(c.slice(-4, -1))
console.log(a.split(' '))
console.log(a.split(' ', 2))
console.log(a.toUpperCase(), '. Tudo maiusculo')
console.log(a.toLowerCase(), '. Tudo minusculo')
console.log(num1.toString() + num2) // de number para string
console.log(num3.toString(2), 'Esse é meu ano de nascimento em numeros binarios')
console.log(num4.toFixed(2))
console.log('esse numero é inteiro =', Number.isInteger(num4))