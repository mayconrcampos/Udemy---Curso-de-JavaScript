/**
 * Comandos Break e Continue
 * 
 * Para obtermos total controle dos laços de repetição.
 */
const idades = [13, 15, 17, 19, 33, 56, 90]

let i = 0
while(i < idades.length){
    if(idades[i] != 19){
        console.log(`Idade: ${idades[i]} anos. Não é 19 anos!`)
    }else{
        console.log(`Parem tudo! Encontrei o meliante com ${idades[i]} anos.`)
        break
    }i++
}

// O Break interrompe o laço onde quer que esteja, mesmo que tivesse mais testes a serem feitos.

// Vamos ao exemplo do Continue.

for(let i of idades){
    if(i == 19){
        console.log("19 não conta")
        continue
        console.log("Isso aqui não vai rodar, pois o laço foi pulado.")
    }else{
        console.log(`Idade: ${i}`)
    }
}

// O comando Continue praticamente pula uma iteração quando o teste for true.... Ou seja, ele não interrompe o laço, mas apenas pula para a próxima iteração.