
let filme = {
    nome: `Blade Runner 2049`,
    diretor: `Denis Villeneuve`,
    anoLancamento: 2017,
    elenco: [`Ryan Gosling`,`Harrison Ford`,`Ana de Armas`,`Sylvia Hoeks`,`Mackenzie Davis`,`Jared Leto`],
    assistido: true
}

console.log(filme.nome)
console.log(filme.diretor)
console.log(filme.anoLancamento)
console.log(filme[`elenco`])
console.log(filme[`assistido`])

console.log("----------------------------------")

filme.personagens = [`KD6-3.7`, `Rick Deckard`, `JOI`, `Luv`, `Mariette`, `Niander Wallace`]

console.log(`${filme.elenco[0]} - ${filme.personagens[0]}`)
console.log(`${filme.elenco[1]} - ${filme.personagens[1]}`)
console.log(`${filme.elenco[2]} - ${filme.personagens[2]}`)
console.log(`${filme.elenco[3]} - ${filme.personagens[3]}`)
console.log(`${filme.elenco[4]} - ${filme.personagens[4]}`)
console.log(`${filme.elenco[5]} - ${filme.personagens[5]}`)

console.log("----------------------------------")

filme.elenco[0] = `Xuxa Menegel`

console.log(`${filme.elenco[0]} - ${filme.personagens[0]}`)
console.log(`${filme.elenco[1]} - ${filme.personagens[1]}`)
console.log(`${filme.elenco[2]} - ${filme.personagens[2]}`)
console.log(`${filme.elenco[3]} - ${filme.personagens[3]}`)
console.log(`${filme.elenco[4]} - ${filme.personagens[4]}`)
console.log(`${filme.elenco[5]} - ${filme.personagens[5]}`)