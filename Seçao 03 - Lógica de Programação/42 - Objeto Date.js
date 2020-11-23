/**
 * Vamos usar o Objeto Date
 */
var data = new Date()

console.log(data.getDate()) // dia do mes
console.log(data.getDay()) // 3 = quarta

console.log(data.toString())

var MarcoZeroUnix = new Date(0)
console.log(MarcoZeroUnix.toString().split(" "))


// Vamos criar uma função que retorna data formatada.
function zeroAEsquerda(num){
    return num > 9 ? num: `0${num}`
}
function formataData(data){
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundos = data.getSeconds()

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`
}


const Data = new Date()
const dataBrasil = formataData(Data)
console.log(dataBrasil)

// Pegando data de agora e data de 3 dias atrás.
const datahoje = new Date()
const ontem = new Date("2020-11-22T22:16:18.503Z")

// Exibindo o timestamp das duas datas.
const tempohoje = datahoje.getTime()
const tempoontem = ontem.getTime()

let diferenca = tempohoje - tempoontem

// Convertendo em horas
const seg = diferenca / 1000
const min = seg / 60
const hrs = min / 60

// exibindo a diferença em horas
console.log(`${hrs.toFixed(1)} horas de diferença.`)


