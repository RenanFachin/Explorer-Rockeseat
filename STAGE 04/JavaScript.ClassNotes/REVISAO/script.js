
//FUNÇÕES
//ARROW FUNCTION
const sum = (a,b,c) => a + b + c

const mySum = sum(2,2,2)

console.log(`Minha soma é igual a ${mySum}`)


// IF/ELSE/ELSE IF

const isRainning = true

if(isRainning){
    alert("Pegue o guarda chuva")
}
else{
    alert("Dia limpo!")
}

// SWITCH

const water = "com gás"
const waterTest = prompt(`Digite o tipo de água que deseja:

com gás
sem gás
da fonte
nenhuma
`)

switch (waterTest) {
    case "com gás":
        alert("Essa água é com gás")
    break

    case "sem gás":
        alert("Essa água é sem gás")
    break

    case "da fonte":
        alert("Essa água é da fonte")
    break

    default:
        alert("Cadê minha água?!")
}


//ESTRUTURA FOR

let text = "abc"
for(let i = 0; i<text.length; i++){
    alert(text[i])
}

for(let i=10; i>1; i--){
    console.log(i)
}


// FOR OF

//pegue um caracter da variável texto e mostre o caracter
for(let char of text){
    alert(char)
}

const myArray = ["maça", "banana", "ovo"]
for (let fruit of myArray){
    alert(fruit)
}

