
let quantiaPets = Number(prompt(`Quantos pets você tem?`))
let listaPets = []

if(quantiaPets === 0){
    console.log(`Que pena! Você pode adotar um pet!`)
}
else{
    while(quantiaPets > 0){
        listaPets.push(prompt(`Insira o nome de seus pets, um por cada prompt.`))
        quantiaPets -= 1
    }
    console.log(listaPets)
}