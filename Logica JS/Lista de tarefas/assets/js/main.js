const inputTarefa = document.querySelector('.inputTarefa')
const btnTarefa = document.querySelector('.btnTarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13){
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

function limpaInput(){
  inputTarefa.value = ''
  inputTarefa.focus()
}

function criaBotaoApagar(li){
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = "Deletar"
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
  const li = criaLi()
  li.innerHTML = textoInput
  tarefas.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas()
}

btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listadeTarefas = []
  
  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Deletar', '').trim();
    listadeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listadeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }

}
adicionaTarefasSalvas()