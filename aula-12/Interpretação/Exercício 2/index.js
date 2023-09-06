
// Leia o c�digo

let textoDoUsuario = prompt("Insira um texto"); // COMI CENOURA HOJE

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") // comi cenoura hoje . true
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) // true

/**
 * 
 * a) Explique o que essa fun��o faz e qual � sua utilidade.
 * 
 * b) Determine qual ser� a sa�da no console para cada uma das 3 entradas do usu�rio:
 * - Eu gosto de cenoura.
 * - CENOURA � bom pra vista.
 * - Cenouras crescem na terra.
 * 
**/

//a) Essa função pega o texto inserido no prompt, deixa tudo em caixa baixa e procura a palavra "cenoura" nele.
// caso tenha, a função vai retornar true, se não tiver, a função retornará false.

/**
 * b)
 * true
 * true
 * false
**/