
const kwHora = 0.05
let consumoHora = 280
let desconto = 15
desconto = (100 - desconto) / 100

console.log(`Valor cheio: ${kwHora*consumoHora}`)
console.log(`Valor com 15% de desconto: ${(kwHora*consumoHora)*desconto}`)

//Não entendi se era pra fazer prompt para as variáveis então farei ambas as formas

consumoHora = Number(prompt(`Insira o consumo em Quilowatts-hora.`))
desconto = Number(prompt(`Insira a sua porcentagem de desconto.`))
desconto = (100 - desconto) / 100

console.log(`Valor cheio: ${kwHora*consumoHora}`)
console.log(`Valor com 15% de desconto: ${(kwHora*consumoHora)*desconto}`)
