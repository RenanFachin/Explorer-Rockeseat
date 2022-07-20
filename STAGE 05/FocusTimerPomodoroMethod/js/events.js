import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop
  } from "./elements.js"

export default function(
    {
        //dependências que se tem:
        controls,
        timer,
        sound
    }
){

// Refatoração: mudar um código para deixá-lo mais compreensível por todos
// deixar o código mais performatico sem alterar suas funcionalidades

// Event-driven (direcionada à eventos)

// programação imperativa = uma das primeiras maneiras de se pensar na programação (dar ordens passo a passo para algo acontecer)   
// programação declarativa = não se fala o passo a passo, apenas diz que algo precisa acontecer

// CALLBACK 
buttonPlay.addEventListener('click', function(){
    controls.play()
    // IR DIMINUINDO O TEMPO, em milisegundos
    timer.countDown()
    sound.pressButton()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
})


buttonStop.addEventListener(('click'), function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonSoundOff.addEventListener('click',function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()

})

buttonSoundOn.addEventListener('click',function(){
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')

    sound.bgAudio.pause()
})

// Fazendo a parte do botão settings e o cronometro
buttonSet.addEventListener('click',function(){

    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
      }
    
      timer.uptadeDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
})

}