/**
 * Algumas coisas sobre strings em JavaScript.
 */
// Podemos usar aspas simples dentro de uma string que foi aberta com aspas duplas, ou vice versa.
let umastring = "Maycon 'Robson' Campos"
let outrastring = 'Maycon "Robson" Campos'

console.log(umastring, outrastring)

// Também podemos escapar o caractere usando a barra invertida.
umastring = "Escapando caractere \"com\" barra invertida."
console.log(umastring)

// Para exibir uma barra invertida temps de escapar ela também.
outrastring = "Maycon \\Robson \\Campos"
console.log(outrastring)

//Strings são indexadas assim como em Python, pois é iterável.
// Portanto podemos iterar sobre elas com laços.
for(i = 0; i < outrastring.length; i++){
    console.log(outrastring[i]) 
}

// Portanto, assim como C ou Python, podemos acessar cada caractere pelo índice.
console.log(outrastring[5])
// diferente de python, -1 não retorna o último elemento.
console.log(outrastring[-1]) // retorna undefined

console.log(umastring.charAt(6)) // mesma coisa que umastring[6]
console.log(umastring.charCodeAt(6)) // retorna o código da tabela ASCII
console.log(umastring.concat(outrastring)) //junta duas strings, sendo a segunda usada como argumento.
console.log(`${umastring} ${outrastring}`) // faz a mesma coisa.

// Posso pesquisar por índice.
console.log(umastring.indexOf("caractere")) // Retorna o indice do início da palavra. Neste caso 10.
// Caso não exista a palavra, ele retorna -1.

