/**
 * Função construtora retorna objetos
 * Função fábrica fabrica objetos
 * 
 * Na função construtora temos de escrever com uma convenção diferente.
 * 
 * Precisamos sempre iniciar o nome da função com letra maiúscula.
 * Funções construtoras são instanciadas com a palavra New.
 * 
 */

 function Pessoa(nome, sobrenome) {
     // Atributos Privados
     const ID = 1234

     // Atributos Públicos ou Métodos Públicos
     // Podem acessar fora da função utilizando a notação de ponto.
     this.nome = nome
     this.sobrenome = sobrenome

     this.digaOi = () => {
         console.log(`Olá! Meu nome é ${this.nome} ${this.sobrenome}! Tenha um ótimo dia!`)
     }
 }


 let p1 = new Pessoa("Maycon", "Campos")
 let p2 = new Pessoa("Ariana", "Campos")

 console.log(p1.nome, p1.sobrenome)
 console.log(p2.nome, p2.sobrenome)

 p1.digaOi()
 p2.digaOi()


