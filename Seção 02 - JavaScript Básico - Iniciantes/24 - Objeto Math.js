/**
 * Vamos estudar sobre o objeto Math.
 */
let num1 = 9.5434

// floor - arredondar numero pra baixo.
let num2 = Math.floor(num1)
console.log(num2) // 9

// ceil - arredondar pra cima
num1 = 9.4345
num2 = Math.ceil(num1)
console.log(num2)

// round - Retorna numero arredondado pro mais próximo.
num1 = 9.50
console.log(Math.round(num1)) // 10
// Se fosse abaixo de 9.5, ele retornaria 9.

// max - Encontra o maior valor de uma sequencia numérica.
console.log(Math.max(1, 3, 5, 7, -10, 4, 2, 33, 52, 12))
// min - Encontra o menor valor de uma sequencia numérica.
console.log(Math.min(1, 3, 5, 7, -10, 4, 2, 33, 52, 12))

// random - Gerando numeros aleatórios
// Na verdade o random, por padrão, gera numeros aleatórios entre 0 e 1. Para que ele gere uma sequencia de 0 a N, temos de fazer conforme abaixo.

// entre 5 e 10
// Math.random() * (max - min) + min 
const aleatorio = Math.random() * (10 - 1) + 1
console.log(Math.round(aleatorio)) // Gera numeros aleatorios entre 1 e 10.

// Valor de Pi
console.log(Math.PI) // 3.141592653589793

// operador de potenciação
console.log(Math.pow(3, 3)) // 3 ao cubo.
console.log(3 ** 3) // Faz a mesma coisa.

// Raiz quadrada
console.log(Math.sqrt(9))   // 3
console.log(9 ** (1/2))     // 3 a mesma coisa.
console.log(9 ** 0.5)       // 3 a mesma coisa.

// Em Js podemos dividir numeros por zero e não gera erros.
console.log(10 / 0) // Infinity que é igual a true







