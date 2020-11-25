/**
 * setInterval e setTimeout
 * 
 * Trabalhando com temporizadores.
 */

 function mostraHora(){
     let data = new Date()

     return data.toLocaleTimeString("pr-BR", {
         hour12: false
     })
 }

 const timer = setInterval(function () {
     console.log(mostraHora())
 }, 1000)


 setTimeout(function() {
     clearInterval(timer)
 }, 10000)


 setTimeout(function(){
     console.log("Olar!")
 }, 5000)