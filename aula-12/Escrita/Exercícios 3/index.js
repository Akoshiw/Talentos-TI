function soma(numero1, numero2){
    resultado = numero1 + numero2
    return resultado
}

function subtracao(numero1, numero2){
    resultado = numero1 - numero2
    return resultado
}

function multiplicacao(numero1, numero2){
    resultado = numero1 * numero2
    return resultado
}

function divisao(numero1, numero2){
    resultado = numero1 / numero2
    return resultado
}

let numero1 = Number(prompt(`Insira o seu primeiro número.`))
let numero2 = Number(prompt(`Insira o seu segundo número.`))

console.log(`Numeros inseridos: ${numero1} e ${numero2}`)
console.log(`Soma: ${soma(numero1, numero2)}`)
console.log(`Diferença: ${subtracao(numero1, numero2)}`)
console.log(`Multiplicação: ${multiplicacao(numero1, numero2)}`)
console.log(`Divisão: ${divisao(numero1, numero2)}`)