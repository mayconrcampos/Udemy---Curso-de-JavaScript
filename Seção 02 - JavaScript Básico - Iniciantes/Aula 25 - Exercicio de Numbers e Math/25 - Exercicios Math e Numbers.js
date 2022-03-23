function calcular(){
    var numero = Number(prompt("Digite um número"))
    var resultado = document.getElementById("res")
    var num = document.getElementById("num")

    num.innerHTML = `Seu número é: ${numero}.`

    resultado.innerHTML = `Raiz Quadrada de ${numero} = ${Math.sqrt(numero)}`

    if(Number.isInteger(numero)){
        resultado.innerHTML += `<br>${numero} é inteiro: true`
    }else{
        resultado.innerHTML += `<br>${numero} é inteiro: false`
    }
    if(Number.isNaN(numero)){
        resultado.innerHTML += `<br>É NaN: true`
    }else{
        resultado.innerHTML += `<br>É NaN: false`
    }

    resultado.innerHTML += `<br>Arredondado pra baixo: ${Math.floor(numero)}`
    resultado.innerHTML += `<br>Arredondado pra cima: ${Math.ceil(numero)}`
    resultado.innerHTML += `<br>Com duas casas decimais: ${numero.toFixed(2)}`
}