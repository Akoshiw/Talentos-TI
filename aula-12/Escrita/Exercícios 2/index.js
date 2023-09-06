
function somaDeNumeros(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

function maiorIgual(numero1, numero2){
    let resultado = numero1 >= numero2
    return resultado
}

function par(numero){
    let par = numero % 2
    let resultado = par === 0
    return resultado
}

function lengthMaiusculo(frase){
    let tamanho = frase.length
    let fraseMaiuscula = frase.toUpperCase()
    let resultado = `Frase: ${fraseMaiuscula}. Tamanho: ${tamanho}`
    return resultado
}
console.log(`A) ${somaDeNumeros(5, 5)}`)
console.log(`B) ${maiorIgual(1, 2)}`)
console.log(`C) ${par(4)}`)
console.log(`D) ${lengthMaiusculo("Eu gosto de comer abacaxi")}`)