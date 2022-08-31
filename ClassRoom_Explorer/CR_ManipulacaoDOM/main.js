// const titulo = document.getElementById('titulo')
const titulo = document.querySelector('h1')

console.log(titulo)

const element = document.querySelectorAll('ul li')
const element2 = document.querySelector('ul li:nth-child(4)')

console.log(element) // Pegando toda a lista
console.log(element[2]) // Pegando o elemento da posição [2]

element2.textContent = "mudei o que tava aqui"
element.innerHTML = "<h3>teste</h3>"
console.log(element2.textContent)

const input = document.querySelector('input')

// Pegando o que está dentro do input
console.log(input.value = "atribuindo um novo valor ao input")


//--------------------------------------------------------------------------------
titulo.style.textTransform = "uppercase"
// é colocado diretamente na tag
// Alto grau de especificidade
// Só aceita camelCase

//--------------------------------------------------------------------------------
// Alterando classes através do classList
// add(), remove(), toggle(), contains() (true ou false), forEach()
titulo.classList.add('green')


const classesH1 = titulo.getAttribute('class')

console.log(classesH1) // Retorna as classes