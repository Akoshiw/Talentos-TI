
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
//pedindo um número para o usuário através de um prompt, e convertendo a string para number

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
//Caso o número fosse 10, ele seria maior que zero então a mensagem seria executada no terminal
//Caso o número fosse -10, ele seria menor que zero então a mensagem não seria executada no terminal

// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//a let mensagem foi criada dentro do escopo do if. Como o if não retorna essa let pra fora do escopo, ela não existe fora dele.
//Assim, toda vez que o código for executado, terá um erro na linha 10, pois, ele está tentando chamar uma variável inexistente.