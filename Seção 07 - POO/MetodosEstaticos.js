class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
        
    }

    aumentarVolume(){
        this.volume += 2
    }

    diminuiVolume(){
        this.volume -= 2
    }

    static somaPilha(x, y){
        console.log(x + y)
    }
}

const controle1 = new ControleRemoto("Phillips")
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1.volume)

ControleRemoto.somaPilha(2, 2)
ControleRemoto.somaPilha(4, 4)
ControleRemoto.somaPilha(1, 9)

console.log(controle1)
