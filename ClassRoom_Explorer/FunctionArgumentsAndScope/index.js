// EXEMPLO 1
function somar(numero1, numero2){
    // numero1 e numero2 são argumentos

    let resultado = numero1 + numero2
    // resultado é uma variável criada somente dentro deste escopo

    return console.log(`O primeiro argumento é ${numero1}, o segundo argumento é ${numero2} e a soma destes dois argumento é ${resultado}`)
}

somar(1,2)
somar(8,12)


console.log("--------------------------------------------------------------------------------------")

// EXEMPLO 2

let numeroGlobal = 10;

function brasil(numero){
    // Número é um argumento único passado pela função
    // numeroGlobal é uma variável GLOBAL que existe em todo o escopo
    // FUNÇÕES POSSUEM ACESSO A VARIÁVEIS DE ESCOPO GLOBAL

    // resultado é de escopo local, só existe aqui dentro da função
    let resultado = numero + numeroGlobal;
    console.log(`resultado da função brasil: ${resultado}`)


    function saoPaulo(){
        // A variável numeroSaoPaulo só vai existir aqui dentro
        let numeroSaoPaulo = ++resultado
        // a variável existe aqui dentro
        console.log(`resultado da função saoPaulo: ${numeroSaoPaulo}`)
    }

    saoPaulo()

    // Não vai funcionar dar um console.log no numeroSaoPaulo por que ele só existe dentro da função saopaulo
    // console.log(numeroSaoPaulo)
}

brasil(4)

console.log("-------------------------------------------------------------------------------------")

// EXEMPLO 3

function somandoOutrVez(numero1, numero2){
    // Resultado só existe aqui, escopo LOCAL
    let resultado = numero1 + numero2
    return resultado
}

// Esse resultado agora é de escopo GLOBAL
// Criando uma variável chamada resultado e dizendo que ela vai ser igual ao resultado da função chamada
const resultado = somandoOutrVez(2,3)

console.log(resultado)


console.log("-------------------------------------------------------------------------------------")

// EXEMPLO 4

// Criando um objeto BEAR
let bear = {
    sound: "roar",

    roar() {
        console.log(this.sound); // o this faz -> bear.som... Então this é igual a bear
    }
}
// Explicação do THIS neste caso
/* 
 O sound faz parte do objeto bear
 A forma com que pegamos um objeto é bear.sound
 ou seja, SOUND não é uma variável e sim uma PROPRIEDADE do objeto bear

 executando a funçao desta maneira: bear.roar() iria funcionar
 Funcionaria por que o this está referenciando ao seu próprio ESCOPO e nele possui um BEAR.SOUND

*/

// Reatribuindo a propriedade sound do objeto bear
bear.sound = "grunt"

// bear.roar() é diferente de bear.roar
// quando tem o () é a execução da função
// QUando não tem o () quer dizer que a função está sendo passada por referência

//Neste caso, está sendo atribuido a variável bearSound a função bear.roar de dentro do objeto bear
// Neste momento o this perde a função, pq quando a bear.roar é atribuiada para bearSound ela parte o ESCOPO dela
// BearSound não faz parte do objeto bear
// let bearSound = bear.roar


// Agora, como bearSoung aponta para a função bear.roar, ela será executada
// bearSound()


// console.log(3 == '3')

let teste = ['a','b','c','d']
teste.pop()
console.log(teste.pop())