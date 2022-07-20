/*
    **JOGO DE ADVINHAÇÃO**

Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando. Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

Enquanto o usuário não adivinhar o número, mostrar a mensagem "Erro, Tente novamente"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns!! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas

*/

//Capturando o dado de entrada do usuário
let result = prompt("Advinhe o número que estou pensando. Está entre 0 e 10")

//Criando a variável randomNumber para gerar números de 0 a 10 pelo sistema
const randomNumber = Math.round(Math.random() * 10)

//variável de controle, se inicia em 1
let xAttempts = 1;


//Se o result (valor digitado) for diferente do número pensado pelo sistema (randomNumber) ele irá entrar no WHILE
while(Number(result) != randomNumber){
    //caso a pessoa erre o número, ele entra no while e aparece a janela para digitar novamente e soma 1 ao xAttempts
    result = prompt("Erro, Tente novamente")

    xAttempts++
}

//Colocando no singular ou plural conforme a quantidade de tentativas
//se 1 tentativa (xAttempts == 1 for true)
if(xAttempts==1){
    alert(`Parabéns!! O número que eu havia pensado era ${randomNumber} e você advinhou o número em ${xAttempts} tentativa`)
}
// caso seja mais que uma
else {
alert(`Parabéns!! O número que eu havia pensado era ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)
}