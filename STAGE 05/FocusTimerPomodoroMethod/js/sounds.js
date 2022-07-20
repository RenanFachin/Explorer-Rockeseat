export default function(){

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    bgAudio.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    // 2 maneiras de mandar para fora
    return{
        pressButton, //função
        timeEnd, //função
        bgAudio //elemento
    }

}