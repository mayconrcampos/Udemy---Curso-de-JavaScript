const inputTarefa = document.querySelector(".entratarefa").value
const btnTarefa = document.querySelector(".btntarefa")
const tarefas = document.querySelector(".tarefas")

const texto = document.querySelector(".texto")

btnTarefa.addEventListener("click", function(event){
    if(inputTarefa){
        texto.innerHTML = `${inputTarefa}`
    }else{
        alert("Fudeu")
    }
})