const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 //variável de controle


// Função CALLBACK (função passada como argumento de outra função)
function handleTryClick(event){
    event.preventDefault() // Para retirar o comportamento padrão do forms/botão (Não faça o padrão)

    const input = document.querySelector('#inputNumber') // Pegando a id inputNumber do HTML


    //Se o número do que ta no inputNumber for igual ao numero gerado pela constante randomNumer
    if(Number(input.value) == randomNumber){

        // buscar no documento o elemento que tenha a classe SCREENONE e ADICIONAR a classe HIDE nele
        screenOne.classList.add('hide') 

        // buscar no documento o elemento que tenha a classe SCREENTWO e REMOVER a classe HIDE nele
        screenTwo.classList.remove('hide')


        //Modificando o texto que aparece como número de tentativas realizadas
        document
        .querySelector('.screenTwo h2')
        .innerText = `Você acertou em ${xAttempts} tentativas.`
    }

    input.value = "" //Resetando o input entre tentativas
    xAttempts++ // incrementando a variável, que será o número de tentativas
}


// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


// No evento de click, terá a função handleClick
btnTry.addEventListener('click', handleTryClick) // passada como referência

// função anonima sendo passada dentro
btnReset.addEventListener('click', function(){
    screenOne.classList.remove('hide') 
    screenTwo.classList.add('hide')

    xAttempts = 1
})