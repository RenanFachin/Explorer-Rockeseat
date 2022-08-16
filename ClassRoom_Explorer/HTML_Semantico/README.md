## HTML - Semântico

O HTML semântico tem como objetivo descrever o significado do conteúdo presente em documentos HTML, tornando-o mais claro para programadores e usuários.

[Tags com significado]

- `<header>`
- `<section>`
- `<article>`
- `<nav>`
- `<aside>`
- `<main>`
- `<footer>`
- `<a>`
- `<strong>`
- `<cite>`

[Tags sem significado]

- `<div>`
- `<span>`

Vantagens de se usar tags semânticas

- Melhorar buscas
- Melhorias na acessibilidade


[Tags com significado]

`<header>`

Representa um grupo de suporte introdutório ou navegacional. Pode conter alguns elementos de cabeçalho mas também outros elementos como uma logo.

`<section>`

É uma seção. Geralmente uma section vem seguida de um h2.

```jsx
<section class="hero">
        <h2>exemplo</h2>
</section>
```

`<article>`

Remete a post.

Post de fórum, um artigo de revista ou jornal, um post de um blog, um comentário enviado e etc.

`<nav>`

Muito bom para o SEO da página (melhor rankeamento na procura).

É uma seção de uma página que aponta para outras páginas ou para outras áreas da página, ou seja, uma seção com links de navegação.

Geralmente 1 nav por página, porém, há indícios de que manter um nav também no footer, teria uma ajuda no SEO

`<main>`

Define o conteúdo principal dentro do BODY. O mesmo deverá ser único na página,

OBS: <MAIN> não pode ser filho dos elementos <article>, <aside>, <footer>, <header> e <nav>

`<footer>`

Representa um rodapé para a página.

Normalmente um rodapé contém informações sobre o autor da seção de dados, direitos autorais ou links para documentos relacionados.

`<aside>`

Representa uma seção de uma página que consiste de conteúdo que é tangencialmente relcionado ao conteúdo do seu entorno que poderia ser considerado separdo do conteúdo.

Essas seções são, muitas vezes, repsentadas como barras laterais. Muitas vezes contém explicações, laterais, como definição de glossáriom avisos, a bibliografia e autor.


[Tags sem significado]

`<DIV>`

É um container genérico para conteúdo de fluxo, que de certa forma não representa nada.

Ele pode ser utilizado para agrupar elementos para fins de estilos. 
<DIV> é um elemento de display block (de nível de bloco)

</aside>

`<SPAN>`

É um container genérico em linha para conteúdo fraseado, que não repsenta nada por natureza.

<SPAN> é um elemento display inline (de nível de linha)

</aside>
