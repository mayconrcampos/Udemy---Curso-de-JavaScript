/**
 * Funções mais importantes para manipular Arrays
 * 
 * Filter - Filtrando arrays
 * Map - Modifica Array
 * Reduce - Reduzir array em um único valor.
 * 
 * Filter sempre irá retornar um array com o mesmo número de itens ou menor que o array original.
 */

 // Nesta aula, vamos estudar o Filter.

// Vamos retornar numeros acima de 10 de um array.
const numeros = [5, 50, 80, 8, 32, 10, 9, 2, 5, 6, 33, 66, 88, 100, 12, 1, 2, 3, 250]

// Podemos fazer isso usando um laço de repetição.
const acimaDeDez = []
for(num of numeros){
    if(num > 10){
        acimaDeDez.push(num)
    }
}
console.log(acimaDeDez)

// Filter faz a mesma coisa, só que de uma forma simplificada.
// Ele não retorna um array novo, portanto devemos
// criar um novo array que receberá os valores retornados
// de filter.

const numerosAcimaDeDez = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array[indice])
    return valor > 50
})
console.log(numerosAcimaDeDez)

// Filtrando arrays somente com primos

// Cria-se um array vazio e passamos um laço com 100 repetições
// para popular este array com uma sequencia de números de 0
// a N.
const sequencia = []
for(let i = 0; i <= 100; i++){
    sequencia.push(i)
}
// Cria-se um segundo array que recebe o primeiro array com um filter.
/**
 * Neste filter, temos um parâmetro valor, que trata-se do valor do array de cada iteração do laço filter.
 * 
 * Dentro da função anônima, declara-se uma variável contadora, a qual irá receber um incremento se uma condição for satisfeita.
 * 
 * abrimos um laço for para criar uma variável contadora i, que irá iterar até o valor do item presente do array. Se o item da vez for 10, o i irá iterar de 0 a 10, e assim sucessivamente.
 * 
 * A cada volta do laço haverá um teste se valor é divisível por i, se caso true, conta será incrementado em +1.
 * 
 * No final, testamos se conta for igual a 2, este número é primo e será inserido no array primos.
 */
const primos = sequencia.filter((valor) => {
    let conta = 0
    for(let i = 0; i <= valor; i++){
        if(valor % i == 0){
            conta++
        }
    }
    if(conta == 2){
        return valor
    }
})
console.log(primos)











/**
 * Vamos retornar pessoas que tem o nome com 5 letras ou mais.
 * 
 * Vamos retornar pessoas com mais de 50 anos.
 * 
 * Vamos retornar pessoas cujo nome termina com a.
 */

 const pessoas = [
     {nome: "Maycon", idade: 38},
     {nome: "Maria", idade: 62},
     {nome: "Izair", idade: 70},
     {nome: "Ariana", idade: 35},
     {nome: "Otavio", idade: 10},
     {nome: "Benjamin", idade: 9},
     {nome: "João", idade: 47},
     {nome: "Jeú", idade:58}

 ]

 // Retornando pessoas cujos nomes possuem 5 ou mais letras.
 const cincoLetrasOuMais = pessoas.filter(valor => {
     return valor.nome.length >= 5
 })

 console.log(cincoLetrasOuMais)


// Retornando pessoas cujas idades são acima de 50 anos.

const acimaDe50 = pessoas.filter(valor => {
    return valor.idade > 50
})

console.log(acimaDe50)

const terminaComA = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith("a")

})
console.log(terminaComA)