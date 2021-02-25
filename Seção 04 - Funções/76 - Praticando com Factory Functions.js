function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        inicia() {
            this.clickBotoes()
            this.clearDisplay()
            this.pressionaEnter()
            this.pressionaDelete()
        },

        clickBotoes(){
            document.addEventListener("click", (e) => {
                const el = e.target  
                
                if(el.classList.contains("btn-num")){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains("btn-clear")){
                    this.clearDisplay()
                }
                if(el.classList.contains("btn-del")) {
                    this.btnDelete()
                }
                if(el.classList.contains("btn-eq")){
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor
            
        },

        clearDisplay(){
            this.display.value = ""
        },

        btnDelete(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert("Conta Inválida")
                    return
                }

                this.display.value = String(conta)
            } catch(e) {
                alert("Conta Inválida")
                return
            }
        },

        pressionaEnter(){
            this.display.addEventListener("keyup", (e) => {
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        pressionaDelete(){
            this.display.addEventListener("keyup", (e) => {
                if(e.keyCode === 46){
                    this.clearDisplay()
                }
            })
        }
    }  
}

const calculadora = criaCalculadora()
calculadora.inicia()