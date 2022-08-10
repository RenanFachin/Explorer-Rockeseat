// DESESTRUTURAÇÃO DE DADOS
// Criando um objeto qualquer
const objetinho = {
    nome: 'Pedro',
    idade: 20,
    endereco: {
        logradouro: 'Rua dos bobos',
        numero: 0,
    },
    hobbies: ['Programar','Jogar','Correr']
}

console.log(objetinho) // Ele irá retornar todo o objetinho



/*
    Agora passando ele como argumento de uma função, é possível fazer a sua desestruturação
    Essa função não possui nenhuma ligação com o objetinho, apenas vai usar os dados desetruturados como variáveis dentro do seu escopo
    O que a desestruturação faz? Busca diretamente dentro de um objeto os atributos NOME E IDADE
*/

function mostrarObjetinho({nome, idade, endereco: { logradouro, numero} }){
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Logradouro:', logradouro);
    console.log('Número:', numero);
}

mostrarObjetinho(objetinho) // Ele vai retornar o mesmo que objetinho.nome e objetinho.idade diretamente



// FAZENDO SEM DESESTRUTURAÇÃO
function mostrarObjetinhoSemDesestruturacao(variavelObjeto){
    console.log('nome:', variavelObjeto.nome);
    console.log('idade:', variavelObjeto.idade);
}

mostrarObjetinhoSemDesestruturacao(objetinho) // Vai retornar a mesma coisa que a função com desestruturação
