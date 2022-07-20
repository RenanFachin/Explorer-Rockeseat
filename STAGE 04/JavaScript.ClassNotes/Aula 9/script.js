/*

    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima:
        "Paciente X possui um IMC de: Y"

    Onde:
        X é o nome do paciente
        Y é o IMC deste paciente
    
    Crie uma FUNÇÃO para fazer o cálculo do IMC

*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180
    }
]

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


function printPatientIMC (patient){
    return `
    Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients){
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}





/*
// Criação da função
function liquidificador (fruta1, fruta2){
    const suco = fruta1 + fruta2
    return suco
}

// Execução da função
let meuSuco = liquidificador("maça","banana")

alert(meuSuco)
*/

