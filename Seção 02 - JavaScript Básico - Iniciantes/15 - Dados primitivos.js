/**
 * Dados Primitivos
 */
const stringue01 = "Maycon" // Strings
const stringue02 = 'Maycon' // Strings
const stringue03 = `Maycon` // Strings

const num1 = 10 // Number
const num2 = 10.99 // number

var nomeAluno // Undefined - Não aponta pra lugar nenhum da memória.
var nomeAluno = "Maycon" // String

let nulo = null // null -> Não aponta pra lugar nenhum da memória.
let nulo1
// nulo é igual a undefined....
/**
 * No entanto undefined só é usado pelo sistema, quando este
 * retorna algum valor nulo... Nós, como programadores, só
 * devemos utilizar null nos programas quando queremos
 * referir a valores nulos.
 */
console.log(nulo == nulo1)

const booleano = true
const booleano01 = false
console.log(0 == true)

console.log(typeof stringue01, typeof num2, typeof nomeAluno, typeof nulo)

const a = [1, 2]
const b = a


console.log(a, b)

b.push(3)
console.log(a, b)

// Valor por referência, onde a e b apontam para o mesmo
// endereço de memória... Portanto, se modificar b, o A
// também será modificado.

let n = 10
let m = n

console.log(n, m)
n = 15
console.log(n, m)

// Tipo de dados primitivos são: string, number, undefined, null, boolean e symbol.