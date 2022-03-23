/**
 * Funções Fábrica
 */
// Factory Function - Funções fábrica
 function criaPessoa(nome, sobrenome, altura, peso){
     return {
         nome, 
         sobrenome,
         
         

         fala(assunto){
             return `${this.nome} está falando sobre ${assunto}`
         },

         altura: altura,
         peso: peso,

         get imc() {
             const indice = this.peso / (this.altura ** 2)
             return `IMC ${this.nome} é ${indice.toFixed(2)} ` 
         },

         get nomeCompleto(){
             return `Nome Completo: ${nome} ${sobrenome}`
         }
     }
 }

 const p1 = criaPessoa("Maycon", "Campos", 1.70, 94)

console.log(p1)
console.log(p1.nomeCompleto)
console.log(p1.fala("JavaScript"))
console.log(p1.imc)
console.log(p1.status)

const p2 = criaPessoa("Ariana", "Campos", 1.55, 62)
console.log(p2)
console.log(p2.nomeCompleto)
console.log(p2.fala("Fotografia"))
console.log(p2.imc)




 // Constructor function - Função construtora

