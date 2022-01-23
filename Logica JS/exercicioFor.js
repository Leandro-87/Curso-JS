const post = [
    {tag: 'h1', texto: 'Seu titulo'},
    {tag: 'h5', texto: 'Subtitulo'},
    {tag: 'p', texto: 'aqui entra o texto'},
    {tag: 'footer', texto: 'Creditos da postagem'},
]

const getPost = document.querySelector('.container')
const div = document.createElement('div')

for ( let i = 0; i < post.length; i++){
    let {tag, texto} = post[i];
    let minhaTag = document.createElement(tag);
    let textoCriadoNode = document.createTextNode(texto);
    
    minhaTag.appendChild(textoCriadoNode);
    div.appendChild(minhaTag)
}
getPost.appendChild(div)