try {
    console.log('uma ação normal...')
    console.log('gerei um erro');

    try{
        console.log('sou um try dentro de outro try e, só apareço se ão tiver erro anteriormente')
        console.log(erro)
    }catch(e){
        console.log('existe um erro')
    }finally{
        console.log('try > try > finally')
    }

}catch(e){
    console.log('avisando que deu erro!!!')
}finally{
    console.log('Finally: sempre vou aparecer')
}

console.log('-----------------------------------------------------------------')
// exemplo com hr

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date')
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('02-04-1987 08:12:38');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    console.log('algo deu errado')
} finally {
    console.log('Tenha um bom dia!')
}