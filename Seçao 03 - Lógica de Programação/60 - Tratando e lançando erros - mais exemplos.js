/**
 * Mais alguns exemplos.
 */

try {
    // Bloco é executado quando não há erros.
    console.log("Abri o arquivo.")
    console.log("Manipulei o arquivo e gerou erro.")
    console.log(erro) // induzindo erro.
    console.log("Fechei o arquivo.")
} catch (e){
    // Bloco é executado quando existem erros.
    console.log("Tratando o erro.")
} finally {
    // Sempre é executado, pode ser util quando
    console.log("Fechar o arquivo.")
}   

// este é o fluxo do tratamento de um erro com try, catch e finally.

function retornaHora(data){
    if(data && !(data instanceof Date)){ // Se data não for uma instancia de Date
        throw new TypeError("Esperando instância de Date")
    }
    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    })
}

try {
    const hoje = new Date()
    const hora = retornaHora(hoje)
    console.log(hora)
} catch(e){
    console.log(e)
    
}finally {
    console.log(" Tenha um bom dia.")
}
