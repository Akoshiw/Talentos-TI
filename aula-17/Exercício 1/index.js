let numeros = true
let numeroSoma = 0

while(numeros > 0){
    numeros = Number(prompt(`Insira um número`))
    numeroSoma = numeroSoma + numeros
    console.log(numeroSoma)
}