function Pessoa(nome, sobrenome){

    // Atributos ou metodos privado
    const ID = 6987;
    const metodoInterno = function(){
        
    };

    // Atributos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(`${this.nome}: sou um metodo`)
    }
}

const p1 = new Pessoa('Leandro', 'Garcia')
const p2 = new Pessoa('Fernanda', 'Rodrigues')

p2.metodo()