
// Leia o c�digo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) // nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga) // nome: "Jubo", idade: 3, raca: "SRD"

// a) O que vai ser impresso no console?

// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?
// Copia as informações do objeto tipado