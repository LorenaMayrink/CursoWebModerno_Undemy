//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

//Método antigo

function potencia (base, expoente) {
    return Math.pow(base, expoente)
}

console.log(potencia(5,6))

//Novo

function potencia (base, expoente) {
    return base ** expoente
}

console.log(potencia(5,6))