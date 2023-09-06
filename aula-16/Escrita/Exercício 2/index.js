
let turno = prompt(`Insira o turno que você estuda, seguindo esse padrão: "M" (matutino), "V" (Vespertino) ou "N" (Noturno)`).toUpperCase()

if(turno === `M`){
    console.log(`Bom dia!`)
}
else if(turno === `V`){
    console.log(`Boa tarde!`)
}
else if(turno === "N"){
    console.log(`Boa noite!`)
}
else{
    console.log(`Digite novamente seguindo o padrão indicado.`)
}
