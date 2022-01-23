const numeroDigitado = Number(prompt('Digite um numero quebrado'));
const trocaNumero = document.getElementById('numero');
const texto = document.getElementById('texto');

trocaNumero.innerHTML = numeroDigitado
texto.innerHTML = `
    <p>O seu número mais 10 é: ${numeroDigitado + 10}</p>
    <p>A Raiz quadrada é: ${numeroDigitado ** 0.5}</p>
    <p>${numeroDigitado} é um numero inteiro: ${Number.isInteger(numeroDigitado)}</p>
    <p>é NaN: ${Number.isNaN(numeroDigitado)}</p>
    <p>O número arredondado para cime é: ${Math.ceil(numeroDigitado)}</p>
    <p>O número arredondado para baixo é: ${Math.floor(numeroDigitado)}</p>
    <p>com duas casas decimal: ${numeroDigitado.toFixed(2)}</p>
`;