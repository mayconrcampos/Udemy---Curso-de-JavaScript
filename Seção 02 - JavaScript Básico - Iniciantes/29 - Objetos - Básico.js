/**
 * Vamos estudar o básico sobre objetos.
 */

 // Podemos criar objetos em Js assim.
const nome01 = "Maycon"
const sobrenome01 = "Campos"
const idade01 = 38

const nome02 = "Ariana"
const sobrenome02 = "Campos"
const idade02 = 35

// para simplificar isso, usamos os objects

// Abaixo vamos criar um objeto literal, que é a forma mais simples de se criar um objeto.
const pessoa = {
    nome:"Maycon",
    sobrenome:"Campos",
    idade:38
}
console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade)

// Para criarmos mais pessoas, devemos modificar a estrutura do objeto e depois chamá-lo... Não é o ideal.

// Podemos criar objetos dinamicamente.
function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa("Maycon", "Campos", 38)
const pessoa2 = criaPessoa("Maria", "Rosa", 63)
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)
// Podemos criar variáveis e cada uma dela assumir um valor diferente de retorno dessa função criaPessoa. Teremos várias pessoas utilizando a mesma função.

// Podemos criar também funções dentro dos objetos, que assim passam a se chamar métodos. Toda função declarada dentro de um objeto é um método.
const pessoa3 = {
    nome: "Maycon",
    sobrenome: "Campos",
    idade: 38,

    saudar(){
        console.log(`Olár! Bom dia abiguinho ${this.nome}!`)
        console.log(`Seu sobrenome é ${this.sobrenome} e tens ${this.idade} anos!`)
    },
    aniversario(){
        this.idade++
    }
}
    
pessoa3.saudar()
pessoa3.aniversario()

pessoa3.saudar()
pessoa3.aniversario()

pessoa3.saudar()
pessoa3.aniversario()
