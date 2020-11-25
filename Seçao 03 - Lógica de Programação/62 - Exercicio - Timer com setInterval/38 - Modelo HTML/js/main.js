var tempo = new Date()
var crono = document.querySelector(".cronometro")

function cronometro(){
    tempo.setHours(0)
    tempo.setMinutes(0)
    tempo.setSeconds(0)

    return tempo.toLocaleTimeString("pt-BR", {
        
    })
}

function zerar(){
    crono.innerHTML = `${cronometro()}`
}

function iniciar(){
    const timer = setInterval(function () {
        

        return tempo.toLocaleTimeString("pt-BR", {

        })
    }, 1000)
   
   
    setTimeout(function() {
        clearInterval(timer)
    }, 10000)
}

iniciar()






