
const nomeCompleto = prompt(`Insira o seu nome completo`)
let tipoJogo = prompt(`Insira o seu tipo de jogo`)
let etapaJogo = prompt(`Insira a sua etapa de jogo`)
const categoria = Number(prompt(`Insira a categoria. 1, 2, 3 ou 4`))
const ingressos = Number(prompt(`Insira quantos ingressos você vai comprar.`))  
let valorIngresso = []

tipoJogo = tipoJogo.toUpperCase()
if (tipoJogo === "IN" || tipoJogo === "INTERNACIONAL"){
    tipoJogo = `Internacional`
}
else if(tipoJogo === "DO" || tipoJogo === "DOMÉSTICO"){
    tipoJogo = `Doméstico`
}
else{
    tipoJogo = `Indefinido`
}    

etapaJogo = etapaJogo.toUpperCase()
if (etapaJogo === "SF" || etapaJogo === "SEMI-FINAL"){
    etapaJogo = `Semi-Final`
    valorIngresso = [1320, 880, 550, 220]
    valorIngresso = valorIngresso[categoria-1]
}
else if(etapaJogo === "DT" || etapaJogo === "DECISÃO DE TERCEIRO LUGAR"){
    etapaJogo = `Decisão de Terceiro Lugar`
    valorIngresso = [660, 440, 330, 170]
    valorIngresso = valorIngresso[categoria-1]
}
else if(etapaJogo === "FI" || etapaJogo === "FINAL"){
    etapaJogo = `Final`
    valorIngresso = [1980, 1320, 880, 330]
    valorIngresso = valorIngresso[categoria-1]
}
else{
    etapaJogo = `Indefinido`
}    

if(tipoJogo === `Internacional` && !isNaN(valorIngresso)){
    valorIngresso = valorIngresso * 4.90
}

console.log(`---Dados da compra--- `)
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo do jogo: ${tipoJogo}`)
console.log(`Etapa do jogo: ${etapaJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${ingressos}`)
console.log(`---Valores--- `)
if(!isNaN(valorIngresso)){
    console.log(`Valor do ingresso: R$${valorIngresso}`)
    console.log(`Valor total: R$${valorIngresso * ingressos}`)
}
else{
    console.log(`Valores indefinidos`)
}
