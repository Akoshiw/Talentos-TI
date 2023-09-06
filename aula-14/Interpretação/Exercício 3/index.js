
// Leia o c�digo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined

// a) O que vai ser impresso no console?

// b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu?
// não existe uma chave "altura" no objeto pessoa, então o programa retornou undefined