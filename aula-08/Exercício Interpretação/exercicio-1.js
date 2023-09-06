//Exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2 // false
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 // false
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) // true
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean

/* Resposta
* a. false
* b. false
* c. true
* d . boolean
*/
