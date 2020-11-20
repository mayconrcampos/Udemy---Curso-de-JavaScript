
const elementos = [
    {tag: "p", texto: "A vida é assim mesmo"},
    {tag: "div", texto: "Quando sabemos alguma coisa"},
    {tag: "footer", texto: "Não sabemos nada"},
    {tag: "section", texto: "Ou vice e versa."},
];
var container = document.querySelector(".container")
var div = document.createElement("div")

for(let i = 0; i < elementos.length; i++){
    var { tag, texto } = elementos[i];
    
    let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = `${texto}`
    div.appendChild(tagCriada)
}
container.appendChild(div)