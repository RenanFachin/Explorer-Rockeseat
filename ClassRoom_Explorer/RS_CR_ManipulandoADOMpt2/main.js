// Criando um elemento com a DOM
const h1 = document.createElement('h1')

// Atribuindo um "valor" ao elemento criado
h1.innerHTML = 'Texto de exemplo'
// Atribuido uma classe
h1.classList.add('title')


// INSERINDO O ELEMENTO NA PÁGINA
document.body.append(h1)

// REMOVENDO ALGO DA PÁGINA
h1.remove()


// EVENTOS
const button = document.querySelector('button')

// Variável de controle para saber para qual cor precisa ser trocado
let isColorChanged = true
const h2 = document.querySelector('h2')


function handleClick(){
    h2.style.color = isColorChanged ? "blue" : "black"
    isColorChanged = !isColorChanged
}

function handleClickOpacity(){
    h2.style.opacity = 0.4
}

//  Onclick só pode 1 por página
// button.onclick = handleClick

button.addEventListener('click', handleClick)
button.addEventListener('click', handleClickOpacity)




let isVisible = true
window.addEventListener('keydown', (event)=> {
    // event sempre vem carregado de informações sobre o evento

    // const key = event.key

    // Dessa maneira, será pego diretamente a propriedade .key de dentro de event
    const {key} = event

    // Fazendo o check para saber se é exatamente igual a ESC a tecla clicada
    if(key ==='Escape'){
        h2.style.display = isVisible ? 'none' : 'block'
        isVisible = !isVisible
    }
})


// Tratamento de dados com a DOM
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
        // event sempre vem carregado de informações sobre o evento
        event.preventDefault()
})


// Sempre que houver mudanças (change)
const input = document.querySelector('input')


input.addEventListener('change', (event) => {    
    // Desta maneira será plotado o que tem dentro do input
    console.log(event.currentTarget.value)
})