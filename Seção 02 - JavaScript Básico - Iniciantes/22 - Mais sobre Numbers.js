/**
 * Vamos falar mais um pouco sobre Numbers
 */
let num1 = 3500  // Number
let num2 = 2.5 // Number

console.log(num1.toString() + num2)
console.log(typeof num1) // Number
// Ele só foi alterado dentro do console.log.

// Para que ele seja alterado permanente, devemos fazer assim:
//num1 = num1.toString()
//console.log(num1, typeof num1)

// Sabendo disso, podemos ver a representação binária de num1.
console.log(num1.toString(2))

// Podemos limitar as casas decimais com toFixed()
let num3 = 10.698545689
console.log(num3.toFixed(2))

// Para verificar se um número é inteiro com a função isInteger.
let num4 = 10.0
console.log(Number.isInteger(num4)) // Retorna verdadeiro ou falso.
// true

// Verificando se o valor de retorno é NaN - Not a Number
let ola = "Olár!" * num4
console.log(Number.isNaN(ola))
// true

// Isso tudo para dizer que não é pra fazermos contas usando strings.

// IEEE 754-2008 - Precisão das casas decimais
let numero01 = 0.7
let numero02 = 0.1
console.log(numero01 + numero02) //0.79999999999999

numero01 += numero02
console.log(numero01)

numero01 += numero02
console.log(numero01)

// Percebe-se que a soma não dá 1
numero01 += numero02
console.log(numero01)

// Aqui podemos transformar o resultado em 1, porém não resolve o problema.
console.log(numero01.toFixed(), Number.isInteger(numero01))
// 1 false
// apesar de ser 1, este 1 não é considerado um número inteiro.

// Para resolvermos este impasse:
numero01 = parseFloat(numero01.toFixed(2))
console.log(numero01, Number.isInteger(numero01)) // 1 true
// Agora sim o JavaScript considera que numero01 é um inteiro.

numero01 = Number(numero01.toFixed(2))

numero01 += numero02
console.log(numero01)

numero01 += numero02
console.log(numero01)

numero01 += numero02
console.log(numero01)

console.log(numero01, Number.isInteger(numero01))

// nada disso resolveu.
// A unica maneira de resolver é fazendo conta.
numero01 = 0.7
numero02 = 0.1
numero01 = ((numero01 * 100) + (numero02 * 100)) / 100
numero01 = ((numero01 * 100) + (numero02 * 100)) / 100
numero01 = ((numero01 * 100) + (numero02 * 100)) / 100

console.log(numero01) // 1






