/**
 * Atribuição via desestruturação
 */

let a = "A"
let b = "B"
let c = "C"

const letras = [c, b, a];
[a, b, c] = letras

console.log(a, b, c)

// Suponhamos que temos um array de numeros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let [primeiroN, segundoN, terceiroN, quartoN, quintoN, sextoN, setimoN, oitavoN, nonoN, ...resto] = numeros

console.log(primeiroN, segundoN, terceiroN, quartoN, quintoN, sextoN, setimoN, oitavoN, nonoN)

// pegando o resto
console.log(resto)

// quando usamos o operador ..., ele se chama rest operator. Porém pode ser usado em outro contexto onde ele espalha, ... spread

// Podemos pegar valores alternados

const numerows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [n1,, n3,, n5,, n7,, n9] = numerows

console.log(n1, n3, n5, n7, n9)

// Lista dentro de lista
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [,[,,seis],ultimalista] = array

console.log(seis, ultimalista)