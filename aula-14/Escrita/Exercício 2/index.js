const pessoa = {
	nome: "Paulo", 
	idade: 22, 
	profissao: "Pintor"
}

const novaPessoa = {
    nome: "Ricardo",
    idade: 27,
    profissao: "Padeiro"
}

function impressora(objeto) {

	let resultado = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
	return resultado
}

console.log(impressora(pessoa))
console.log(impressora(novaPessoa))
