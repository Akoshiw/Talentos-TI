
const string = prompt(`Insira uma frase.`)
const array = string.trim().split(/\s+/)

console.log(array) 

/*
* / / demarca o inicio e fim da sentença que eu quero ignorar
* \s significa espaço (    )
* o + siginfica que também vai ignorar repetições do caractere desejado
*/