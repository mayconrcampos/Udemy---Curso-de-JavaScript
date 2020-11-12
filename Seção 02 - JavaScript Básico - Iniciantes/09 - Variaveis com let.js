/**
 * Variáveis com let
 */
let nome = "Maycon"
let filho = "Otavio"
let filho2 = "Benjamin"
let esposa = "Ariana"

 console.log(nome, "Nasceu em 1982")
 console.log("Em 2014 ",nome, "casou-se com", esposa)
 console.log("Ariana vive muito feliz com o ", nome)
 console.log("O filho de", esposa, " se chama ", filho)
 console.log("O filho de", nome,"se chama", filho2)

 // utilizamos sempre o let para declarar variável.
 // var é uma forma antiga.

 // Regras para criação de variaveis
 // Não podemos criar variaveis com palavras reservadas

 //let break = "Maycon"
 //console.log(break)

 // As variáveis precisam ter nomes significativos
 let n = "Maycon"
 let i = "Campos"
 // Assim que o código ficar gigante, com muitas variaveis
 // a gente não reconhece mais essa variável.

 // já se fizermos assim;
 let nome = "Maycon"
 let sobrenome = "Campos"
 let idade = 37

 // Não podemos iniciar o nome de uma variavel com numero.

 //let 1 = 1
// isso retorna erro.

// Variaveis não podem ter espaços ou traços

//let cliente-nome;
// let cliente nome;

// caso precisemos botar variaveis de nome composto
// por convenção utilizamos a notação camelcase ou traço underline.
let nome_cliente = "Maycon Campos"
let nomeCliente = "Maycon Robson Campos"

// As variaveis em Js são case sensitive.
let nome = "Maycon"
let Nome = "Campos"

// São duas variaveis diferentes.

// Não podemos declarar uma variavel com let duas vezes.
// Podemos apenas declarar em uma linha, e depois,
// em outra linha, podemos atribuir o valor.

// Não utilize Var, sempre utilize Let
