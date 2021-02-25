function CriaCalculadora() {
    this.display = document.querySelector(".display")
    this.btnClear = document.querySelector(".btn-clear")

    this.inicia = () => {
        this.clickBotoes()
        this.clearDisplay()
        this.pressionaEnter()
        this.pressionaDelete()
    }

    this.clickBotoes = () => {
        document.addEventListener("click", (e) => {
            const el = e.target

            if(el.classList.contains("btn-num")){
                this.btnParaDisplay(el.innerText)
            }
            if(el.classList.contains("btn-clear")){
                this.clearDisplay()
            }
            if(el.classList.contains("btn-del")){
                this.btnDelete()
            }
            if(el.classList.contains("btn-eq")){
                this.realizaConta()
            }
        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor
    }

    this.clearDisplay = () => {
        this.display.value = ""
    }

    this.btnDelete = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if(!conta) {
                alert("Conta Inválida")
                return
            }
            this.display.value = String(conta)
        }catch(e) {
            alert("Conta Inválida")
            return
        }
    }

    this.pressionaEnter = () => {
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 13){
                this.realizaConta()
            }
        })
    }

    this.pressionaDelete = () => {
        this.display.addEventListener("keyup", (e) => {
            if(e.keyCode === 46){
                this.clearDisplay()
            }
        })
    }
}

let calculadora = new CriaCalculadora()
calculadora.inicia()