/**
 * Sobre constantes em JavaScript
 * 
 * Não podemos criar constantes com palavras reservadas.
 * Constantes precisam ter nomes significativos.
 * Não pode nomeá-la iniciando com número.
 * Não podem conter espaço ou traço ou caracteres especiais.
 * Utiliza-se camelCase.
 * Case-sensitive.
 * Não podemos redeclarar constantes
 * Não utilize VAR ou LET.
 * 
 * Constantes devem ser declaradas e inicializadas ao mesmo tempo.
 * 
 */

const nome = "Maylcão Robsão Campuis"
const otonome = nome

console.log(otonome)

const num1 = 1
const num2 = 2
const soma = num1 + num2

console.log(soma)

/**
 * Como visto acima, podemos usar const pra atribuir
 * valor a outra const... podemos fazer operações..
 * desde que seja feita na declaração.... Não podemos
 * reatribuir valores de consts, pois são imutáveis.*/

console.log(typeof soma, typeof otonome)

let nome1 = "Maycon"
console.log(typeof nome1)
nome1 = true
console.log(typeof nome1)
nome1 = 2
console.log(typeof nome1)

/**
 * JavaScript é uma linguagem Fracamente Tipada.
 */