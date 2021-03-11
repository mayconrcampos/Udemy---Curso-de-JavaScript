/**
 * Função Map
 * 
 * é similar ao filter, mas a única diferença é o retorno final. 
 * 
 * Na map, ela altera valores do nosso array.
 */

// Dobrando os números

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/**
 * Podemos passar os mesmos três parâmetros que passamos em Filter.
 * 
 * valor, indice, array
 * 
 * Map sempre vai retornar um array do tamanho do array original.
 */

let dobrados = numeros.map(valor => {
    return valor * 2
})

console.log(dobrados)


// Utilizando map em arrays de objetos


// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: "Maycon", idade:38},
    {nome: "Ariana", idade:35},
    {nome: "Terezinha", idade:63},
    {nome: "Benhur", idade:32},
    {nome: "Izair", idade:73},
    {nome: "Nico", idade:58},
]

// somente os nomes
 let nomes = pessoas.map((valor, indice, array) => {
     return `${valor.nome}`
 })

 console.log(nomes)

 // somentes as idades
 let semnome = pessoas.map(valor => {
     return valor.idade
 })

console.log(semnome)

// adicionando a chave id

let addId = pessoas.map((valor, indice) => {
    valor["id"] = ++indice
    return valor
})
console.log(addId)
console.log(pessoas)


// Todos os maps acima tanto criaram um novo array quanto modificaram o antigo, isso porque as funções maps trabalham com parâmetros de referência, ou seja, quando criamos o array novo, modificamos o antigo, pois os parâmetros apontam ao antigo array por referência.

// Para que isso não aconteça, devemos fazer uma cópia para assim modificar sem que o antigo seja alterado.

const comIds = pessoas.map((valor, indice) => {
    const novoArray = {...valor}
    novoArray['novoCoiso'] = indice ** 2
    return novoArray
})

console.log(pessoas)
console.log(comIds)

// Filter não altera o array original, mas pode retornar um novo array até do tamanho do array original.
