// SPREAD OPERATOR
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









