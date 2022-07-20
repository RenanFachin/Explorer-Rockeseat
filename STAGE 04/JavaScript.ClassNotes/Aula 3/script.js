/*

    Capturar 2 números e fazer as operações matemáticas
    soma, subtração, multiplicação, divisão e resto da divisão.

    E para cada operação mostrar um alerta com o resultado
*/

// Capturando os dados em formato de string
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

// Transformando os dados de entrada em tipo NUMBER
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber

const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)