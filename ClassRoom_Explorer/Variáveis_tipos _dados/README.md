

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

Entendendo o que aconteceu:

Todo o objetinho foi passado para a função. Mas dentro da função não será utilizada todas as propriedades, apenas **NOME** e **IDADE**

![Untitled](https://i.imgur.com/Zx97Zqp.jpg)

Fazendo a mesma coisa, porém, sem desestruturação

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
