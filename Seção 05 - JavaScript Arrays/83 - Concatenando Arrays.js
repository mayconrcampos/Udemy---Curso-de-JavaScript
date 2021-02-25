/**
 * Concatenando Arrays
 */
const num1 = [1, 2, 3, 4, 5]
const num2 = [6, 7, 8, 9, 10]

const num1Maisnum2 = num1.concat(num2, [11, 12, 13, 14, 15], "Maycon", "Campos")

console.log(num1Maisnum2, typeof num1Maisnum2)


// Concatenando com rest operator, ou spread ... três pontinhos

const a4 = [...num1, ...num2]

console.log(a4)
