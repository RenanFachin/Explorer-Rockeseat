/*

    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada
        1. Cadastrar item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa.


    O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

    Caso digite 1, ele poderá cadastrar um item em uma lista
    Caso digite 2, ele poderá ver os itens cadastrados
        Se não houver item cadastrado, mostrar a mensagem: "Não existe itens cadastrados"
    Caso digite 3, a aplicação deverá ser encerrada

*/

let option;
let items = [];  //a lista é um array de dados


while(option!=3){

    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    1. Cadastrar item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.
`));


switch(option){
    case 1:

        let item = prompt("Digite o item que deseja cadastrar")
        items.push(item)

        break;

    case 2:

        if(items.length == 0){
            alert("Não existe itens cadastrados")
        }
        else{
            alert(items)
        }

        break;
    
    case 3:
        alert("Até mais!")
        break;
    default:
        alert("Opção inválida. Tente novamente")
}

}
