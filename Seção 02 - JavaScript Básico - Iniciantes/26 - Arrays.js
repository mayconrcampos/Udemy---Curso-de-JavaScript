/**
 * Vamos estudar o básico sobre Arrays
 */
let alunos = [
    "Maycon",
    "Ariana",
    "Otávio",
    "Benjamin"
]
// Iterando sobre o array nomes.
for(nome in alunos){
    console.log(alunos[nome])
}

// iterando sobre o array números.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(numero in numeros){
    console.log(numeros[numero])
}

// Adicionando item ao array
numeros.push(11)
console.log(numeros)

alunos.push("Maria Terezinha")
console.log(alunos)

// Deletando ultimo item da lista
alunos.pop()
console.log(alunos)

// podemos salvar o item que está sendo deletado numa variável
let removido = numeros.pop()
console.log(numeros)
console.log(`Foi removido: ${removido}`)

// Verificando tamanho do  array
console.log(numeros.length, alunos.length) // 10 4

// Inserir item no indice 0 - unshift
alunos.unshift("Dollynho")
console.log(alunos)

// Remover item do índice 0 - shift

removido = numeros.shift()
console.log(`Removido: ${removido}`) // 1
console.log(numeros)

// Removendo item pelo índice - delete
delete alunos[1]
console.log(alunos)
// Percebemos que ele remove o item, mas não o indice.

// Fatiar arrays com slice
console.log(alunos.slice(0, 3))
console.log(numeros.slice(0, -1))

// Descobrindo o tipo de array
console.log(typeof alunos) // object
console.log(alunos instanceof Array) // true

/**
 * Resumo
 * 
 * shift - Remove elemento do começo
 * unshift - adiciona elemento do começo
 * push - adiciona ao final
 * pop - remove do final
 */