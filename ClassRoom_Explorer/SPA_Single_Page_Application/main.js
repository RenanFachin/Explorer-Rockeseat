// função que será rodada quando tiver o click no menu (onClick)
const route = (event) => {
    event.preventDefault()

    window.history.pushState(null, null, event.currentTarget.href) // guarda a url do item que foi clicado no histórico

    handleLocation(event.currentTarget)
}

// Fazendo o link ficar ativo pela url
const makeLinkActive = () => {

    // pelo clique
    document.querySelectorAll('ul li a')
        .forEach(a => a.classList.remove('active'))

    // pelo link
    const { pathname } = location
    const currentLink = document.querySelector('a[href="'+pathname+'"]')
    currentLink.classList.add('active')
}

// Fazendo o redirencionamento das rotas
const newRoutesPage = {
    "/": "/pages/home.html",
    "/gallery": "/pages/gallery.html"
}

// Quando clicado
const handleLocation = async () => {
    makeLinkActive() // dizendo para a página ter o nav em bold ativado pelo link e pelo clique
    addCurentPageClassToBody() // Adicionando ao body a página atual

    // pegar o caminho atual que estou
    const { pathname } = location  // pegando o pathname de location

    // pegar o caminho onde estão meus arquivos (pages)
    const route = newRoutesPage[pathname]

    //console.log(route)

    // fazer a leitura dos arquivos .html (pages/)
    const htmlSPA = await fetch(route).then(res => res.text())

    //console.log(htmlSPA)

    // colocar conteúdo do html no elemento #app
    document.getElementById('app').innerHTML = htmlSPA
}


const addCurentPageClassToBody = () => {
    const { pathname }= location // pegar o caminho atual que estou
    const route = newRoutesPage[pathname] // pegar o caminho onde estão meus arquivos (pages)

    const [_, pages, file] = route.split('/') // retorna só home.html ou gallery.html
    const [className] = file.split('.') // retorna só o home ou só o gallery
    document.body.setAttribute('class', className) // adiciona só home ou só gallery como atributo(class) do body
}


// Fazendo ser a primeira coisa a ser executada na página, sem precisar ser chamada pela função route (onclick)
handleLocation()