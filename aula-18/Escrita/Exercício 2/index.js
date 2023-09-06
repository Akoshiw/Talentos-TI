const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]


function imprimirLista (itens) {
    console.log(itens)
}

function imprimirValoresDivididos (itens) {
    arrayNovo = [...itens]
    for (let numero of arrayNovo) {
        i = itens.indexOf(numero)
        numero /= 10
        arrayNovo[i] = numero
    }
    console.log(arrayNovo)
}

function filtrarNumerosPares (itens) {
    arrayNovo = [...itens]
    for (let numero of arrayNovo) {
        let i = arrayNovo.indexOf(numero)
        if(numero % 2 !== 0){
            arrayNovo.splice(i, 1)
        }
    }
    console.log(arrayNovo)    
}
function identificarElementos (itens) {
    arrayNovo = [...itens]
    for (let numero of arrayNovo) {
        let i = arrayNovo.indexOf(numero)
        arrayNovo[i] = `O elemento do índice ${i} é: ${numero}`
    }
    console.log(arrayNovo)
}

function imprimirMaiorMenor (itens) {
    arrayNovo = [...itens]
    let maior = arrayNovo[0]
    let menor = arrayNovo[0]
    
    for (let i = 1; i < arrayNovo.length; i++) {
        if (arrayNovo[i] > maior) {
          maior = arrayNovo[i]
        }
        else if (arrayNovo[i] < menor) {
            menor = arrayNovo[i]
        }
      }
    console.log(`Maior: ${maior}. Menor: ${menor}`)
}

imprimirLista(arrayOriginal)
imprimirValoresDivididos(arrayOriginal)
filtrarNumerosPares(arrayOriginal) 
identificarElementos(arrayOriginal)
imprimirMaiorMenor(arrayOriginal)
