
/*
function divisorArray (array){
    let primeiroNumero = array[0]
    let segundoNumero = array[array.length-1]
    primeiroNumero = primeiroNumero / 2
    segundoNumero = segundoNumero / 2
    let novosNumeros = [segundoNumero, primeiroNumero]
    return novosNumeros
}

const string = prompt(`Insira uma lista de números, separados por espaços.`)
let array = string.trim().split(/\s+/) //aprendi a usar isso no desafio 1 da aula 10
const divisao = divisorArray(array)

console.log(divisao)
*/


let array = [5, 7, 9, 15]

function novoArray (){
    primeiro = array[0];
    ultimo = array[array.length -1];
    novosNumeros = [primeiro/2, ultimo/2];
    return novosNumeros
}

let resultado= novoArray()
console.log(novosNumeros)












