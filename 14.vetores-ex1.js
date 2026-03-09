// Exercicio

const listaFamilia = ["Vanessa","Claudia","Cosme","Damiao","Paulo"]

console.log("\nExibindo famiiares")
console.log(listaFamilia)

console.log("\nExibindo apenas o primeiro famiiar")
console.log(listaFamilia[0])

console.log("\nExibindo apenas o segundo famiiar")
console.log(listaFamilia[1])

console.log("\nExibindo apenas o terceiro famiiar")
console.log(listaFamilia[2])

console.log("\nAdicionando um familiar")
listaFamilia.push("TOTO")
console.log(listaFamilia)

console.log("\nRemova um familiar")
listaFamilia.splice(2,1)
console.log(listaFamilia)

console.log("\nRemovendo apenas o ultimo")
listaFamilia.pop()
console.log(listaFamilia)

console.log("\nRemovendo apenas o primeiro")
listaFamilia.shift()
console.log(listaFamilia)





