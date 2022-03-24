class Formulario {
    _nome
    _altura
    constructor(nome, altura){
        this._nome = nome
        this._altura = altura
    }

    get nome(){
        return this._nome
    }

    set nome(nome){
        this._nome = nome
    }

    get altura(){
        return this._altura
    }

    set altura(altura){
        this._altura = altura
    }
}

class Tabela {
    tabela = []

    addTabela(nome, altura){
        this.tabela.push({"nome": nome, "altura": altura})
    }

    listaTabela(){
        return this.tabela
    }

    salvaTabela(){
        var tab = JSON.stringify(this.tabela)
        localStorage.setItem("pessoas", tab)
    }

    carregaTabela(){
        var pessoas = localStorage.getItem("pessoas")
        var tab = JSON.parse("pessoas", pessoas)

        for (const key in tab) {
            this.tabela.push(tab[key])
        }

        console.log(this.tabela)
    }

}









