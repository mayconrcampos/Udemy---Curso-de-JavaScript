var mostracrono = document.querySelector(".cronometro")
var iniciar = document.querySelector(".iniciar")
var pausar = document.querySelector(".pausar")
var zerar = document.querySelector(".zerar")

mostracrono.style.color = "black"

var cronometro
var hora = 0
var minuto = 0
var segundo = 0

// Função formata número - Se for menor que 10 ele acrescenta um 0 antes.
function fmt(num){
    return num > 9 ? num: `0${num}`
}

// Função que gera um cronômetro.
function timer(){
    mostracrono.style.color = "black"
    cronometro = setInterval(function(){
        if(segundo < 60){
            segundo++
        }
        if(segundo == 60){
            segundo = 0
            minuto++
        }
        if(minuto == 60){
            minuto = 0
            hora++
        }
        mostracrono.innerHTML = `${fmt(hora)}:${fmt(minuto)}:${fmt(segundo)}`
    }, 1000)
}

// Liga botão iniciar contagem, chama a função timer
iniciar.addEventListener("click", function(event){
    if(mostracrono.style.color == "black"){
        setTimeout(function(){
            clearInterval(cronometro)
            hora = 0
            minuto = 0
            segundo = 0
            timer()
        }, 1)
        
    }else{
        timer()
    }
    
})

// Liga botão pausar - testa cor da letra, se for preta, ele pausa a contagem e passa a letra pra vermelho. Se tiver letra vermelha, ele retoma a contagem e passa a letra para preto.

pausar.addEventListener("click", function(event){
    if(mostracrono.style.color == "black"){
        setTimeout(function(){
            clearInterval(cronometro)
            mostracrono.style.color = "red"
        }, 1)
    }else if(mostracrono.style.color == "red"){
        timer()
    }
})

// Liga botão zerar - Pausa contagem, depois zera cronômetro, depois mostra o cronômetro zerado na tela e muda a cor pra preto.
zerar.addEventListener("click", function(event){
    setTimeout(function(){
        clearInterval(cronometro)
    }, 1)

    hora = 0
    minuto = 0
    segundo = 0
    mostracrono.innerHTML = `${fmt(hora)}:${fmt(minuto)}:${fmt(segundo)}`
    mostracrono.style.color = "black"
})
