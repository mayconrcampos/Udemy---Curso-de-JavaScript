/**
 *Funções são blocos de código que podem executar ações quando invocadas.
 */
// tem várias maneiras de criar functions.

// A tradicional é assim.
function saudacao(){
    return "Olár!"
}
// invocando a função.
console.log(saudacao())

// Funções com parâmetros.
function soma(a, b){
    return a + b
}
// invocando a função soma com dois valores literais.
console.log(soma(234, 2345))

// Podemos atribuir funções a constantes ou variaveis
const variavel = saudacao()
console.log(variavel) // Olár!

// Valores padrão nos parâmetros
let potenciando = (x = 1, y = 1) => {
    return x ** y
}
console.log(potenciando(6, 8))

// Funções anônimas
const raizQuadrada = function (x) {
    return Math.sqrt(x)
}
console.log(raizQuadrada(18).toFixed(2))


// Funções Flechas - Arrow Functions - Modo moderno
let dividindo = (x, y) => x / y 

console.log(dividindo(50, 6).toFixed(2))

// Sem dúvida alguma, é muito simplificado.