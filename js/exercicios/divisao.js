/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores*/

function divisao (num1, num2){
    console.log(Math.floor(num1 / num2))
    console.log(`O resto é ${num1 % num2}`)
}

divisao(10,4)