/**
 * Tratando e lançando erros com 
 * 
 * Try
 * Catch
 * Throw
 */

 // Este é um bloco básico try e catch para tratamento de erros.
try{
    console.log(variavelquenaoexiste)
}catch(err){
    console.log(`${err} - Deu ruim!`)
}

// Vamos a outro exemplo, só que dentro de uma função.

function soma(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new TypeError("X e Y precisa ser numeros.")
    }
    return x + y
}

try {
    console.log(soma(9, 5))
    console.log(soma(10, 5))
}catch(errinho){
    console.log(errinho)
}
