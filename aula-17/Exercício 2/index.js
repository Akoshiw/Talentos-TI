let numeros = [11, 15, 18, 14, 12, 13]

function maiorNumero(numeros){
    let maior = numeros[0]
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
          maior = numeros[i]
        }
      }
    return maior
}

console.log(maiorNumero(numeros))


