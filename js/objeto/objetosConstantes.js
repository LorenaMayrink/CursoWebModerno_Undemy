// pessoa -> 123 -> {...}
const pessoa = { nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria' // O nome continua 'Pedro'

const pessoaConstante = Object.freeze({ nome: 'Lorena'})