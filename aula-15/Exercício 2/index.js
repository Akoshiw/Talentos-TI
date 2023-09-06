function comparador(num1, num2){
    let resultado = num1 === num2
    if (resultado) {
        return console.log(`Iguais`)
    }
    else {
        return console.log(`Diferentes`)
    }
}

let num1 = Number(prompt(`Insira o primeiro número`))
let num2 = Number(prompt(`Insira o segundo número`))

comparador(num1, num2)