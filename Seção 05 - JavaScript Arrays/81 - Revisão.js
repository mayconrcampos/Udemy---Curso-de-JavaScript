/**
 * Revisando o básico sobre Arrays
 */

 const nomes = [
     "Maycon", "Maria", "Joana", "Ariana"
 ]

 nomes[2] = "Aurélia"

 console.log(nomes)

 delete nomes[2]

 console.log(nomes)

 // Declarando array usando o construtor de Array

 const nomes2 = new Array("Maycon", "Ariana", "Benjamin", "Otávio")
 console.log(nomes2)
 // funciona a mesma coisa

 const nomes3 = nomes2
 console.log(nomes3)
 // Isso não cria uma cópia, mas apenas referencia o array
 // Tudo o que fizer em um refletirá no outro.

 // Pra copiar, devemos fazer o seguinte.
 let nomes4 = [...nomes2]

 nomes4.push("Joãozinho")
 console.log(nomes2, nomes4)


 console.log(nomes4.length)

 // pop e shift

 // pop remove o último elemento
 nomes4.pop()
 console.log(nomes4)

 // push adiciona elementos no ultimo indice do array

 nomes4.push("Zé Droguinha")


 // shift remove o primeiro elemento
 nomes4.shift()
 console.log(nomes4)


 // unshift adiciona elemento no indice 0 do array
 nomes4.unshift("Maurício")
 nomes4.unshift("Sapopemba")

 console.log(nomes4)


 // fatiando arrays
 const novo = nomes4.slice(1, 4)
 console.log(novo)

// convertendo string em array
const nome = "Maycon Robson Campos"
const nomelista = nome.split(" ")
console.log(nomelista)

for(let nome of nomelista){
    console.log(nome)
}


// tranformando array em string
const arrey = ["Maycon", "Robson", "Campos"]
const arreystringue = arrey.join(" ")
console.log(arreystringue)
