
let firstNumber = Number(prompt("Digite o primeiro número:"))
let secondNumber = Number(prompt("Digite o segundo número:"))

function calculadora(firstNumber,secondNumber){
    let sum = firstNumber+secondNumber
    let sub = firstNumber-secondNumber
    let mult = firstNumber*secondNumber
    let div = firstNumber/secondNumber
    let resto = firstNumber%secondNumber

    return alert(`
    A soma dos dois números é: ${sum} \n
    A subtração dos dois números é: ${sub} \n
    A multiplicação dos dois números é: ${mult} \n
    A divisão dos dois números é: ${div} \n
    O resto da divisão entre os dois números é: ${resto} \n
    `)
}

function imparPar (firstNumber,secondNumber){

    let sum = firstNumber + secondNumber
    
    if(sum%2 == 0){
        return alert(`A soma dos dois números é um número PAR`)
    }
    else{
        return alert(`A soma dos dois números é um número IMPAR`)
    }
}


function saoIguais (firstNumber, secondNumber){
    if(firstNumber == secondNumber){
        return alert(`Os números inseridos são iguais!! \n número 1: [${firstNumber}] \n número 2: [${secondNumber}]`)
    }
    else{
        return alert(`Os números inseridos são diferentes!! \n número 1: [${firstNumber}] \n número 2: [${secondNumber}]`)
    }
}

let resultado = calculadora(firstNumber,secondNumber)
let desafioImparPar = imparPar(firstNumber,secondNumber)
let desafioSeSaoIguais = saoIguais(firstNumber,secondNumber)