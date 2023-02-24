const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])

valores [4] = 10
console.log(valores)
console.log(valores.length) //quantidades de elementos em um array

valores.push({id: 3}, false, null, 'teste') //add novos elementos no array
console.log(valores)
//prezar arrays com dados homogênios

console.log(valores.pop()) // restira o ultimo elemento
delete valores [0] //deleta o valor do indice referente
console.log(valores)

console.log(typeof valores)