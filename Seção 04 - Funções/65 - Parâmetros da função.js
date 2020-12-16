/**
 * Vamos falar sobre parâmetros
 */
// Funções com argumentos indefinidos
 function funcao(){
     console.log(`Oieam ${arguments}!`)
 }
 funcao("Felo da pota")

 function somartudo(){
     let soma = 0
     for(let num of arguments){
        soma += num
     }
     console.log(soma)
 }

 somartudo(2, 3, 4, 5, 6, 7, 6, 5, 4, 3,3 , 4, 5,6 , 4, 34)

 // Arguments só funciona para funções declaradas com
 // a palavra function.

 function somab(a=0, b=5){
     console.log(a + b)
 }
 somab(15, undefined)



 function conta(operador, acumulador, ...numeros){
     for(let numero of numeros){
         if(operador === "+") acumulador += numero
         if(operador === "-") acumulador -= numero
         if(operador === "*") acumulador *= numero
         if(operador === "/") acumulador /= numero
     }
     console.log(acumulador)
 }

 conta("/", 1, 2,4,6,8,9)