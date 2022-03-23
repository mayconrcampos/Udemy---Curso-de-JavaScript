/**
 * Operadores Aritméticos
 * 
 * De atribuição e Incremento
 * 
 * + - / *  - Aritméticos
 * + Adição
 * - Subtração
 * / Divisão
 * // Divisão inteira
 * ** Exponenciação
 * % Resto da divisão
 * 
 * =        - Atribuição
 * ++       - Incremento
 * --       - Decremento
 * 
 */
const num1 = "5"
const num2 = 10
console.log(num1 + num2)

let num3 = 100
let num4 = 200
for(i = 0; i <= 100; i++){
    num3++
    num4--
    console.log(num3, num4)
}

// Precedência é a mesma de Python

let n1 = (35 - 5 * 4) ** 40
console.log(n1)


let numer1 = 10
let numer2 = 10

for(i = 0; i < 10; i++){
    ++numer1
    --numer2
    console.log(numer1, numer2)
}

let numer3 = parseInt("5")
let numer4 = parseFloat("210.99")
console.log(numer3 * numer4)