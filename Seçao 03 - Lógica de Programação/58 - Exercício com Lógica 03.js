/**
 * Exercício: 
 * 
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisivel por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e por 5 = FizzBuzz
 * Número NÃO é divisível por 3 e por 5 = Retorna o próprio número.
 * Checar se o número é realmente um número.
 * Use a função com números de 0 a 100.
 */

 function FizzBuzz(numero){
     if(Number.isInteger(numero) && numero > 0 && numero <= 100){
         if(numero % 3 == 0 && numero % 5 == 0){
             console.log("FizzBuzz")
         }else if(numero % 5 == 0){
             console.log("Buzz")
         }else if(numero % 3 == 0){
             console.log("Fizz")
         }else{
             console.log(`Número: ${numero}`)
         }
     }else{
         console.log("Somente Números Inteiros entre 1 a 100.")
     }
 }

 
 for(let i = 0; i <= 100; i ++){
     FizzBuzz(i)
 }




