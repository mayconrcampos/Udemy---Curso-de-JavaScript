// 705.484.450-52 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, "cpfLimpo", {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, "")
        })
    }

    éSequência(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCPF(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let numeroStr of cpfSemDigitos){
            total += reverso-- * parseInt(numeroStr)
           
        }
        const digito = 11 - (total % 11)

        return digito <= 9 ? String(digito) : "0"
    }

    valida(){
        if(!this.cpfLimpo) return `vazio false`;
        if(typeof this.cpfLimpo !== "string") return `not string false`;
        if(this.cpfLimpo.length !== 11) return `não tem 11 caracteres false`;
        if(this.éSequência()) return `é sequencia false`;

        this.geraNovoCPF()
        

        return this.novoCPF === this.cpfLimpo
    }
}


let cpf3 = new ValidaCPF("037.721.379-97")


console.log(cpf3.valida() ? `CPF ${cpf3.cpfLimpo} é válido.` : `CPF ${cpf3.cpfLimpo} é inválido.`)