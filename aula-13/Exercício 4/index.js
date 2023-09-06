const pessoa = {
    nome: `Pedro`,
    idade: 17, 
    generoMusical: `reggae`
}

console.log(pessoa)

function copiaObjeto(objeto){
    let novoObjeto = {
        ...objeto,
        comidasFavoritas: [`Barro`, `Pizza`, `Concreto`],
        melhorAmigo: {
            nome: `Larissa`,
            idade: 17,
        }
    }

    return resultado = (`O nome da pessoa é ${novoObjeto.nome}. Suas comidas preferidas são ${novoObjeto.comidasFavoritas[0]}, ${novoObjeto.comidasFavoritas[1]} e ${novoObjeto.comidasFavoritas[2]}. Sua melhor amiga se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos.`)
}

console.log(copiaObjeto(pessoa))
