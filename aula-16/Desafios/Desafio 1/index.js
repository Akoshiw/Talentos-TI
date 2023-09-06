
let genero = prompt(`Insira o gênero do filme.`).toLowerCase()
let preco = Number(prompt(`Insira o preço do filme.`))

if(genero === `fantasia` && preco <= 15){
    const lanche = prompt(`Qual lanche você vai comprar?`)
    console.log(`Bom filme!`)
    console.log(`Aproveite o(a) seu(a) ${lanche}`)
}
else{
    console.log(`Escolha outro filme :(`)
}
