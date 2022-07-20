
// Função 1 - Celsius para Fahrenheit

let celsiusToFahrenheit = prompt("Digite uma temperada em graus celsius para transformar para fahrenheit")

function cToF (temp) {
    var cTemp = temp
    var cToFahrenheit = (cTemp*1.8)+32
    var message = `${cTemp} Graus Celsius é equivalente a ${cToFahrenheit} Fahrenheit`;   
    return alert(message)
}

cToF(celsiusToFahrenheit)


// Função 2 -  Fahrenheit para Celsius

let FahrenheitToCelsius = prompt("Digite uma temperada em fahrenheit para transformar para graus celsius")
function fToC (temp) {
    var fTemp = temp
    var fToCelsius = ((fTemp-32)/1.8).toFixed(2)
    var message = `${fTemp} Fahrenheit é equivalente a ${fToCelsius} Graus Celsius`;
    return alert(message)
}


fToC(FahrenheitToCelsius)



//Exercício 2
/*
01. Escreva um programa que pede o raio de um círculo, e em seguida exiba o perímetro e área do círculo.

Para saber o valor do pi em JavaScript, use:
Math.PI
*/

let raioCircun = prompt("Digite o raio de um círculo para que seja calculado o perímetro e a área.")

function calculos(raio){
    let r = raio;
    let area = Math.PI*Math.pow(r,2)
    let perimetro = 2*Math.PI*r

    var message = `Um circulo com raio de ${r}, possui Área = ${area.toFixed(2)} e Perimetro = ${perimetro.toFixed(2)}`;
    return alert(message)
}

calculos(raioCircun)


// Exercício 2
/*04. Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.
*/


let HowMuchMoney = Number(prompt("Quanto de dinheiro você possui? Irei calcular para você a quantidade de litros de combustível que será capaz de comprar e também a quantidade de km que você irá andar"))

console.log(typeof HowMuchMoney)

function calcLAndKm (money) {
    const kmPerLiter = 20
    const gasolinePrice = 5
    let totalMoney = money

    //qntd de litros que pode comprar
    let totalLiters = totalMoney/gasolinePrice

    //qntd de km que irá ser possível andar
    let totalKm = totalLiters * kmPerLiter

    //Mensagem
    let message = `Com os ${totalMoney} reais que você possui, você conseguirá comprar ${totalLiters} Litros e será possível percorrer ${totalKm} Km.`;

    return alert(message)

}

calcLAndKm(HowMuchMoney)

//Exercicio TABUADA


function tabuada(numero){
    let resultado
    for(let i=1;i<=10;i++){
        resultado = numero*i
        console.log(`${numero} * ${[[i]]} = ${resultado}`)
    }

}
tabuada(8)

//Soma dos números de 1 a 10 

function sumOneToTen(){
    let sum = 0
    for(let i =0;i<=10;i++){
        sum = sum + i
    }
    console.log(sum)
}

sumOneToTen()