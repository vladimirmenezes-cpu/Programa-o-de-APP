// Vetores de objetos

const nomes = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "Julia", idade: 5}
]

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Percorrendo e exibindo os elementos do vetor.
console.log("Exibindo todos os usuarios do vetor.")
nomes.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos`)
    
})

// Como os antigos 









console.log("Exibindo todos os usuarios do vetor.")
for (let i = 0; i < nomes.length; i++) {
    console.log(`${nomes[i].nome} tem ${nomes[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = nomes.filter(usuario => usuario.idade >= 18)
//  Use as {} caso precise de mais de uma linha.
// Neste caso nao precisa, por isso nao vamos usar
maioridade.forEach( usuario =>
    console.log(`${usuario.nome} TEM ${usuario.idade} anos.`)
)


console.log("\nFiltrando Menores de 18 anos.")
const menor = nomes.filter(usuario => usuario.idade < 18)
menor.forEach( usuario =>
    console.log(`${usuario.nome} TEM ${usuario.idade} anos.`)
)


console.log("\nNa lista de numeros, filtre e mostre apenas numeros pares.")
const pares = numeros.filter( n => n % 2 ==0)
console.log(pares)

console.log("\nNa lista de nomes, mostre todos os nomes com forEach.");
nomes.forEach((pessoa, indice) => {
    // Como 'pessoa' é um objeto {nome: "Ana", idade: 25}, 
    // precisamos acessar pessoa.nome
    console.log(`${indice + 1}. ${pessoa.nome}`);
});

console.log("\nNa lista de usuarios, encontre um usuario.")
const usuarioencontrado = nomes.find(u => u.nome === "Ana")
console.log(`Nome: ${usuarioencontrado.nome} \nIdade: ${usuarioencontrado.idade}`)


console.log("\nNa lista de usuarios, encontre um usuario com idade de 45 anos.")
const encontrarvelho = nomes.find(b => b.idade === 45 )
console.log(`Usuário encontrado: ${encontrarvelho.nome}, que tem ${encontrarvelho.idade} anos.`)

console.log("\nNa lista de usuarios,somando todas as idade:")
const somaIdade = nomes.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdade)

