const inputTarefa = document.querySelector(".entratarefa")
const btnTarefa = document.querySelector(".btntarefa")
const tarefas = document.querySelector(".tarefas")


inputTarefa.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
        limparInput()
    }
})

/// Tem que criar a funçao apagar.....

function criaBtnApagar(li){
    li.innerText += " "
    const btnApagar = document.createElement("button")
    btnApagar.innerText = "Apagar"
    btnApagar.setAttribute("class", "apagar")
    li.appendChild(btnApagar)
}

function limparInput(){
    inputTarefa.focus()
    inputTarefa.value = ""
}

function criaLista(){
    const li = document.createElement("li")
    return li
}


function criaTarefa(txt){
    const li = criaLista()
    li.innerHTML = txt
    tarefas.appendChild(li)  
    limparInput() 
    criaBtnApagar(li)
    salvarTarefas()
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll("li")
    const listaDeTarefas = []

    for(let trf of liTarefas){
        let tarefaTexto = trf.innerText
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefinhas = localStorage.getItem("tarefas")
    const listaDeTarefinhas = JSON.parse(tarefinhas)

    for(let tarefinha of listaDeTarefinhas){
        criaTarefa(tarefinha)
    }
}
adicionaTarefasSalvas()


btnTarefa.addEventListener("click", function(event){
    if(inputTarefa.value){
        criaTarefa(inputTarefa.value)
    }else{
        alert("Você deve digitar uma tarefa.")
    }
})

document.addEventListener("click", function(e){
    const el = e.target
    if(el.classList.contains("apagar")){
        el.parentElement.remove()
        salvarTarefas()
    }
})
