/**
 * Diferenças entre Let Var e Const
 */
let nome = "Maycon"
var nome2 = "Ariana"

//let nome = "Maaaaycon" SyntaxError: Identifier 'nome' has already been declared
// Variaveis let não podem ser redeclaradas no mesmo escopo.
//var nome2 = "Ariaaaaana" // Var pode ser redeclarada no mesmo escopo.

const verdadeira = true

if(verdadeira){
    let nome = "Otávio" // Variável let pode ser redeclarada dentro de outro escopo, ou seja, só será visível dentro do escopo da condicional if.
    console.log(nome, nome2)
}

console.log(nome) // Maycon

/**
 * Resumindo: Let possui escopo de blocos.
 * Var só tem escopo de função.
 */

if(verdadeira){
    //let nome = "Marinalva"
    console.log(nome)
    if(verdadeira){
        //let nome = "Antônia"
        console.log(nome)
    }
}
// Foram declaradas duas variáveis diferentes mas com mesmo nome. Cada uma visível dentro do escopo de seu bloco.

// Quando executamos o código, o motor do JavaScript procura executar a variável let do escopo imediato, exemplo, aquele declarado dentro do if aninhado, se caso não houver uma variável nome declarada neste escopo, ele sobe ao escopo do primeiro if pra procurar a variável nome... Se caso não encontrar no bloco if, ele irá procurar no escopo global.

// Variáveis let não são içadas (hoisting).

// Escopo de função

var nome2 = "Maecom"

function oi(){
    console.log(`OI ${nome2}!`)
}

oi()

// Hoisting - Acontece algo esquisito com var ou com funções criadas com a palavra function.

console.log(sobrenome) // undefined

var sobrenome = "Maaaaaaaayyyyccoonn"
//Era pra dar um erro, mas não, quando declaramos variáveis com var, ocorre uma elevação, ou hoisting, onde o Js eleva a declaração desta variável.

// Levando em conta que quando declaramos uma variável sem atribuir valor a elas, JavaScript atribui o valor undefined a ela.