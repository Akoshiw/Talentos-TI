
function aptidaoFacul(ensinoMedio, idade, cursandoFacul){
     if (ensinoMedio === true && idade >= 18 && cursandoFacul === false) {
        console.log(`Apto`)
    }
    else { console.log(`Não apto`)
    }
        
}

function converterResposta(resposta) {
    let respostaFormatada = resposta.toLowerCase()

    if (respostaFormatada === "sim" || respostaFormatada === "s"){
        return true
    } else {
        return false
    }
}



let ensinoMedio = prompt(`Responda, com sim ou não, se você concluiu o ensino médio.`)
let idade = (prompt(`Quantos anos você tem?`))
let cursandoFacul = prompt(`Responda, com sim ou não, se você está cursando outra faculdade.`)

ensinoMedio = converterResposta(ensinoMedio)
idade = Number(idade)
cursandoFacul = converterResposta(cursandoFacul)

aptidaoFacul(ensinoMedio, idade, cursandoFacul)