const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus') 
const buttonMinus = document.querySelector('.minus') 

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)


function resetMood(){
    buttonForest.parentNode.classList.remove('activeButton')
    buttonRain.parentNode.classList.remove('activeButton')
    buttonCoffee.parentNode.classList.remove('activeButton')
    buttonFire.parentNode.classList.remove('activeButton')
}

function uptadeTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
    uptadeTimerDisplay(minutes,0)
    clearTimeout(timerTimeOut)
}

function countDown (){

    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        uptadeTimerDisplay(minutes, 0)

        if (isFinished){
            return
        }

        if(seconds<=0){
            seconds = 60

            --minutes
        }

        uptadeTimerDisplay(minutes, String(seconds - 1))


        countDown()
    }, 1000)
}

//BOTÕES CENTRAIS

buttonPlay.addEventListener('click',function(){
    countDown()
})

buttonStop.addEventListener('click',function(){
    resetTimer()
})

buttonPlus.addEventListener('click', function(){

    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent =  String(minutes +5).padStart(2, "0")

    console.log(minutesDisplay)
})

buttonMinus.addEventListener('click', function(){

    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 5)
    {
        uptadeTimerDisplay(00, 00)
    }
    else{
        minutesDisplay.textContent =  String(minutes - 5).padStart(2, "0")
    }
    console.log(minutesDisplay)
})


// MOODS

// Sounds
const forestAudio = new Audio("./sounds/Floresta.wav")
const rainAudio = new Audio("./sounds/Chuva.wav")
const coffeeAudio = new Audio("./sounds/cafe.wav")
const fireAudio = new Audio("./sounds/Lareira.wav")

// Função para parar o audio
function toggleAudioPlay(myAudio) {
    // aqui ele verifica se o audio está pausado e retorna um boolean
    let isPaused = myAudio.paused
     if (isPaused) {
         // se for true ele inicia o audio
         myAudio.play();
     } else {
         // se for false ele para o audio
         myAudio.pause();
     }
}

// Função para parar o audio de todas
function pauseAudio(forestAudio,rainAudio,coffeeAudio,fireAudio){
    forest = forestAudio.pause()
    rain = rainAudio.pause()
    coffee = coffeeAudio.pause()
    fire = fireAudio.pause()
}


// Botões MOODS
buttonForest.addEventListener('click',function(){
    resetMood()
    pauseAudio(forestAudio,rainAudio,coffeeAudio,fireAudio)
    buttonForest.parentNode.classList.add('activeButton')

    toggleAudioPlay(forestAudio)
})

buttonRain.addEventListener('click',function(){
    resetMood()
    pauseAudio(forestAudio,rainAudio,coffeeAudio,fireAudio)
    buttonRain.parentNode.classList.add('activeButton')

    toggleAudioPlay(rainAudio)
})

buttonCoffee.addEventListener('click',function(){
    resetMood()
    pauseAudio(forestAudio,rainAudio,coffeeAudio,fireAudio)

    buttonCoffee.parentNode.classList.add('activeButton')

    toggleAudioPlay(coffeeAudio)
})

buttonFire.addEventListener('click',function(){
    resetMood()
    pauseAudio(forestAudio,rainAudio,coffeeAudio,fireAudio)
    buttonFire.parentNode.classList.add('activeButton')

    toggleAudioPlay(fireAudio)
})



