// Escreva uma função que recebe dois números e retorne o maior deles.

function maioremenor(array){
    let maior = 0
    let menor = 1000000000
    for(const numero of array){
        if(numero > maior){
            maior = numero
        }else if(numero < menor){
            menor = numero
        }
    }
    console.log(`O maior número é o ${maior}.`)
    console.log(`O menor número é o ${menor}`)
}



const numeros = [1,6,3,2,8,9,7,4,55,-2,-15,22,5,4,1,99,8,5,1,78,15]
maioremenor(numeros)