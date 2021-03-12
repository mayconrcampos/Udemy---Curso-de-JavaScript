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

function groupBy(array, propriedade) {
    var value = array.reduce((acumulado, item) => {
        var key = item[propriedade]

        acumulado[key] = (acumulado[key] || []).concat(item)

        return acumulado
    }, [])

}

var agrupados = groupBy(carros, "cor")

console.log(agrupados)

// https://www.youtube.com/watch?v=nhPudffllkg&t=4670s