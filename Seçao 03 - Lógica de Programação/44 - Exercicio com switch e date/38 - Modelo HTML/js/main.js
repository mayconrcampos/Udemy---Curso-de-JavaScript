

function atualiza(){
    var textohora = document.getElementById("hora")

    var datahoje = new Date()
    var diadasemana = ""

    switch(datahoje.getDay()){
        case 0:
            diadasemana = "Domingo"
            break
        case 1:
            diadasemana = "Segunda-Feira"
            break
        case 2:
            diadasemana = "Terça-Feira"
            break
        case 3:
            diadasemana = "Quarta-Feira"
            break
        case 4:
            diadasemana = "Quinta-Feira"
            break
        case 5:
            diadasemana = "Sexta-Feira"
            break
        default:
            diadasemana = "Sábado"

    }

    var mes = ""

    switch(datahoje.getMonth()){
        case 0:
            mes = "Janeiro"
            break
        case 1:
            mes = "Fevereiro"
            break
        case 2:
            mes = "Março"
            break
        case 3:
            mes = "Abril"
            break
        case 4:
            mes = "Maio"
            break
        case 5:
            mes = "Junho"
            break
        case 6:
            mes = "Julho"
            break
        case 7:
            mes = "Agosto"
            break
        case 8:
            mes = "Setembro"
            break
        case 9:
            mes = "Outubro"
            break
        case 10:
            mes = "Novembro"
            break
        default:
            mes = "Dezembro"
    }   

    textohora.innerHTML = `${diadasemana}, ${datahoje.getDate()} de ${mes} de ${datahoje.getFullYear()}<br>${datahoje.getHours()}:${datahoje.getMinutes()}:${datahoje.getSeconds()}`
}