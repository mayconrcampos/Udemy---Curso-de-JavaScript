/**
 * Escopo Léxico
 */

 const nome = "Mycon"

 function falaNome(){
    console.log(nome)
 }

function usaFalaNome(){
    const nome = "Maycon"
    falaNome()
}

usaFalaNome() 
