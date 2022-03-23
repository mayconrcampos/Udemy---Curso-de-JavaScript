/**
 * Vamos estudar nesta aula sobre:
 * 
 * Atribuição via desestruturação com Objetos.
 *  */

const pessoa = {
    nome: "Maycon",
    sobrenome: "Campos",
    idade:38,
    endereço: {
        av:"Renato Ramos da Silva, 3013",
        bairro:"Vila Nova"
    }
};

console.log(pessoa.endereço)

// Atribuição via desestruturação.

const {nome: maycon = "", sobrenome, idade} = pessoa;

console.log(maycon, sobrenome, idade)

// pegando rua e número de endereço
const {endereço: {av, bairro}, endereço} = pessoa;
console.log(av, bairro)
console.log(endereço)

// Pegando o restante das coisas do objeto
const carro = {
    marca:"Ford",
    cor:"Azul",
    portas:4,
    combustivel:"Gasolina"
}
const {marca, ...resto} = carro;
console.log(marca)
console.log(resto)
