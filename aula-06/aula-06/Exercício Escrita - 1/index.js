
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// O tipo undefined foi impresso pois nenhum valor foi definido para as variáveis

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// As duas variáveis se tornaram strings, pois todas as respostas de um prompt se tornam strings

console.log("Olá", nome, "você tem", idade, "anos.")