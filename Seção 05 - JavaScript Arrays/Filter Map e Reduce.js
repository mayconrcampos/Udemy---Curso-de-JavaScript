/**
 * Podemos também agregar Filter Map e Reduce, utilizando-os juntos.
 */

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Vamos isolar os números pares e dobrar cada valor retornado.

var paresDobrados = numeros.filter(valor => valor % 2 == 0).map(valor => valor * 2)

console.log(paresDobrados) // Caralho que demais!


// Vamos a outro exemplo:

var carros = [
    {marca: "Audi", cor: "preto"},
    {marca: "Ford", cor: "branco"},
    {marca: "Chevrolet", cor: "amarelo"},
    {marca: "Honda", cor: "azul"},
    {marca: "Toyota", cor: "laranja"},
    {marca: "Volkswagen", cor: "verde"},
]

// Vamos agrupar retornos com filter, map e reduce.

// Vamos fazer com que o reduce retorna um objeto em que a chave seja a propriedade que quisermos selecionar.
console.log("----------------------")

function groupBy(array, prop) {
    var value = array.reduce((total, item) => {
        var key = item[prop]
    }, {})
}

var agrupados = groupBy(carros, "marca")
console.log(agrupados)

