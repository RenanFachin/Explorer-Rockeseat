// Fórmula de bhaskara

alert("Olá, eu sou um programa para calcular qualquer função de segundo grau utilizando a fórmula de Bhaskara!")


let primeroTermo = prompt("Digite o termo a")
let segundoTermo = prompt("Digite o termo b")
let terceiroTermo = prompt("Digite o termo c")

function bhaskara (a, b, c) {

    let delta = ((b**2)-(4*a*c))
    let xLinha = (((-b) + Math.sqrt(delta)) / (2*a))
    let xDuasLinha = (((-b) - Math.sqrt(delta)) / (2*a))

    return `As raizes da função são:
    x' = ${xLinha}
    x'' = ${xDuasLinha} 
    delta = ${delta}
    `
}


let resultado = bhaskara(primeroTermo,segundoTermo,terceiroTermo)
alert(resultado)