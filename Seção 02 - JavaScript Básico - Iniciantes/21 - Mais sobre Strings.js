/**
 * Algumas coisas sobre strings em JavaScript.
 * 
 * Eu sei que é chato botar tanta coisa dentro de um arquivo só, mas vai assim mesmo.
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

console.log(umastring.indexOf("com", 10))
// Quando utilizamos o segundo argumento, anda mais é que indicando qual indice inicia a pesquisa. Neste caso, a partir do indice 10 começou a procura pela string "com"... Achou-a no indice 21. Se não encontrar nada, retorna -1.

console.log(umastring.lastIndexOf("com"))
// mesma coisa que indexOf, mas a busca vem de trás para frente.
console.log(umastring.lastIndexOf("caractere", 9))
// Também, podemos usar a procura de tráz indicando um índice para começar a procura, só que neste caso de trás pra frente.

// usando RegEX pra encontrar strings com todas as letras minúsculas.
console.log(umastring.match(/[a-z]/g))
// O match encontra um array, pois foi indicado com a flag g.

// Abaixo estamos pedindo pra encontrar a letra r
console.log(umastring.search(/r/))
// ele retorna o indice desta letra.

// o Replace substitui letras ou palavras.
console.log(umastring.replace("barra","tromba"))
// Logo, substituimos a palavra barra por tromba. Ficou estranho, mas deixa assim mesmo.


let stringpraestudar = "O rato roeu a roupa do rei de roma"

console.log(stringpraestudar.length)
// retorna o tamanho da string contando os espaços vazios.

/**
 * FATIAMENTO DE STRINGS
 */

// Podemos fatiar a string para copiar certos trechos.
console.log(stringpraestudar.slice(2, 6)) // rato

// Podemos indicar o indice negativo como em Python para acessar de trás pra frente.
console.log(stringpraestudar.slice(-4)) // roma

console.log(stringpraestudar.substring(stringpraestudar.length - 4)) // Roma
// Percebemos que substring faz a mesma coisa que slice, só que de uma maneira pior.

/**
 * DIVIDINDO STRINGS COM SPLIT
 */
let divideeu = "Vamos dividir essa string."
console.log(divideeu.split(" "))
console.log(divideeu.split("r"))
console.log(divideeu.split("a"))

// Passando tudo para Maiusculas e minusculas
console.log(divideeu.toUpperCase())
console.log(divideeu.toLowerCase())

