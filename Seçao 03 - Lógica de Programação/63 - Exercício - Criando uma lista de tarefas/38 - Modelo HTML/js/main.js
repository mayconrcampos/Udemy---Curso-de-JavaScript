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
}


btnTarefa.addEventListener("click", function(event){
    if(inputTarefa.value){
        criaTarefa(inputTarefa.value)
    }else{
        alert("Você deve digitar uma tarefa.")
    }
})