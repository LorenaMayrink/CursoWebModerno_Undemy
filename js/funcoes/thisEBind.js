const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar =  pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePressoa = pessoa.falar.bind(pessoa)
falarDePressoa()