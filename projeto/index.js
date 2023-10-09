
// Definições básicas
let continuar = true
let dados = [] // nomeAlbum, generoAlbum, artista, disponibilidade, preco

// Função para cadastro de disco
function cadastrar() {
    let perguntaNome = prompt(`Insira o nome do álbum.`).toUpperCase()
    let perguntaGenero = prompt(`Insira o gênero do álbum.`).toUpperCase()
    let perguntaArtista = prompt(`Insira o nome do artista.`).toUpperCase()
    let perguntaEstoque = Number(prompt(`Quantos discos tem no estoque?`))
    let perguntaPreco = prompt(`Quanto o álbum custa?`)
    
    perguntaPreco = Number(perguntaPreco.replace(",", "."))

    const disco = { 
        nome: perguntaNome,
        genero: perguntaGenero,
        artista: perguntaArtista,
        disponibilidade: perguntaEstoque,
        preco: perguntaPreco,
    }

    dados.push(disco)
	console.log(dados[dados.length - 1])
}

// Função para listar os discos
function listar() {
    
    let lista = `    -------------------------------------------------------------------------------
    LISTAGEM DE DISCOS
    -------------------------------------------------------------------------------
    | ÍNDICE | NOME DISCO | GÊNERO | ARTISTA | DISPONIBILIDADE | PREÇO |
    -------------------------------------------------------------------------------\n`
    for (let objeto of dados) {
        let listaObjeto = `    | ${dados.indexOf(objeto)} | ${objeto.nome} | ${objeto.genero} | ${objeto.artista} | ${objeto.disponibilidade} | ${objeto.preco} |\n`
	    lista += listaObjeto
    }

    lista += `    -------------------------------------------------------------------------------`
    
    console.log(lista)
}

// Função para buscar um disco específico
function buscar() {
    let busca = prompt(`Insira o que você procura`)
    let lista = `    -------------------------------------------------------------------------------
        LISTAGEM DE DISCOS
    -------------------------------------------------------------------------------
    | ÍNDICE | NOME DISCO | GÊNERO | ARTISTA | DISPONIBILIDADE | PREÇO |
    -------------------------------------------------------------------------------\n`
    for (let objeto of dados) {
        let listaObjeto = `    | ${dados.indexOf(objeto)} | ${objeto.nome} | ${objeto.genero} | ${objeto.artista} | ${objeto.disponibilidade} | ${objeto.preco} |\n`
	    for(let propriedade in objeto){
            if(limparCaracteres(objeto[propriedade]) === limparCaracteres(busca)){
                lista += listaObjeto
                break
            }
        }
    }

    lista += `    -------------------------------------------------------------------------------`
    
    console.log(lista)
}

// Função para retirar um disco do estoque
function retirar() {
    listar()
    let index = Number(prompt(`Insira o índice do disco que você quer retirar`))
    if(index < 0 || index >= dados.length){
        console.log(`Index inválido`)
    }
    else{
        dados.splice(index, 1)
    }
    
}

// Função para editar os dados de um disco
function editar(){
    listar()
    let continuarEditando = true
    let index = Number(prompt(`Insira o índice do disco que você quer editar`))
    while(continuarEditando === true){
        let chave = prompt(`Insira o dado que você quer editar do disco`)
        if(limparCaracteres(chave) === "NOME" || limparCaracteres(chave) === "NOME DISCO"){
            novoValor = prompt(`Insira o novo nome`).toUpperCase()
            dados[index].nome = novoValor
        }
        else if(limparCaracteres(chave) === "GENERO"){
            novoValor = prompt(`Insira o novo gênero`).toUpperCase()
            dados[index].genero = novoValor
        }
        else if(limparCaracteres(chave) === "ARTISTA"){
            novoValor = prompt(`Insira o novo artista`).toUpperCase()
            dados[index].artista = novoValor
        }
        else if(limparCaracteres(chave) === "DISPONIBILIDADE"){
            novoValor = Number(prompt(`Insira a nova disponibilidade`))

            if(novoValor <= 0){
                novoValor = `FORA DE ESTOQUE`
            }
            dados[index].disponibilidade = novoValor
        }
        else if(limparCaracteres(chave) === "PRECO"){
            novoValor = prompt(`Insira o novo preço`)

            if(Number(novoValor) <= 0){
                novoValor = `GRÁTIS`
            }
            dados[index].preco = Number(novoValor.replace(",", "."))
        }
        else{
            console.log(`Dado não identificado. Dados diponíveis: Nome, Gênero, Artista, Disponibilidade e Preço.`)
        }

        let continuar = prompt(`Deseja continuar editando?`)
        if(limparCaracteres(continuar) === "N" || limparCaracteres(continuar) === "NAO"){
            continuarEditando = false
        }
    }

    console.log(`    -------------------------------------------------------------------------------
    DISCO EDITADO
    -------------------------------------------------------------------------------
    | ÍNDICE | NOME DISCO | GÊNERO | ARTISTA | DISPONIBILIDADE | PREÇO |
    -------------------------------------------------------------------------------
    | ${index} | ${dados[index].nome} | ${dados[index].genero} | ${dados[index].artista} | ${dados[index].disponibilidade} | ${dados[index].preco} |
    -------------------------------------------------------------------------------`)
}

// Função para limpar caracteres especiais. Utilizada na função de busca
function limparCaracteres(palavra){
    let novaPalavra = palavra.replace(/[ã, á, à, â]/g, "a")
    novaPalavra = novaPalavra.replace(/[é, è, ê]/g, "e")
    novaPalavra = novaPalavra.replace(/[í, ì, î]/g, "i")
    novaPalavra = novaPalavra.replace(/[õ, ó, ò, ô]/g, "o")
    novaPalavra = novaPalavra.replace(/[ú, ù, û]/g, "u")
    novaPalavra = novaPalavra.replace(/[ç]/g, "c")
    novaPalavra = novaPalavra.toUpperCase()
    return novaPalavra
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "VITROLEI DISCOS\n"
	pergunta += "-------------------------\n"
	pergunta += "Escolha uma opção:\n"
	pergunta += "1. Cadastrar disco\n"
	pergunta += "2. Listar discos\n"
	pergunta += "3. Procurar discos\n"
	pergunta += "4. Retirar disco\n"
        pergunta += "5. Editar disco\n"
        pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			retirar()
			break
		case 5:
			editar()
			break
		case 0:
			sair()
			break
	}
}   
