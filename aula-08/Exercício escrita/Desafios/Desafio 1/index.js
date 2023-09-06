
//A
let grausFahrenheit = 77
let grausKelvin = (grausFahrenheit - 32) * (5 / 9) + 273.15
 
console.log(`A: ${grausKelvin}`)

//B
let grausCelcius = 80
grausFahrenheit = (grausCelcius) * (9 / 5) + 32

console.log(`B: ${grausFahrenheit}`)

//C
grausCelcius = 30
grausFahrenheit = (grausCelcius) * (9 / 5) + 32
grausKelvin = (grausFahrenheit - 32) * (5 / 9) + 273.15

console.log(`C: ${grausFahrenheit}°F, ${grausKelvin}K`)

//D
grausCelcius = Number(prompt("Insira os graus Celcius desejados."))
grausFahrenheit = (grausCelcius) * (9 / 5) + 32
grausKelvin = (grausFahrenheit - 32) * (5 / 9) + 273.15

console.log(`D: ${grausFahrenheit}°F, ${grausKelvin}K`)
