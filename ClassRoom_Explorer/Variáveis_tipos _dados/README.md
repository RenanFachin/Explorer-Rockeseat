## DESESTRUTURAÇÃO

```jsx
const objetinho = {
	nome: 'Pedro',
	idade: 20,
	endereco: {
					logradouro: 'Rua dos Bobos'
					numero: 0
					}
	hobbies: ['Programar', 'Jogar', 'Correr']

console.log(objetinho)
// O que vai aparecer?
// R: TODO O OBJETINHO
```
## 
Agora com Desestruturação do objeto…

```jsx
function mostrarObjetinho ({nome, idade}) {
		console.log('nome:' nome);
		console.log('idade:' idade);
}

/* Para chamar a função **mostrarObjetinho** é necessário passar um argumento que tenha
**nome** e **idade** como propriedades */

mostrarObjetinho(Objetinho)

// R: Nome: Pedro, idade:20
```
## 
Entendendo o que aconteceu:

Todo o objetinho foi passado para a função. Mas dentro da função não será utilizada todas as propriedades, apenas **NOME** e **IDADE**

![Untitled](https://i.imgur.com/Zx97Zqp.jpg)

Fazendo a mesma coisa, porém, sem desestruturação
## 
```jsx
function mostrarObjetinhoSemDesestruturacao (variavelObj){
	console.log('nome', variavelObj.nome);
	console.log('idade', variabelObj.idade);
}

// R: Retornará a mesma coisa do que a outra função
```

Pegando objeto dentro de outro objeto

```jsx
({ nome, idade, endereco: {logradouro} }
```
## 


## REST OPERATORO 

O que o rest faz, é pegar tudo que foi passado para a função e colocar isso dentro de um array.
Resumindo, **pega argumentos e coloca dentro de um array.**

```jsx
MostrarNaTela(1,2,3,4,5,6,7) // R: [1,2,3,4,5,6,7] -> em formato de array

function MostrarNaTela(...args){

    console.log(args)
    // Fazendo isto, é possível passar funções de array. Exemplo: .map; .filter e etc

    args.map(
        (arg) => console.log(arg) // A cada item dentro de args, será dado um console.log
    )
}
```

```jsx
// Exemplo 2 de rest

const objetinho = {
    nome: 'Pedro',
    idade: 20,
    endereco: {
        logradouro: 'Rua dos bobos',
        numero: 0,
    },
    hobbies: ['Programar','Jogar','Correr']
}

function mostrarObjetinho({nome, idade, ...rest }){
    // O ...rest vai pegar todos os outros itens que não foram desestruturados (endereco e hobbies)
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('---------------------------')
    console.log('REST OPERATOR:', rest); // Vai fazer endereco(logradouro e numero) + hobbies
    console.log('Pegando só os hobbies:', rest.hobbies ) //Permite chamar com o . a propriedade desejada
}

mostrarObjetinho(objetinho)
```
##

## SPREAD OPERATOR
O **Spread Operator** pega os dados que já existiam no argumento passado para a função e assim, é possível adicionar mais itens

```jsx
const Pessoa = {    
    nome: 'Pedro',
    idade: 20
}

function MostrarNaTelaObj(pessoaObj){
    const pessoaComMaisItens = { // Criando uma nova constante
        ...pessoaObj,
        endereco: {
            logradouro:'Rua dos bobos',
            numero: 0
        }
    }
    // O QUE ACONTECEU?
    // o Spread pega os dados que já existiam no argumento passado para a função e assim, é possível adicionar mais itens 
    console.log(pessoaComMaisItens)
}

MostrarNaTelaObj(Pessoa)
```

##

```jsx
// EXEMPLO 2

const gatos = {
    gato1: 'Apolo',
    gato2: 'Tom'
}

const maisGatos = {

    // Pode se adicionar itens antes ou depois
    teste: 'funcionando',
    ...gatos,
    gato3: 'Nome do gato'
}

// O SPREAD joga todos dados do objeto gato e adiciona o gato3 em seu interior e dentro de um novo objeto chamado maisGatos
// em outras palavras, todos os itens do objeto anterior e espalha dentro de um novo objeto e tem a possibilidade de adicionar mais itens

console.log(maisGatos)
```
