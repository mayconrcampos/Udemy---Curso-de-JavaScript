/**
 * FOR IN - Estrutura de repetição
 * 
 * Quando falamos de For In, trata-se de um laço que lê os índices do objeto iterável.
 */

const arrayFrutas = ["Maçã", "Banana", "Laranja", "Pera"]

for(const i in arrayFrutas){
    console.log(i, arrayFrutas[i])
}

// Esta modalidade de laço for simplifica bastante se for comparar com o laço tradicional vindo da Linguagem C.

const pessoa = {
    nome: "Maycon",
    idade: 38,
    cor: "Branquelo"
}

for(const i in pessoa){
    console.log(i, pessoa[i])
}