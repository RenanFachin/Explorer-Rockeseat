export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}) {

    function play(){
        buttonPlay.classList.add('hide') // Adiciona ao elemento que contem a classe play a classe HIDE
        buttonPause.classList.remove('hide')
    
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause(){
        buttonPause.classList.add('hide') // Adiciona ao elemento que contem a classe play a classe HIDE
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos?')
        if(!newMinutes){
            return false
        }
    
        return newMinutes
    }

    return{
        reset,
        play,
        pause,
        getMinutes
    }

}

