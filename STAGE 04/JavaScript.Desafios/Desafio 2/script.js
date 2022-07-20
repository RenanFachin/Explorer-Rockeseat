// Lista de objetos com nome, primeira nota e segunda nota de cada aluno
const students = [
    {
        name: "João",
        PrimeiraNota: 10,
        SegundaNota: 8
    },

    {
        name: "Leticia",
        PrimeiraNota: 7,
        SegundaNota: 7
    },

    {
        name: "Diego",
        PrimeiraNota: 5, 
        SegundaNota: 5
    },

    {
        name: "Julia",
        PrimeiraNota: 8, 
        SegundaNota: 4
    },

    {
        name: "Renan",
        PrimeiraNota: 10, 
        SegundaNota: 10
    },

    {
        name: "Miguel",
        PrimeiraNota: 3, 
        SegundaNota: 2
    },

    {
        name: "Ravi",
        PrimeiraNota: 8, 
        SegundaNota: 9
    },

    {
        name: "Felipe",
        PrimeiraNota: 1, 
        SegundaNota: 2
    },

    {
        name: "Vitor",
        PrimeiraNota: 3, 
        SegundaNota: 4
    },

    {
        name: "Sophia",
        PrimeiraNota: 6, 
        SegundaNota: 7
    },

    {
        name: "Heloísa",
        PrimeiraNota: 6, 
        SegundaNota: 7
    },

    {
        name: "Luísa",
        PrimeiraNota: 9, 
        SegundaNota: 8
    },

    {
        name: "Manuela",
        PrimeiraNota: 6, 
        SegundaNota: 8
    },

    {
        name: "Mariana",
        PrimeiraNota: 10, 
        SegundaNota: 4
    },

]

//Puxando os objetos dentro de arrays
let studentsName = []
let studentsPrimeiraNota = []
let studentsSegundaNota = []


//Para cada elemento dentro de cada objeto buscar e fazer o .push para os arrays criados
for(let student of students){
    studentsName.push(student.name)
    studentsPrimeiraNota.push(student.PrimeiraNota)
    studentsSegundaNota.push(student.SegundaNota)
}

// Função para se ter a média
function media (notaUm,notaDois){
    let media = ((notaUm + notaDois) / 2)

    return media
}

// For para percorrer cada elemento dentro do array junto com um IF para filtrar quem foi APROVADO ou não
for (let i=0; i<students.length; i++){
    let y = media(studentsPrimeiraNota[i],studentsSegundaNota[i])

    if(y>=7){
        alert(`
        A média do(a) aluno(a) ${studentsName[i]} é: ${y.toFixed(2)}
        Parabéns ${studentsName[i]}! Você foi: aprovado(a) no concurso
        `)
    }
    else{
        alert(`
        A média do(a) aluno(a) ${studentsName[i]} é: ${y.toFixed(2)}
        Não foi dessa vez, ${studentsName[i]}! Tente novamente!
        `)
    }

}



