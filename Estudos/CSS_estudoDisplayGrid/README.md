# CSS GRID

## GRID

    - Bidimensional
    - Divisão de toda a página em LINHAS E COLUNAS
    - Colocar elementos onde quiser nesta divisão

## GRID OU FLEXBOX?

    - Grid = Duas dimensões (LINHAS E COLUNAS)
    - Flexbox = Uma dimensão (OU LINHA OU COLUNA)

    - Um complementa o trabalho do outro

## PROPRIEDADES
    - 2 grupos (CONTAINER E ITEMS(S))

### CONTAINER
    - display: grid
    - grid-template-columns;
    - grid-template-rows;
    - gap (row e column)
    - grid-template-areas

### ITEM(S)
    - grid-column
        - grid-column-start
        - grid-column-end
    - grid-row
        - grid-row-start
        - grid-row-end
    - grid-area

# GRID - ALINHAMENTOS
    - Existem 6 tipos de alinhamentos:
        - Justify-content
        - Align-content
        - Justify-itens
        - Align-itens
        - Justify-self
        - Align-self

Separando em 2 grupos:
1. `Justify` e `Align`
2. `content`, `itens` e `self`

## JUSTIFY e ALIGN
    - Sabendo que o grid é bidimensional, nós temos o eixo x e o y
        - eixo x: esquerda para direita
        - eixo y: cima para baixo

## CONTENT, ITEMS E SELF
    - CONTENT
    Justify-content e align-content nos permite alinhar o próprio grid, relativo ao espaço fora do grid
    - O uso dessas propriedades são raros, pois só é aplicado caso o grid seja menor que a área definida.

    - Podemos utilizar **7 Valores**
        1. start
        2. end
        3. center
        4. strech
        5. space-between
        6. space-around
        7. space-evenly
    
    - ITEMS
    Justify-items e align-items vai permitir alinhas os itens em nosso grid, em qualquer espaço disponível na célula em que ele habitar.

     - Podemos utlizar **4 valores**
        1. start
        2. end
        3. center
        4. strech

    - SELF
    Justify-self e align-self vai nos permitir alinhar o item em si.

    Faz a mesma coisa que o justify-items e align-items, porém, aplicado diretamente no item de um grid.