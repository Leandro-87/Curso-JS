const data = new Date('1987-04-04 07:30');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
} else {
    diaSemanaTexto = 'Sábado';
}
console.log(diaSemana, diaSemanaTexto)