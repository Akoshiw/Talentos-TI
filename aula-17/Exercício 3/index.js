const listaPalavras = [`Oi`, `sumido,`, `tudo`, `bem?`, `Saudades!`]

function fraseador(palavras){
    let frase = ""
    for (let palavra of palavras){
        frase = frase + `${palavra} `
    }
    return frase
}
console.log(fraseador(listaPalavras))
