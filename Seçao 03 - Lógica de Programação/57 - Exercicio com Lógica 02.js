/**
 * Escreva uma função chamada ePaisagem que recebe dois
 * argumentos, largura e altura de uma imagem (number).
 * 
 * Retorne true se a imagem estiver no modo paisagem.
 */

 function ePaisagem(altura, largura){
     if(altura < largura){
         return `Formato Paisagem`
     }return `Formato Retrato`
 }

 console.log(ePaisagem(250, 300))

 // Arrow function reduzida

 const Epaisagem = (altura, largura) => largura > altura ? "Retrato": "Paisagem"
 console.log(Epaisagem(1920, 2050))