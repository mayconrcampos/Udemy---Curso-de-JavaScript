/**
 * Tipos primitivos e valores por referência.
 * 
 * Quando falamos em Tipos Primitivos, estamos falando de valores imutáveis.
 * 
 * Tipos Primitivos (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
 * 
 * 
 * Referência - (mutáveis) - array, objects, function
 * 
 *  
 */

let nome = "Luiz"
nome = "Maycon"
console.log(nome)

// Na verdade acima os valores não foram alterados, mas simplesmente substituidos.
// Podemos ver que as strings são imutáveis abaixo.
nome[0] = "L"
console.log(nome) // Maycon

// Temos também a situação abaixo
let a = "a"
let b = a // Cópia
console.log(a, b)

a = "Outra coisa"
console.log(a, b)

// Vimos também valores passados por referência
// Sáo mutáveis: Arrays e Objetos

let arrayA = [1, 2, 3]
let arrayB = arrayA // b aponta para o mesmo espaço da memória de a.

console.log(arrayA, arrayB) // [ 1, 2, 3 ] [ 1, 2, 3 ]


arrayB[0] = 0
console.log(arrayA, arrayB) // [ 0, 2, 3 ] [ 0, 2, 3 ]


arrayA[1] = 1
console.log(arrayA, arrayB) // [ 0, 1, 3 ] [ 0, 1, 3 ]

// Podemos perceber que quando mudamos um array, o outro também muda, pois ambos apontam para o mesmo espaço da memória.

// Logo, os valores primitivos são copiados para outra variável e funcionam independentes.
// Os valores por referência apontam pro mesmo lugar da memória, logo eles não são independentes.

// Podemos copiar valores por referência usando o operador abaixo.

let arrayC = [...arrayA]
arrayC.push(4)
arrayB.push(5)

console.log(arrayA, arrayB, arrayC)
// [ 0, 1, 3 ] [ 0, 1, 3 ] [ 0, 1, 3, 4 ]


// Podemos fazer a mesma coisa com objetos.

const pessoa = {
    nome:"Maycon",
    sobrenome:"Campos"
}
console.log(pessoa)
// { nome: 'Maycon', sobrenome: 'Campos' }

let otapessoa = pessoa
console.log(otapessoa)
// { nome: 'Maycon', sobrenome: 'Campos' }

otapessoa.nome = "Mauro"
console.log(otapessoa, pessoa)
// { nome: 'Mauro', sobrenome: 'Campos' } { nome: 'Mauro', sobrenome: 'Campos' }

otapessoa = {...pessoa}
otapessoa.nome = "Edevaldo"

console.log(pessoa, otapessoa)
// { nome: 'Mauro', sobrenome: 'Campos' } { nome: 'Edevaldo', sobrenome: 'Campos' }

// Percebemos que o valor de pessoa foi copiado para otapessoa, e já não apontam mais para o mesmo local da memória.

// Os primitivos fazem isso naturalmente quando usados com o operador de atribuição = .

