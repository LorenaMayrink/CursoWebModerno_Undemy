/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples (capitalInicial, juros, tempo) {
    return capitalInicial * tempo *juros
}

function jurosComposto (capitalInicial, juros, tempo) {
    return capitalInicial * ((1 + juros)**tempo)
}

console.log(jurosSimples(1000, 0.5, 5))
console.log(jurosComposto(1000, 0.5, 5))