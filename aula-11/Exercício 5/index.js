const somarNumeros = function(primeiroNumero, segundoNumero) {
    const soma = primeiroNumero + segundoNumero
    return soma
}

let subtrairNumeros = (primeiroNumero, segundoNumero) => {
    const subtracao = primeiroNumero - segundoNumero
    return subtracao
}

let soma = somarNumeros(3,4)
let subtracao = subtrairNumeros(3,4)

console.log(soma, subtracao)