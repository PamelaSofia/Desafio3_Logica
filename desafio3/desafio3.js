class heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        if (this.tipo === "mago") {
            ataque = "magia"
        } else if(this.tipo === "guerreiro") {
            ataque = "espada"
        } else if(this.tipo === "monge") {
            ataque = "artes marciais"
        } else if(this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "ataque desconhecido"
        }
    console.log(`O ${this.tipo} ataca usando ${ataque}`)
    }
}

let heroi1 = new heroi("Pâmela", 20, "guerreiro")

heroi1.atacar()
