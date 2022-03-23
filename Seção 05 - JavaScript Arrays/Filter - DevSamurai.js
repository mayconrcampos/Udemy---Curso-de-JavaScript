/**
 * Filter
 */

var numeros = [10, 30, 40, 50 , 5, 8, 3, 70, 77, 52, 36, 21, 79, 22]

// Para filtrar valores entre 20 e 60 precisamos utilizar um laço de repetição para iterar sobre o array.

var filtrados = []

for(let num of numeros){
    if(num > 20 && num < 60){
        filtrados.push(num)
    }
}
console.log(filtrados)

// Para isto temos a função Filter, pois podemos fazer isso de forma bem mais limpa e elegante.

var menoresQueDez = numeros.filter(valor => valor < 10)

console.log(menoresQueDez)

var entre20e60 = numeros.filter(valor => valor > 20 && valor < 60)

console.log(entre20e60)

// Calcula Pares
var pares = numeros.filter(numero => numero % 2 == 0)
var impares = numeros.filter(numero => numero % 2 != 0)

console.log(`Pares: ${pares}`)
console.log(`Ímpares: ${impares}`)

// Filter também pode trabalhar com outros tipos de dados.

var nomes = ["Maycon", "Terezinha", "Douglas", "Ariana", "Izair", "Jó"]

var nomesComM = nomes.filter(nome => nome.startsWith("M"))
console.log(nomesComM)

var iniciaComAr = nomes.filter(nome => nome.startsWith("Ar"))
console.log(iniciaComAr)

// Filtrando Objetos

var filmes = [
    {titulo: "Titanic", duracao: 195, nota: 7.5},
    {titulo: "The Avengers", duracao: 203, nota: 9.5},
    {titulo: "Mr. Bean", duracao: 90, nota: 6.5},
]

// Selecionando filmes com nota acima de 8
var melhorFilme = filmes.filter(filme => filme.nota > 8)
console.log(melhorFilme)

// Selecionando filmes com nota abaixo de 8
var filmesRuins = filmes.filter(filme => filme.nota < 8)
console.log(filmesRuins)

var convidados = [
    {nome: "Maycon", vip: true, idade: 38},
    {nome: "Ariana", vip: true, idade: 35},
    {nome: "Otavio", vip: false, idade: 10},
    {nome: "Benjamin", vip: false, idade: 9},
]

// Filtrar somente os vips
var vips = convidados.filter(nome => nome.vip)
console.log(vips)

// Filtrar somente nomes que possuem idade abaixo de 18
var menores = convidados.filter(nome => nome.idade < 18)
console.log(menores)









