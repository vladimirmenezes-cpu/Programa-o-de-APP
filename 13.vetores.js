// vetores

const listaDeNomes = ["Marta","Jose","Maria"]

console.log("Exibindo todos os elementos")
console.log(listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento")
console.log(listaDeNomes[0])

console.log("\nExibindo apenas o segundo elemento")
console.log(listaDeNomes[1])

console.log("\nExibindo apenas o terceiro elemento")
console.log(listaDeNomes[2])

console.log("\nAdicionando um elemento")
listaDeNomes.push("Martinhaaa")
console.log(listaDeNomes)

console.log("\nAdicionando um elemento")
listaDeNomes.push("Vitinho rouba casadas")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento:")
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

console.log("\nRemovendo um elemento:")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o ultimo  elemento:")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento:")
listaDeNomes.shift()
console.log(listaDeNomes)


