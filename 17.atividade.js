const listaDeAlunos = [
    { nome: "Ana", nota: 5.0},
    { nome: "Bruno", nota: 10.0},
    { nome: "Carla", nota: 2.0},
    { nome: "Andrea", nota: 7.0},
    { nome: "Marta", nota: 6.0}
]

console.log("Encontre a aula marta e mostrar o nome e a media dela.")
const encontrarMarta = listaDeAlunos.find(u => u.nome === "Marta")
console.log(`Nome: ${encontrarMarta.nome} \nMedia: ${encontrarMarta.nota}`)

console.log("mostre a media geral da turma.")
const somaNota = listaDeAlunos.reduce((total, usuario) => total + usuario.nota, 0)
console.log(somaNota)

console.log("mostre o nome e a nota dos alunos com nota abaixo de 7.0")
const abaixodeSete = listaDeAlunos.find(usuario => usuario.nota > 7.0)
abaixodeSete.forEach(usuario => {
    
});