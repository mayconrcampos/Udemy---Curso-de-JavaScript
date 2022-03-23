/**
 * Funções recursivas
 */

 function recursiva(maximo) {
     if(maximo >= 10){
         return
     }
     maximo++
     console.log(maximo)
     recursiva(maximo)
 }
 recursiva(-20)


 function fatorial(numero) {
    if(numero == 1) return numero
    return fatorial(numero - 1) * numero
 }

console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(8))

// Essa daqui não é recursiva mas quis fazer pra exercitar a lógica.
function fibo(numero) {
    let primeiro = 1
    let segundo = 1
    let terceiro = segundo + primeiro
    for(let i = 1; i <= numero; i++){
        console.log(primeiro)
        primeiro = segundo
        segundo = terceiro
        terceiro = segundo + primeiro
    }
}

fibo(10)
