// REST OPERATOR 
// O rest é pegar tudo que foi passado para a função e colocar isso dentro de um array
// Em outras palavras, pega argumentos e coloca dentro de um array

MostrarNaTela(1,2,3,4,5,6,7) // R: [1,2,3,4,5,6,7] -> em formato de array
MostrarNaTela('Renan', 'Luisa', 'Apolo', 'Tom') // R: ['Renan', 'Luisa', 'Apolo', 'Tom'] em formado de array

function MostrarNaTela(...args){

    console.log(args)
    // Fazendo isto, é possível passar funções de array. Exemplo: .map; .filter e etc

    args.map(
        (arg) => console.log(arg) // A cada item dentro de args, será dado um console.log
    )
}







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