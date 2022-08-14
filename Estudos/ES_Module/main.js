// Named import
import { text, message, today, double } from'./utils.js' // nessa linha ele já importa e executa o arquivo

console.log(text, message)
console.log(today)

// Double é uma função que espera um argumento
console.log(double(2))



// Named e Default import
import funcPadraoDefaultAceitaQualquerNome, {date, greeting} from './utils.js'

console.log(date)
console.log(greeting('Renan'))
funcPadraoDefaultAceitaQualquerNome('Renan')


// IMPORT as
// Muda o nome da função importada SUM para SOMA
import { sum as soma } from './utils.js'

console.log(soma(2,5))
console.log(soma(20,50))

// IMPORT * as 
import * as calculator from './utils.js'

console.log(calculator.divide(40,4))
console.log(calculator.multiply(40,4))
console.log(calculator.sum2(40,4))
console.log(calculator.substract(40,4))