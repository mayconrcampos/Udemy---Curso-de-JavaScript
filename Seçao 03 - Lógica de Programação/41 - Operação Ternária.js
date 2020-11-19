/**
 * Vamos estudar sobre: Operação Ternária
 * 
 * ? :
 * 
 */

 // É uma forma de criarmos uma estrutura de decisão simples sem precisar utilizar o if.
 var numero = 14 > 15 ? "Verdade": "Mentira"
 console.log(numero)

 // Foi realizado um pequeno teste lógico comparativo, se for true ele assume o valor verdade, se for false ele assume o valor Mentira.

 // No modo tradicional, essa expressão seria escrita assim:

 if(14 > 15){
     numero = "Verdade"
 }else{
     numero = "Mentira"
 }

 // Notamos que o modo ternário simplifica bastante.