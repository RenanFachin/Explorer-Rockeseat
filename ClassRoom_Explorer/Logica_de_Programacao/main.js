// Retornando um objeto, passando os dados para a construtora feita com uma arrow function
const Pessoa = (nome, tempoDeContribuicao, sexo, idade) => ({
    nome, tempoDeContribuicao, sexo, idade
  })


// --------------------------------------------------------------------------------------------- 
// Fazendo a conferência para saber, a partir do sexo se a pessoa contribuiu o minimo ou não
// REGRA 1
const contribuicaoMinimaConformeSexo = sexo => {
    const contribuicaoMinimaHomem = 35
    const contribuicaoMinimaMulher = 30
    
    // Caso homem, retorna 35. Caso mulher, retorna 30.
    const contribuicaoMinima = sexo == "M"
    ? contribuicaoMinimaHomem 
    : contribuicaoMinimaMulher
  
    return contribuicaoMinima
}
// --------------------------------------------------------------------------------------------- 

// --------------------------------------------------------------------------------------------- 
// REGRA 2
const totalMinimoAposentarConformeSexo = sexo => {
    const totalMinimoParaSeAposentarMulher = 85 
    const totalMinimoParaSeAposentarHomem = 95
  
    return sexo == "M" 
    ? totalMinimoParaSeAposentarHomem
    : totalMinimoParaSeAposentarMulher 
  }
  
// Função para saber o tempo de contribuição somado com a idade de cada pessoa a ser conferida
const calculoTotalContribuicao = (tempoDeContribuicao, idade) => 
tempoDeContribuicao + idade  
// --------------------------------------------------------------------------------------------- 



// {tempoDeContribuicao, sexo, idade} é a desestruturação
const podeSeAposentar = ({tempoDeContribuicao, sexo, idade}) => {
    // Regra 1: Para se aposentar, a pessoa precisa ter um tempo de contribuição maior do que o proposto
    // Para homem: 35 e para mulher: 30
    const regra1 = tempoDeContribuicao >= contribuicaoMinimaConformeSexo(sexo)

    // Regra 2: Para se aposentar, a soma da idade + tempo de contribuição precisa ser maior do que o descrito
    // Para homem: 95 e para mulher 85
    const regra2 = calculoTotalContribuicao(tempoDeContribuicao, idade) >= totalMinimoAposentarConformeSexo(sexo)
  
    return regra1 && regra2
  }


function calcularAposentadoria(pessoa) {
    if(podeSeAposentar(pessoa)) {
      console.log(`${pessoa.nome}, você pode se aposentar!`)
    } else {
      console.log(`${pessoa.nome}, você ainda não pode se aposentar!`)
    }
  }
  
  // OBJETOS
  const pessoas = [
    // nome, tempo de contribuição, sexo e idade passadas para a função PESSOA
    Pessoa("Carlos", 35, "M", 60),
    Pessoa("Godoy", 30, "M", 60),
    Pessoa("Luiz", 35, "M", 55),
    Pessoa("Tamara", 35, "F", 55),
    Pessoa("Anne", 30, "F", 50),
    Pessoa("Jana", 35, "F", 40)
  ]
  
  // Para cada objeto pessoa dentro de pessoas
  for (let pessoa of pessoas) {
    calcularAposentadoria(pessoa)
  }