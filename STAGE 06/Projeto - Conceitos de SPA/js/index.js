import { Router } from './router.js'

const router1 = new Router()
router1.add("/", "/pages/home.html")
router1.add("/about", "/pages/about.html")
router1.add("/contact", "/pages/contact.html")
router1.add(404, "/pages/404.html")

        //Mapeando as rotas
        //const routes = {
        //    "/": "/pages/home.html",
        //   "/about": "/pages/about.html",
        //    "/contact": "/pages/contact.html",
        //    404: "/pages/404.html",
        // }

        router1.handle() //Apenas para iniciar já com a home page

        //Para corrigir a navegação da página pelos botões de voltar
        window.onpopstate = () => router1.handle()

        // Colocando na "window" a função route
        window.route = () => router1.route()

// OBS: ROUTER1 FOI UM NOME ALEATORIO CRIADO, PODERIA SER QUALQUER OUTRO