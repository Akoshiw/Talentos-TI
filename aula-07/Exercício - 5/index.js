
const promptNome = prompt("Qual o seu nome?")
const promptNasc = prompt("Que ano você nasceu?")
const promptAno = prompt("Em qual ano estamos?")

let anoNasc = Number(promptNasc)
let anoAtual = Number(promptAno)
let idade = anoAtual - anoNasc

console.log("Nome:", promptNome)
console.log("Idade:", idade)
console.log("É maior de idade?", idade >= 18)
console.log("Idade em 2050:", 2050 - anoNasc)

