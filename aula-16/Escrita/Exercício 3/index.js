
let turno = prompt(`Insira o turno que você estuda, seguindo esse padrão: "M" (matutino), "V" (Vespertino) ou "N" (Noturno)`).toUpperCase()

switch (turno) {
    case `M`:
        console.log(`Bom dia!`)
        break;
    case "V":
        console.log(`Boa tarde!`)
        break;
    case "N":
        console.log(`Boa noite!`)    
    default:
        console.log(`Digite novamente seguindo o padrão indicado.`)
        break;
}
