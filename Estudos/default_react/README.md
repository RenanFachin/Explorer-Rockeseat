<div align="center">
  <img alt="Logo Explorer" title="Explorer" src="https://i.imgur.com/2IqqDoo.png">
</div>

# REACTJS
É uma biblioteca javascript de código aberto para criação de interfaces.<br>

### JSX
É a extensão que permite o uso do react. É possível escrever html dentro do javascript!

### Exportação nomeada
  Fazendo o export:
  ```jsx
  export function Details(){return()}<br>
  ```
  
  Fazendo o import:
  ```jsx
  import { Details } from './src/pages/details'<br>
  ```

## ESTRUTURA DOS ARQUIVOS REACT JS

  - Primeiro arquivo a ser lido: `index.html` 
      - Este arquivo index.html irá funcionar como uma html "normal" de uma SINGLE PAGE APPLICATION (SPA)
      - Neste arquivo terá uma div de id root que será o local onde será inserido de forma dinâmica o conteúdo das páginas
          ```js
              <div id="root"></div>
          ```
      - Neste arquivo também será carregado o arquivo js para fazer esta mudança no conteúdo da div root
          ```js
              <script type="module" src="./src/main.jsx"></script>
          ```
          
  - No arquivo `main.jsx`
      - É onde será feita a troca dos conteúdos da #root a partir do `<Home/>`
          ```jsx
              import { Home } from './pages/Home'
          
              ReactDOM.createRoot(document.getElementById('root')).render(
                <React.StrictMode>

                  <Home />

                </React.StrictMode>
              )
          ```
        - FORMA QUE É FEITO O IMPORT DE ESTILOS NA MAIN.JSX
        
        ```jsx
        // Utilizando os Estilos
            import { ThemeProvider } from 'styled-components'
            import theme from './styles/theme'
            import GlobalStyles from './styles/global'
            
            // Inicializando
            <React.StrictMode>

                <ThemeProvider theme={theme}>
                  <GlobalStyles/>

                    <SignIn />

                </ThemeProvider>
           </React.StrictMode>

        ```
        
        
  - no arquivo `Home` é onde realmente vai ficar o html que será renderizado pela main.jsx e depois mostrada pela index.html
      - Estrutura padrão:
          ```jsx
          export function Home() {
            return (
              <h1>Olá mundo!</h1>
            )
          }
          ```

## ESTRUTURA DAS PASTAS DE UM ARQUIVO REACT JS
```diff
!   src/
!       /assets
            /img/
!       /pages
+            /Home
              /index.jsx
              /styles.js
+            /SignIn
              /index.jsx
              /styles.js
+            /Details
              /index.jsx
              /styles.js
!       /styles
            /global.js
            /theme.js
```

## CSS-in-JS
Aproveitam métodos atuais de componentização em JAVASCRIPT apra criar COMPONENTES.

### Styled-components
Desenvolvido para melhorar a maneira que lidamos com o CSS nos `COMPONENTES` de aplicações REACT.

```
+       /NomeDoComponente
          /index.jsx
          /styles.js
```

### Estrutura padrão
Na index.jsx
```jsx
import {Container} from './styles'

export function NomeDoComponente(){
  return(
    <Container>
    </Container>
  )
}
```

Na styles.js
```js
import styled from 'styled-components'

export const Container = styled.div`
/*
Colocar as estilizações aqui
*/
`
```

`COMPONENTES` = Reaproveitamento de código de maneira eficiente

Vantagens:

- [x] Sem colisão de classes
- [x] Desempenho
- [x] Estilo dinâmico
- [x] Manutenção
- [x] Boas práticas

### Estilizando com os themes
```css
color: ${(theme)} => theme.COLORS.RED};;
```
