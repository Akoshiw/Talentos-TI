const pessoa = {
    nome: "Pedro", 
    apelidos: [ "P.E", "Pedro fumaças", "Pai do verde" ]
}

 const novaPessoa = {
    ...pessoa,
    apelidos: ["Peixeiro", "Batman", "Cacique"]
}

 function impressora(objeto){
    let resultado = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`
    return resultado
} 

console.log(impressora(pessoa))
console.log(impressora(novaPessoa))

