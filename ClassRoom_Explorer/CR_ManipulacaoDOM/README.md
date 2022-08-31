# Manipulando a DOM

DOM = Documento Object Model

## BUSCANDO e SELECIONANDO elementos
- **Por ID**: .getElementById() <br>
- **Por CLASS**: .getElementByClassName() <br>
- **Por Seletor CSS**: .querySelector() <br>
- **Por Coleção de seletores CSS**: .querySelectorAll() <br>

## Manipulação do conteúdo - Pegar e mudar o conteúdo
- **.textContent**
Considera quebras de linha e espaços entre tags. Não renderiza HTML <br>
- **.innerText** 
Desconsidera quebras de linha e espaços entre tags. Não renderiza HTML <br>
- **.innerHTML** 
Para adicionar ou pegar tags HTML de qualquer elemento que tenha conteúdo <br>
- **.value** 

## Propriedades e Classes
- Alterar o estilo direto na TAG: **.style** <br>
    - Lembrando de estar sempre em camelCase o nome das propriedades do CSS
- Pegar e alterar a lista de classes: **.classList** <br>
    - add()
    - remove()
    - toggle()
    - contains()
    - forEach()
- Pegar atributos: **.getAttribute()** <br>
- Atribuir ou modificar atributos: **.setAttribute()** <br>