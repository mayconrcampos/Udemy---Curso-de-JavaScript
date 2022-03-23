const paragrafos = document.querySelector(".paragrafos")
const pes = paragrafos.querySelectorAll("p")

const estilosBody = getComputedStyle(document.body)
const backgroundBody = estilosBody.background

for(let p of pes){
    p.style.background = backgroundBody
    p.style.color = "white"
    p.style.borderRadius = "5px"
}
