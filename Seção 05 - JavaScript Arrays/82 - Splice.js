/**
 * Método Splice meche no array original
 */

 const nomes = ["Maycon", "Ariana", "Otavio", "Agenor", "Azineth", "Maria Terezinha", "Izair", "Benjamin", "Raphael", "Benhur", "Bruna", "Ivana", "Tiaguinho"]

 // Sintaxe
// nomes.splice(indice, numero de elementos, elementos substitutos . . .)
 nomes.splice(-1, 1, "Cazalber", "Thiaguinho", "Joãozinho")


 console.log(nomes)

 // Adicionando elementos pelo indice 0, igual shift
 nomes.splice(0, 0, "Fidel Castro")
 console.log(nomes)

 // Adicionando elementos pelo indice -1, igual push

 nomes.splice(nomes.length, 0, "Luis Inácio Lula da Silva", "Zé Dirceu", "Homem de Neanderthal")
 console.log(nomes)

 // Excluindo o último elemento
 nomes.splice(-1, 1)
 console.log(nomes)

 // Excluindo primeiro elemento
 nomes.splice(0, 1)
 console.log(nomes)

 // Splice é animal, faz muita coisa.. Muita utilidade.
 