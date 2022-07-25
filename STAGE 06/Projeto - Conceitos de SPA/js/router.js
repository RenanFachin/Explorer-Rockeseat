 export class Router {

    //Iniciando a variável routes como um objeto vazio
    routes = {}

    add(routeName, page){
    // routeName vai ser a chave do objeto literal ("/","/about","/contact",404)
    // page será o valor respectivo a chave (routeName) = ("/pages/home.html", "/pages/about.html","/pages/contact.html","/pages/404.html")
    this.routes[routeName] = page

}

    // Alterando o comportamento padrão
    route(event){
        event = event || window.event
        event.preventDefault()
    
    
        window.history.pushState({}, "", event.target.href)
    
        // this faz a referência a função handle que está dentro da class Router
        this.handle()
    }


    //Mapeando rotas e Assíncrona
    handle(){
        const { pathname } = window.location
        // vá até o window.location, ache a propriedade pathname e retorne ela como uma CONST
    
        const route = this.routes[pathname] || this.routes[404]
        // coloca dentro da const route o resultado do objeto encontrado ou em caso de erro, mostrar o erro
    
    
        //Assíncrono
        fetch(route)
        .then(data => data.text())
        .then(html => {
        document.querySelector('#app').innerHTML = html
        }) 
    
    
    }


}


