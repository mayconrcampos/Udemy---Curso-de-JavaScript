const nome = "Maycon"
const sobrenome = "Campos"
const idade = 37
const peso = 85
const altura = 1.70

let imc = peso / (altura * altura)
let anoNascimento = 2020 - idade

// Fazendo o exercício usando template strings.
console.log(`${nome} tem ${idade} anos pesa ${peso} kgs.`)
console.log(`Tem ${altura}m de altura e seu IMC é de ${imc.toFixed(2)}.`)
console.log(`${nome} nasceu em ${anoNascimento}.`)

