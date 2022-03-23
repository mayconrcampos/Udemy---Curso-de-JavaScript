/**
 * For OF - Estrutura de Repetição.
 * 
 * Quando usamos For Of, ela retorna não o índice, mas o objeto daquele índice.
 */

 const carros = ["Gol", "Opala", "Chevette", "Corsa", "Puma", "Fiat 147"]

 for(const carro of carros){
     console.log(carro)
 }

 // Sem dúvida alguma, esta é uma evolução do laço tradicional For da linguagem C, o que nos traz muita facilidade e economia de código digitado.

 // Abaixo a mesma coisa com o laço for tradicional da linguagem C e C++.**- 
 for(let i = 0; i < carros.length; i++){
     console.log(carros[i])
 }


 // Temos também o for Each, que é uma função que recebe uma função anônima e que pode possuir até três parâmetros. 
 // valor - Retorna o valor
 // indice - Retorna o indice
 // array - Retorna o array inteiro

 // Ele itera sobre o array retornando aquilo que for pedido.

 carros.forEach(function(valor, indice, array){
     console.log(valor, indice)
     console.log(array)
 })

 // Utilização dos laços for

 // For clássico - Geralmente com iteráveis array ou strings
 // For in - REtorna o indice ou chave, stringm, array ou objetos
 // For Of - Retorna o valor em si (iteráveis, arrays ou strings.)
