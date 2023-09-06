function bioEdu(){
    let biografia = `Eu sou Eduardo, tenho 19 anos, moro em São Leopoldo e sou estudante.`
    return biografia
}

function bioUsuario(nome, idade, cidade, profissao){
    let resultado = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return resultado
}

const nomeUsuario = prompt(`Insira seu nome`)
const idadeUsuario = Number(prompt(`Insira sua idade`))
const cidadeUsuario = prompt(`Insira a cidade onde você mora`)
const profissaoUsuario = prompt(`Insira sua profissão`)

console.log(bioEdu())
console.log(bioUsuario(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario))


