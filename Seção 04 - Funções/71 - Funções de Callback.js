/**
 * Funções de Callback
 * 
 * São funções que são executadas quando uma ação ocorre.
 */

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}


 function f1(Callback){
     setTimeout(function() {
        console.log("01 Bom dia")
        if (Callback){
            Callback()
        }
     }, rand())
     
 }
 function f2(Callback){
     setTimeout(function(){
        console.log("02 O que tem de bom?")
        if (Callback){
            Callback()
        }
     }, rand())
    
}
function f3(Callback){
    setTimeout(function(){
        console.log("03 Bom porra nenhuma!")
        if (Callback){
            Callback()
        }
    }, rand())
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log("Olá, muito bom dia!")
        })
    })
})



// Ao executar as funções conforme acima, percebemos que são executadas em sequência de cima pra baixo.

// Porém quando trabalhamos na web, precisamos fazer muitas operações diversas, nem sempre as funções serão executadas em ordem, pois não teremos controle sobre quanto tempo o Js vai executar as operações.

