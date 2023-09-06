function comparador(num1, num2){
    if (num1 > num2) {
        return console.log(`O primeiro é MAIOR que o segundo`)
    }
    else if (num1 < num2) {
        return console.log(`O primeiro é MENOR que o primeiro`)
    }
    else {
        return console.log(`O primeiro número é IGUAL ao segundo`)
    }
}

let num1 = Number(prompt(`Insira o primeiro número`))
let num2 = Number(prompt(`Insira o segundo número`))

comparador(num1, num2)
