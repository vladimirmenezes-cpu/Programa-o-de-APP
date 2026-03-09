// Novos recursos ES6

// Vetor de numeros

const listaDeNomes = [1,2,3,4,5]

console.log("EXIBINDO NUMEROS DO VETOR:")
console.log(listaDeNomes)

console.log("\nMultiplicando numeros do vetor:")
const dobrados = listaDeNomes.map(n => n * 2)
console.log(dobrados)

console.log("\nFiltrar numeros pares do vetor:")
const pares = listaDeNomes.filter(n => n % 2 == 0)
console.log(pares)

console.log("\nSomandos todos os numeros do vetor:")
const soma = listaDeNomes.reduce((soma,atual) => soma + atual, 0)
console.log(soma)