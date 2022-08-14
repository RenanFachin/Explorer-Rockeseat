- Entrou no Javascript no ECMAScript 6 (ES6);
- **Disponibilizar** qualquer tipo de dado entre arquivos;
- **Separar** código em diversos arquivos;
- **Isolar** escopo e código;

## Preparando o ambiente para usar o ES MODULES

- Em uma nova pasta, vamos criar os arquivos
    - `index.html`
    - `main.js`
    - `utils.js`

- Preparando o index.html
    - Crie a estrutura e adicione o main.js com a tag <script>
    
- Habilite a tag <script> para utilizar a sintaxe
    - Adicionando o atributo type=”module” a tag <script>

### IMPORT e EXPORT “simples”

Podemos executar qualquer arquivo e ele será executado imediatamente

```jsx
// utils.js
const message = "mensagem"
alert(message)

// main.js
import './util.js'
```

### IMPORT e EXPORT “default”

```jsx
// utils.js
export default 'algum dado'

		// Ou para um dado já existente
		const text = 'alguma coisa'
		export default text

// main.js
import qualquernome from './utils.js'

// OBS: O default deixa atribuir qualquer nome ao IMPORT
// OBS2: Somente 1 default por arquivo
```

### NAMED EXPORT

Exportamos uma variável ou função e, ao importar, devemos colocar o MESMO NOME.

```jsx
// utils.js
export const today = Date.now()

	// Exportanto um valor já existente
	const double = number => number * 2
	export { double }
	
	// Exportando diversas funções/variáveis e etc
	export { today, double }

// main.js
import { today } from './utils.js'

// OBS: É possível multíplos exports
```

### Misto (NAMED e DEFAULT)

```jsx
// utils.js
const date = new Date()
const greeting = name => `Hello ${name}`

export default function (argumento){
	console.log(date, greeting(argumento))
}

export { date, greeting }

// main.js
import funcPadraoQualquerNome, { date, greeting } from './utils.js'

// funcPadraoQualquerNome = export default aceita qualque nome
// { date, greeting } = named export, precisa ser exatamente o mesmo nome
```

### IMPORT AS

É possível renomer um ou mais dados que foram exportados

```jsx
// utils.js
export function sum(a,b){
	return a + b
}

// main.js
import { sum as soma } from './utils.js'
```

### IMPORT * AS

Podemos importar todos os namedexports e dar um nome padrão para todos

```jsx
// utils.js
export const sum = (a,b) => a + b
export const multiply = (a,b) => a * b
export const substract = (a,b) => a - b
export const divide = (a,b) => a / b

// ou tirar os export antes do const e fazer:
// export { sum, multiply, substract, divide }

//main.js
import * as calculator  from './utils.js'
```