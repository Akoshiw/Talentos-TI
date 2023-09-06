
let comidasFavoritas = ["Pizza", "Xis", "Lasanha", "Macarrão", "Strogonoff"]

console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas favoritas: ${comidasFavoritas}`)

const comidaUsuario = prompt(`Qual é a sua comida favorita?`)

comidasFavoritas[1] = comidaUsuario

console.log(comidasFavoritas)
