
let listaDeTarefas = []
let tarefa1 = prompt(`Insira a primeira tarefa`)
let tarefa2 = prompt(`Insira a segunda tarefa`)
let tarefa3 = prompt(`Insira a terceira tarefa`)

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

let realizado = prompt(`Digite o índice da tarefa realizada(0, 1 ou 2).`)

listaDeTarefas.splice(realizado, 1)

console.log(listaDeTarefas)
