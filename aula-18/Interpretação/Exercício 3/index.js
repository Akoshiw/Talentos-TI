
// Qual seria o resultado impresso no console, se o usuário digitasse o número "4"?

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas")) // 4

while (quantidadeAtual < quantidadeTotal) { // 4 < 4
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) { // 3; 3 < 4; 3 += 1 
		linha += "*"
	}

	console.log(linha) // """*""*""*""*"

	quantidadeAtual++ // 3 += 1
}

/*
 * `*`
 * `**`
 * `***`
 * `****`
*/