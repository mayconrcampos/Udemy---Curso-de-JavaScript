let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite outro numero: "))
let soma = num1 + num2

var div = window.document.getElementById("res")

div.innerText = `${num1} + ${num2} = ${soma}`