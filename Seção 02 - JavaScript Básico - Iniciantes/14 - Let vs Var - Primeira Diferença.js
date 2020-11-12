/**
 * Vamos ver a primeira diferença entre 
 * 
 * Let e Var
 * 
 */
var nome = "Maycon"
var nome = "Mayconnnn"

console.log(nome)
// Usando o var, isso daí não gera erro.

let noume = "Maaaycon"
//let noume = "Maaaaaaaycon"
console.log(noume)

// Com let, redeclarações geram erro.
// SyntaxError: Identifier 'noume' has already been declared

// Na verdade não é certo redeclarar variáveis, por isso
// que a versão ECMA Script 2015(ES6) corrigiu essa falha
// do var adicionando a funcionalidade Let. A partir daí
// Podemos declarar variáveis tanto com Var quanto Let.
// Let é uma versão atualizada e moderna de como deve
// se comportar uma variável na execução de um programa.

sobrenome = "Campos"
console.log(sobrenome)

// Não devemos declarar variável da mesma forma que Python faz...
// Devemos sempre usar Let, Var ou Const para declarar.

// Quando declaramos algo sem identificar se é Let, Var ou Const,
// na verdade estamos declarando uma variável global que poderá,
// interferir em outras variáveis. Uma bizarrice sem tamanho.