/**
 * Funções Geradoras
 */

// Primeiro Exemplo

function* geradora01() {
    // Código qualquer
    yield "Valor 01"

    yield "Valor 02"

    yield "Valor 03"
}

const g1 = geradora01()


for(let valor of g1){
    console.log(valor)
}



// Segundo Exemplo

function* geradora02(max) {
    let i = 0
    while(i <= max){
        yield i
        i++
    }
}

const g2 = geradora02(100)

for(let valor of g2){
    console.log(valor)
}



// Terceiro Exemplo
function* geradora03() {
    yield 0
    yield 1
    yield 2
}

function* geradora04() {
    yield* geradora03()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora04()
for(let valor of g4){
    console.log(valor)
}


// Último exemplo

// Retornando funções

function* geradora05() {
    yield function () {
        console.log("Vim do y1")
    }

    yield function () {
        console.log("Vim do y2")
    }
}

const g5 = geradora05()
const func1 = g5.next().value
const func2 = g5.next().value


func1()
func2()