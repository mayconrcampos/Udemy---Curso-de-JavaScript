/**
 * Declaração de função utilizando a palavra function
 * 
 * Funções declaradas com function, ocorre o function hoisting. Onde a engine do Js eleva a declaração de funções definidas com function para o topo.
 */
digaOi()
function digaOi(){
    console.log("Ooooiii!")
}
// Com o function hoisting, podemos chamar a função antes da declaração.

// Funções são fisrt class objects - Objetos de primeira Classe.
// Podemos tratar as funções como dados.

// function Expression - é quando atribuimos uma função à uma variável.
const nome = function(){
    console.log("Meu nome é Maycon")
}
nome()

function executaFuncao(funcao){
    funcao()
}

executaFuncao(nome)

// Olha que coisa louca, a função executaFuncao recebe uma outra função como argumento, e executa a mesma.

// Arrow Function - E uma function Expression bem curta.
const funcArrow = () => {
    console.log("Sou uma Arrow Function")
}
funcArrow()

// Podemos declarar uma função dentro de um objeto

const objeto = {
    falar: function () {
        console.log("Sou um obejeto!")
    }
}

objeto.falar() // Sou um obejeto!

// podemos ocultar a palavra function na declaração dela...
// ao inves de falar: function ()
// Podemos fazer assim
//falar(){
//    ...
//}