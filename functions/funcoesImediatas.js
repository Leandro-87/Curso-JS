(function (arma1, arma2, granada) {
    const gamer = 'Leandro';
    function criaGamer(nick) {
        return `${gamer}, Nick: ${nick}`
    }
    
    function falaNome() {
        console.log(criaGamer('Braia'));
    }

    falaNome();
    console.log(`Arma 1: ${arma1}, Arma 2: ${arma2}, Granada: ${granada}`)

})('C58', 'Mac-10', 'Sentex')