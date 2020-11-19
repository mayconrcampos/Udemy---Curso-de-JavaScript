/**
 * Estrutura de Decisão - Switch - Case
 */
const data = new Date()
const diaSemana = data.getDay()

console.log(diaSemana)

switch(diaSemana){
    case 0:
        console.log(`Hoje é Domingo!`)
        break
    case 1:
        console.log(`Hoje é Segunda-feira!`)
        break
    case 2:
        console.log(`Hoje é Terça-feira!`)
        break
    case 3:
        console.log("Hoje é Quarta-feira!")
        break
    case 4:
        console.log("Hoje é Quinta-feira!")
        break
    case 5:
        console.log("Hoje é Sexta-feira!")
        break

    default:
        console.log("Hoje é Sábado!")
}

// A Estrutura Switch Case em Js é igual a C e C++.