/**
 * Laços While e Do While
 * 
 */

 const idades = [11, 14, 18, 22, 32, 45, 70, 38, 17, 22, 25, 98, 102, 65, 47, 79, 20]

 let i = 0
 while(i < idades.length){
    if(idades[i] < 18){
        console.log(`${idades[i]} Anos - De menor.`)
    }else if(idades[i] >= 18 && idades[i] < 45){
        console.log(`${idades[i]} Anos - Está na flor da idade mas já pode ser preso.`)
    }else if(idades[i] >= 45 && idades[i] < 65){
        console.log(`${idades[i]} Anos- Já chegou na idade do Condor, ou seja, Condor aqui, Condor alí.`)
    }else if(idades[i] >= 65){
        console.log(`${idades[i]} Anos - Aproveite a aposentadoria!`)
    }i++
 }
 // Como podemos perceber, na Estrutura de Repetição While, o bloco é executado somente enquanto o teste condicional for true, ou seja. Enquanto i for menor que o número de itens dentro do array.
let conta = 0
let soma = 0
 do{
     soma += idades[conta]
     console.log(conta, idades.length)
     conta++

 }while(conta < idades.length)

 console.log(soma)

 // Na estrutura Do While, o bloco Do é executado primeiro, depois é feito o teste condicional do While.
 // Então, mesmo que o teste venha a dar false, ele será executado, ao menos, uma vez.


 // Vamos implementar uma função Random pra utiliza-la dentro de um laço
 function random(min, max){
     const r = Math.random() * (max - min) + min
     return Math.floor(r)
 }

let numero = 0
do{
    numero = random(5, 150)
    console.log(numero)
}while(numero != 50)
console.log(`Número ${numero}! Fim do Laço Do While!`)

// Aqui está um exemplo perfeito do quando o Laço while pode ser importante na execução de nosso código, pois, ele não exige que digamos quantas iterações necessitamos... Na verdade não sabemos quantas iterações serão necessárias pra ele encerrar, enquanto o teste não for true, ele continuará repetindo o laço por toda a eternidade, pelo século dos séculos, amém.