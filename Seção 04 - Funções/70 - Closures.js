/**
 * Closures
 * 
 * É a capacidade de uma função acessar seu escopo léxico.
 */

 function retornaFuncao(nome){
     return function(){
         return nome
     }
 }

const funcao = retornaFuncao("Maycon")
const funcao2 = retornaFuncao("Campos")
console.log(funcao())
console.log(funcao2())