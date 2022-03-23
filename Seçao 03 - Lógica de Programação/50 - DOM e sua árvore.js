/**
 * DOM - Documento Object Model
 * 
 * Trata-se da hierarquia que um documento HTML possui.
 * A lista de elementos se inicia pelo topo e vai descendo para os elementos filhos.
 * 
 * Um documento HTML possui a seguinte árvore DOM.
 * 
 * - Window
 * - Document
 * - HTML
 * - Head e Body
 * - Conteineres e elementos que estão dentro de head ou
 * body.
 * 
 * De cima para baixo...
 * Window é parent de document, que é parent de html, e assim sucessivamente.
 * 
 * Os elementos são child de body ou head, que são child de HTML, que são child de Document e assim sucessivamente.
 * 
 * Esta é a árvore do DOM, Document Object Model.
 */