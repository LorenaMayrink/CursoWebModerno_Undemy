const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
} // O break interrompa a sequência e le a linha de código após o laço

for (y in nums) {
    if(y == 5) {
        continue
    } 
    console.log(`${y} = ${nums[y]}`)
} //Interrompe no índice 5, mas continua no laço

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b==3) break externo
        console.log(`Par = ${a},${b}`)
    }
}//nesse caso, se não houvesse a palavra 'externo' depois do break, ele só iria funcionar no laço interno.
//Ao colocar a palavra, ele funciona no laço externo
//Essa última estrutura não é boa de ser usada