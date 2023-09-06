let pokemonInicial = prompt(`Escolha um pokemon: 1) Bulbassauro 2) Charmander 3) Squirtle`)
pokemonInicial = pokemonInicial.toLowerCase()

switch(pokemonInicial){
    case `bulbassauro`:
        console.log(`Pokemon tipo Grama e Veneno`)
        break
    case `charmander`:
        console.log(`Pokemon tipo Fogo`)
        break
    case `squirtle`:
        console.log(`Pokemon tipo Água(escolha certa)`)
        break
    default:
        console.log(`Pokemon não encontrado`)
        break
}

