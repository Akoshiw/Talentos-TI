let carrinho = []

const fruta1 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta2 = {
    nome: "Abacaxi",
    disponibilidade: true
}

const fruta3 = {
    nome: "Maracujá",
    disponibilidade: true
}

function cliente(fruta){
    return carrinho.push(fruta)
}

cliente(fruta1)
cliente(fruta2)
cliente(fruta3)

console.log(carrinho)