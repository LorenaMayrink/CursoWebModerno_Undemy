const notas = [1.1, 4.5, 6.7, 10, 9.5, 6.7, 8.0, 10]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7 ) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
//retorna verdadeiro ou falso

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
