/*

    Crie uma lista de pacientes

    Cada paciente dentro da lista, deverá conter
        nome
        idade
        peso
        altura
    
    Escreva uma lista contendo o nome dos pacientes

*/
/*
//criando OBJETO

//Object literal
const smarthphone = {
    color: "black",
    weight: "100",

}

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

let patientsNames = []
let patientsAge = []
let patientWeight = []
let patientHeight = []

/*
for(let index=0; index< patients.length; index++){
    patientsNames[index] = patients[index].name
}
*/

for(let patient of patients){
    patientsNames.push(patient.name)
    patientsAge.push(patient.age)
    patientWeight.push(patient.weight)
    patientHeight.push(patient.height)
}

for(let i=0; i<patients.length; i++)
{
    alert(`Paciente ${i+1}: ${patientsNames[i]}, tem ${patientsAge[i]} anos, pesa ${patientWeight[i]} Kg e tem uma altura de ${patientHeight[i]}cm`)
}

