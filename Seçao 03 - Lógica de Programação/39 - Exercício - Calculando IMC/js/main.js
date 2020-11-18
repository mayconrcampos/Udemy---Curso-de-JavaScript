function calcularIMC(){
    var frase = document.querySelector(".frase")
    var resultado = document.querySelector(".resultado")
    var formulario = document.querySelector(".form")

    function eventosFormulario(event){
        event.preventDefault()

        var peso = formulario.querySelector(".peso").value
        var altura = formulario.querySelector(".altura").value
        peso = Number(peso)
        altura = Number(altura)
        var imc = peso / (altura * altura)
        
        resultado.innerHTML = `Você tem ${peso}kg e ${altura}m de altura. Seu IMC é <strong>${imc.toFixed(2)}</strong>.`

        
        if(peso && altura){
            if(imc < 18.5){
                frase.style.background = "#d99795"
                frase.innerHTML = `Menor que 18.5 - Abaixo do peso.`
            }else if(imc >= 18.5 && imc <= 24.9){
                frase.style.background = "#92d050"
                frase.innerHTML = `Entre 18.5 a 25 - Peso Normal.`
            }else if(imc >= 25 && imc <= 29.9){
                frase.style.background = "#ffc000"
                frase.innerHTML = `Entre 25 a 29.9 - Pré-obesidade.`
            }else if(imc >= 30 && imc <= 34.9){
                frase.style.background = "#d99795"
                frase.innerHTML = `Entre 30 a 34.9 - Obesidade - Grau I.`
            }else if(imc >= 35 && imc <= 39.9){
                frase.style.background = "#c00000"
                frase.innerHTML = `Entre 35 a 39.9 - Obesidade - Grau II.`
            }else{
                frase.style.background = "#953735"
                frase.innerHTML = `Acima de 40 - Obesidade - Grau III (Mórbida).`
            }
        }else{
            alert("Você precisa preencher os campos para calcular.")
        }
        

    }formulario.addEventListener("submit", eventosFormulario)
}
calcularIMC()