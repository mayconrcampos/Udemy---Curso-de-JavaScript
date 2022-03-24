class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(`Dispositivo ${this.nome} já está ligado.`)
            return
        }else{
            this.ligado = true
            console.log(`Dispositivo ${this.nome} ligado`)
        }
    }

    desligar(){
        if(this.ligado){
            this.ligado = false
            console.log(`Dispositivo ${this.nome} desligado`)
        }else{
            console.log(`Dispositivo ${this.nome} já está desligado.`)
            return
        }
    }
}

class SmartPhone extends DispositivoEletronico {
    constructor(nome, modelo){
        super(nome)
        this.modelo = modelo
    }

    ligar(){
        if(this.ligado){
            console.log(`SmartPhone ${this.nome} ${this.modelo} já está ligado.`)
            return
        }else{
            this.ligado = true
            console.log(`SmartPhone ${this.nome} ${this.modelo} ligado`)
        }
    }

    desligar(){
        if(this.ligado){
            this.ligado = false
            console.log(`SmartPhone ${this.nome} ${this.modelo} desligado`)
        }else{
            console.log(`SmartPhone ${this.nome} ${this.modelo} já está desligado.`)
            return
        }
    }
}

const d1 = new DispositivoEletronico("Rádio")
d1.ligar()
d1.ligar()

d1.desligar()
d1.desligar()

const t1 = new SmartPhone("IPhone", "X")
t1.ligar()
t1.ligar()

t1.desligar()
t1.desligar()