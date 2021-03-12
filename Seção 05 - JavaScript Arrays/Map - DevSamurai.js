/**
 * Map
 * 
 * Map pode modificar cada elemento do array.
 * É uma função de tradução.
 */

var numeros = [1,2,3,4,5,6,7,8,9,10]

var dobrado = numeros.map(numero => numero * 2)
console.log(dobrado)

var aoQuadrado = numeros.map(numero => Math.pow(numero, 2))

console.log(aoQuadrado)

// Transformando Fahrenheit pra Celsius
var fahrenheit = [0, 32, 45, 46, 50, 85, 91, 121]

var celsius = fahrenheit.map(fah => Math.round((fah - 32) * 5 / 9))

console.log(celsius)

// Vamos ao array de convidados novamente
var convidados = [
    {nome: "MaycOn", vip: true, idade: 38},
    {nome: "AriaNa", vip: true, idade: 35},
    {nome: "OtaVio", vip: false, idade: 10},
    {nome: "BenJamiN", vip: false, idade: 9},
]

// Transformando nomes para maiusculos, mas sem perder as outras propriedades.
// Isso é possível através do Object.assign

var nomesMaiusculos = convidados.map(nomes => {
    return Object.assign(nomes, {nome: nomes.nome.toUpperCase()})
})

console.log(nomesMaiusculos)