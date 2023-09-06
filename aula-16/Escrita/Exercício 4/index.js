
let genero = prompt(`Insira o gênero do filme.`).toLowerCase()
let preco = Number(prompt(`Insira o preço do filme.`))

if(genero === `fantasia` && preco <= 15){
    console.log(`Bom filme!`)
}
else{
    console.log(`Escolha outro filme :(`)
}
