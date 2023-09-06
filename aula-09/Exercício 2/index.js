
let frase = prompt("Insira uma frase.")
frase = frase.toUpperCase()
frase = frase.replaceAll("O", "I")
let tamanho = frase.length

console.log(`Frase: ${frase}`)
console.log(`Caracteres: ${tamanho}`)
