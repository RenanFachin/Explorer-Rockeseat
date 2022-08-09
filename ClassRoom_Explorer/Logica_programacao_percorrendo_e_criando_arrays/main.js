// Função para criação de um objeto
const gato = (nome, idade, hobby) => ({
    nome, idade, hobby
  })

// Com desestruturação
const showCats = ({nome, idade, hobby}) => {
    console.log(
    `Nome do gato: ${nome}, idade do gato: ${idade} e o hobby: ${hobby}
    ` )
}

// Maneira sem destrututuração
const showCats2 = (gato) => {
    console.log(
    `Nome do gato: ${gato.nome}, idade do gato: ${gato.idade} e o hobby: ${gato.hobby}
    ` )
}

// OBJETOS
const gatos = [
    gato("Apolo", 4, "Pedir comida"),
    gato("Tom", 1, "Brincar com o apolo"),
    gato("Olivia", 5, "Dormir")
]

console.log(gatos)

// For para percorrer o objeto contendo gatos e usando a função com desestruturação para retornar
console.log("Função Com destruturação")
for(let gato of gatos){
    showCats(gato)
}   

console.log("") // Apenas um espaço
console.log("Função sem destruturação")
// For para percorrer o objeto contendo gatos e usando a função sem desestruturação para retornar
for(let gato of gatos){
    showCats2(gato)
}   