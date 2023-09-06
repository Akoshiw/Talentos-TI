/*
let nome = []
let nome1 = prompt(`Insira um primeiro nome`)
let nome2 = prompt(`Insira um segundo nome`)
let nome3 = prompt(`Insira um terceiro nome`)

nome.push(nome1, nome2, nome3)


function imprimirNome(nome){
    console.log("Olá," + nome +"!")
}

imprimirNome(nome[0])
imprimirNome(nome[1])
imprimirNome(nome[2])
*/

//----------------------------------------------------------------
//Variavél global e local
/*
const a = 1 

function imprimeVariavel (){
    const b = 2
    console.log("variavel a", a)
    console.log("variavel b", b)
}

imprimeVariavel()

console.log("variavel a", a)
console.log("variavel b", b)
*/

//-------------------------------------------------------------------
//Return
function calculaArea(altura, largura) {
    const area = altura * largura
    return area
}
const areCalculada = calculaArea(2,3)

console.log(areCalculada)