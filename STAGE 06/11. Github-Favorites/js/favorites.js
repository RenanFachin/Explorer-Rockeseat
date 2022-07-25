import { GithubUser } from "./GithubUser.js"

// Clase que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
    constructor(root) {
        // o root será o "id = app"
        this.root = document.querySelector(root)
        this.load()


    } 

    //função para carregamento dos dados
    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }


    // salvando no localStorage
    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
    
          const userExists = this.entries.find(entry => entry.login === username)
    
          if(userExists) {
            throw new Error('Usuário já cadastrado')
          }
    
    
          const user = await GithubUser.search(username)
    
          if(user.login === undefined) {
            throw new Error('Usuário não encontrado!')
          }
    
          this.entries = [user, ...this.entries]
          this.update()
          this.save()
    
        } catch(error) {
          alert(error.message)
        }
      }

    // função para deleter algum dado
    delete(user){
        // .filter é uma higher-order function (map, filter, find, reduce são outros exemplos)
        const filteredEntries = this.entries
            .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}




// Classe que vai criar a visualização e eventos do HTM

export class FavoritesView extends Favorites {
    // Vai herdar de Favorites tudo o que tem em favorites

    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onAdd()
    }


    onAdd(){
        // Pegar o botão
        const addButton = this.root.querySelector('.search button')

        // Quando clicar no botão será pego o {value} dentro do input e mandando para a função add(value)
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update(){
        this.removeAllTr()


    this.entries.forEach(user => {
        const row = this.createRow()

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user a').href = `https://github.com/${user.login}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers

        row.querySelector('.remove').onclick = () => {
            const isOk = confirm('Tem certeza que deseja deletar essa linha?')
            // confirm() irá retornar true ou false

            if(isOk){
                this.delete(user)
            }
        }

        this.tbody.append(row)
    })



    }

    createRow(){
        // criando o tr pela DOM
        const tr = document.createElement('tr')

        const content = `
            <td class="user">
                <img src="https://github.com/RenanFachin.png" alt="Imagem da capa do GITHUB">
                <a href="https://github.com/RenanFachin" target="_blank"><p>Renan Fachin</p><span>RenanFachin</span></a>
            </td>

            <td class="repositories">
                31
            </td>

            <td class="followers">
                10000
            </td>

            <td>
                <button class="remove">&times;</button>
            </td>

        </tr>

    `
        // Colocando o conteúdo de content dentro da tr criada pela DOM
        tr.innerHTML = content

        return tr
    }


    removeAllTr(){
        // "Busca dentro de root o table tbody e coloca na constante tbody"
        // const tbody = this.root.querySelector('table tbody')

        // entrando no tbody e buscando todos os seletores tr (linhas) e retorna um array like e aceita funcionalidades de array
        // Então, para cada tr que entrar, será executado uma função
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                // removendo todos os elementos tr da página
                tr.remove()
            })
    }
}