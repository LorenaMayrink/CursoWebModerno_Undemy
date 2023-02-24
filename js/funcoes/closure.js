// Closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular viaráveis externas à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())