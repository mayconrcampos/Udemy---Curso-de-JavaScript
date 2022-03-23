/**
 * Reduce
 * 
 * Existem duas possibilidades pra trabalhar com reduce.
 * 
 * Pode fazer uma função de agregação
 * Pode se comportar como map ou filter.
 * 
 * A forma mais como de trabalhar com reduce é a forma de agregação.
 * 
 * Sintaxe do Reduce
 * 
 * array.reduce(callback, valorinicial)
 * 
 * callback - É uma função que é executada em cada valor do array, recebe quatro argumentos. Sendo estes:
 * - Acumulador: O valor retornado na última invocação do callback, ou o argumento valor inicial, se fornecido.
 * 
 * - Valor Atual: O elemento atual que está sendo processado no array.
 * 
 * - indice: O índice do elemento atual que está sendo processado no array.
 * 
 * - valor inicial: Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback. Trata-se do valor que a variável de acumulador irá receber na posição 0 do array.
 * 
 */

var numeros = [1,2,6,3,7,9,10,5,4]

var soma = numeros.reduce((acumula, atual, indice) => {
    console.log(`Acumulado: ${acumula} : Atual: ${atual} : Indice: ${indice}`)
    return acumula + atual})

console.log(soma)


// Somando notas e obtendo a média final.
var notas = [2.5, 7.8, 8.0, 9.5]

var somatoria = notas.reduce((acumula, nota) => acumula + nota)
var media = somatoria / notas.length

console.log(`Total Somatório: ${somatoria}`)
console.log(`Média: ${media}`)

// Apesar da forma acima ser bem enxuta, podemos melhorar

var notas2 = [6.5, 7.0, 7.5, 8.0]

var mediaFinal = notas2.reduce((acumula, nota, indice, array) => {
    acumula += nota
    if(indice == array.length - 1){
        return acumula / array.length
    }
    return acumula
})

console.log(`Média Final: ${mediaFinal.toFixed(2)}`)

// Acima trabalhamos reduce com agregação, compactando valores.

// Para relembrar, vamos dobrar valores com map
var numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var dobrando = numeros2.map(numero => numero * 2)
console.log(dobrando)

// Agora vamos fazer a mesma coisa com reduce.

var dobrandoComReduce = numeros2.reduce((acumula, numero) => acumula.concat(numero * 2), [])

console.log(dobrandoComReduce)

// Vamos usar Filter para retornar itens maiores que 10
var itens = [2, 5, 11, 6, 20, 30, 9, 50]
var maioresQueDez = itens.filter(valor => valor > 10)
console.log(maioresQueDez)

// Agora fazendo a mesma coisa com Reduce
var maioresQueDezComReduce = itens.reduce((acumula, item) => {
    if(item > 10){
        acumula.push(item)
    }
    return acumula
}, [])

console.log(maioresQueDezComReduce)