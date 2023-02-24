function pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Lorena')
p1.falar

const p2 = new pessoa('Ana')
p2.falar