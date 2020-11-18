/**
 * Vamos avaliar curtos circuitos
 * 
 * && -> AND
 * || -> OR
 * !  -> NOT
 */

 console.log("Maycon" && 0 && "Ariana") // 0
 // Nesta expressão o Js avalia a expressão da esquerda para a direita, com o operador AND, a primeira expressão falsa ele mostra.

 console.log("Maycon" && true && "Maria") // Maria
 // Aqui ele avalia da esquerda pra direita, como todos são true, ele retorna o ultimo valor. Se houvesse expressão falta ele retornava ela.

 // Em javascript tudo pode ser avaliado em verdadeiro e falso.


// Os valores falsos em Js sâo:

/**
 * false
 * 0
 * "" '' ``
 * null / undefined
 * NaN
 */

 var corUser = null
 var corPadrao = corUser || "Azul" // É feito o teste da esquerda pra direita. O valor que não for false será atribuido à variável corPadrao.
 console.log(corPadrao)

