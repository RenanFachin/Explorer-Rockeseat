// NAMED EXPORT

/* 
Dá para ser assim
 const message = "texto"
 const text = "outra mensagem"

export { text, message } 
*/

// Ou
export const message = "textoss"
export const text = "outra mensagem"



export const today = Date.now()  // exportando diretamente na linha
const double = number => number * 2
export {double}



// MISTO ENTRE NAMED E DEFAULT
// exportada por named
const date = new Date()
const greeting = name => `hello ${name}` // recebe name como argumento e printa hello name

export default function (argument){
    // essa é exportada por default
    console.log(date, greeting(argument))
}

export { date, greeting }


// IMPORT AS
export function sum (a,b){
    return a + b
}

// IMPORT * AS 
// importando todos os e dando um nome padrão

export const sum2 = (a,b) => a + b
export const multiply = (a,b) => a * b
export const substract = (a,b) => a - b
export const divide = (a,b) => a / b

    // Poderiamos tirar os export do lado de cada const e fazer export {sum, multiply, substract, divide}
