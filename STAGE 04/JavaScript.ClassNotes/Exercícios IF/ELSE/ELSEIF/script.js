
// 1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

//Capturar a letra digitada
let letraDigitada = prompt('Digite uma letra e eu irei lhe dizer se é vogal ou consoante')

//Transformar tudo que foi digitado para minusculo para melhor comparação
letraDigitada = letraDigitada.toLowerCase()


// || é um simbolo de OU para melhor verificação
if(letraDigitada == 'a' || letraDigitada == 'e' || letraDigitada == 'i' || letraDigitada == 'o' || letraDigitada == 'u'){
    alert('É vogal')
}
else{
    alert('Não é vogal')
}



/*2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

//Definindo as duas notas de entrada
let notaUm = Number(prompt('Digite a primeira nota'))
let notaDois = Number(prompt('Digite a segunda nota'))

//Criando uma arrow Function para realizar o cálculo da média
const media = (notaUm,notaDois) => ((notaUm+notaDois)/2)

// Criando uma variante para receber o resultado da entrada dos dados na function
let resultadoDaMedia = media (notaUm,notaDois)


if(resultadoDaMedia>=7){
    if(resultadoDaMedia==10){
        alert(`Aprovado com Distinção com a média ${resultadoDaMedia}`)
    }
    else{
        alert(`Aprovado com média ${resultadoDaMedia}`)
    }
}
else{
    alert(`Reprovado com a média ${resultadoDaMedia}`)
}



//3. Faça um script que leia três números inteiros e mostre o maior deles.

let numeroUm = Number(prompt(`Digite o primeiro número`))
let numeroDois = Number(prompt(`Digite o segundo número`))
let numeroTres = Number(prompt(`Digite o terceiro número`))

if (numeroUm > numeroDois && numeroUm>numeroTres) {
    alert(`O maior número dos três é o primeiro dado de entrada`)
}
else if (numeroDois>numeroUm && numeroDois>numeroTres){
    alert(`O maior número dos três é o segundo dado de entrada`)
}
else{
    alert(`O maior número dos três é o terceiro dado de entrada`)
}

/*
8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salarioAtual = Number(prompt(`Digite o salário atual do funcionário`))

let salarioNovo
let percentualAplicado
let valorDoAumento

if(salarioAtual<=280){
    salarioNovo = salarioAtual * 1.2
    percentualAplicado = "20%"
    valorDoAumento = salarioNovo - salarioAtual
}
else if(salarioAtual>280 && salarioAtual<=700){
    salarioNovo = salarioAtual * 1.15
    percentualAplicado = "15%"
    valorDoAumento = salarioNovo - salarioAtual
}
else if(salarioAtual>700 && salarioAtual<=1500){
    salarioNovo = salarioAtual * 1.1
    percentualAplicado = "10%"
    valorDoAumento = salarioNovo - salarioAtual
}
else{
    salarioNovo = salarioAtual * 1.05
    percentualAplicado = "5%"
    valorDoAumento = salarioNovo - salarioAtual
}

console.log(`O salário antes do aumento era de ${salarioAtual.toFixed(2)}`)
console.log(`O percentual de aumento aplicado foi de ${percentualAplicado}`)
console.log(`O valor do aumento foi de ${valorDoAumento.toFixed(2)}`)
console.log(`O salário após o aumento é de ${salarioNovo.toFixed(2)}`)


/*
9. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

    Desconto do IR:
    Salário Bruto até 900 (inclusive) - isento
    Salário Bruto até 1500 (inclusive) - desconto de 5%
    Salário Bruto até 2500 (inclusive) - desconto de 10%
    Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. 
    No exemplo o valor da hora é 5 e a quantidade de hora é 220.

    Salário Bruto: (5 * 220)        : R$ 1100,00
    (-) IR (5%)                                : R$   55,00
    (-) INSS ( 10%)                       : R$  110,00
    FGTS (11%)                            : R$  121,00
    Total de descontos                : R$  165,00
    Salário Liquido                       : R$  935,00
*/


let valorDaHoraTrabalhada = Number(prompt(`Diga o valor da hora trabalhada do funcionário`))
let quantidadeDeHorasTrabalhadas = Number(prompt(`Diga o valor da quantidade de horas trabalhadas do funcionário`))


let salarioBruto = valorDaHoraTrabalhada*quantidadeDeHorasTrabalhadas
let salarioLiquido
let descontosIR
const descontoFGTS = 0.11
const descontoINSS = 0.10


if(salarioBruto<=900){
    descontosIR = 0
    salarioLiquido = salarioBruto - (salarioBruto*descontosIR) - (salarioBruto*descontoINSS)
}
else if(salarioBruto > 900 && salarioBruto <= 1500){
    descontosIR = 0.05
    salarioLiquido = salarioBruto - (salarioBruto*descontosIR) - (salarioBruto*descontoINSS)
}
else if(salarioBruto > 1500 && salarioBruto <= 2500){
    descontosIR = 0.10
    salarioLiquido = salarioBruto - (salarioBruto*descontosIR) - (salarioBruto*descontoINSS)
}
else{
    descontosIR = 0.20
    salarioLiquido = salarioBruto - (salarioBruto*descontosIR) - (salarioBruto*descontoINSS)
}


console.log(`
Salário bruto: (${valorDaHoraTrabalhada} * ${quantidadeDeHorasTrabalhadas})         : R$ ${salarioBruto.toFixed(2)}
(-) IR (${descontosIR*100}%)         :  R$ ${(salarioBruto*descontosIR).toFixed(2)}
(-) INSS (${descontoINSS*100}%)      :  R$ ${(salarioBruto*descontoINSS).toFixed(2)}
FGTS (${descontoFGTS*100}%)          :  R$ ${(salarioBruto*descontoFGTS).toFixed(2)}
Total dos descontos                  :  R$ ${(salarioBruto-salarioLiquido).toFixed(2)}
Salário Liquido                      :  R$ ${salarioLiquido.toFixed(2)}
`)

/*
10. Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido
*/

let diaDaSemana = Number(prompt("Digite um número para saber o dia da semana"))

switch(diaDaSemana){
    case 1:
        alert("Domingo")
        break
    case 2:
        alert("Segunda-Feira")
        break
    case 3:
        alert("Terça-Feira")
        break
    case 4:
        alert("Quarta-Feira")
        break
    case 5:
        alert("Quinta-Feira")
        break
    case 6:
        alert("Sexta-Feira")
        break
    case 7:
        alert("Sábado")
        break
    default:
        alert("INSERIR UM DIA DA SEMANA VÁLIDO")
}


/*

11. Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

      Média de Aproveitamento  Conceito
      Entre 9.0 e 10.0                      A
      Entre 7.5 e 9.0                        B
      Entre 6.0 e 7.5                        C
      Entre 4.0 e 6.0                        D
      Entre 4.0 e zero                      E
    O algoritmo deve mostrar numa janela de alert as notas,
    a média,
    o conceito correspondente
    e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

let notaParcialUm = Number(prompt("Digite a primeira nota parcial do aluno"))
let notaParcialDois = Number(prompt("Digite a segunda nota parcial do aluno"))

let mediaAproveitamento = (notaParcialUm + notaParcialDois )/2
let conceito
let resultadoSemestre

if(mediaAproveitamento>= 9){
    conceito = "A"
    resultadoSemestre = "APROVADO"
}
else if(mediaAproveitamento>= 7.5 && mediaAproveitamento<9){
    conceito = "B"
    resultadoSemestre = "APROVADO"
}
else if(mediaAproveitamento>= 6 && mediaAproveitamento<7.5){
    conceito = "C"
    resultadoSemestre = "APROVADO"
}
else if(mediaAproveitamento>= 4 && mediaAproveitamento<6){
    conceito = "D"
    resultadoSemestre = "REPROVADO"
}
else{
    conceito = "E"
    resultadoSemestre = "REPROVADO"
}

alert(`nota 1: ${notaParcialUm}
nota 2: ${notaParcialDois}
média: ${mediaAproveitamento}
conceito: ${conceito}
resultado final: ${resultadoSemestre}
`)
