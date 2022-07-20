// 2015 ES6 - Modules
//default import
import Controls from "./controls.js"

// named import
import Timer from "./timer.js"

import Sound from "./sounds.js"

import Events from "./events.js"

// Chamando os elementos
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"


const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
  })
  
const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
    resetControls: controls.reset
  })

const sound = Sound()


Events({controls, timer, sound})



