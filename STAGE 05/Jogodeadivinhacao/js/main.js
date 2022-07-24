const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 //variável de controle

//Eventos
// No evento de click, terá a função handlexxxxClick
btnTry.addEventListener('click', handleTryClick) // passada como referência
btnReset.addEventListener('click', handleResetClick) // função anonima sendo passada dentro

// Funções
function handleTryClick(event){
    event.preventDefault() // Para retirar o comportamento padrão do forms/botão (Não faça o padrão)

    const input = document.querySelector('#inputNumber') // Pegando a id inputNumber do HTML

    //Se o número do que ta no inputNumber for igual ao numero gerado pela constante randomNumer
    if(Number(input.value) == randomNumber){

        toggleScreen()

        //Modificando o texto que aparece como número de tentativas realizadas
        screenTwo
        .querySelector('h2')
        .innerText = `Você acertou em ${xAttempts} tentativas.`
    }

    input.value = "" //Resetando o input entre tentativas
    xAttempts++ // incrementando a variável, que será o número de tentativas
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){
    screenOne.classList.toggle('hide') 
    screenTwo.classList.toggle('hide')
}