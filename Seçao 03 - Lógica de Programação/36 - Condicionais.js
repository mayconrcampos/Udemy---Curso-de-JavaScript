/**
 * Vamos estudar as condicionais
 * 
 * if
 * else if
 * else
 */

idade = 17

if(idade < 18){
    console.log("É menor, não pode ser preso.")
}else if(idade >= 18 && idade < 65){
    console.log("Já pode ser preso e o voto é obrigatório.")
}else{
    console.log("Aposentado e nem precisa mais votar.")
}