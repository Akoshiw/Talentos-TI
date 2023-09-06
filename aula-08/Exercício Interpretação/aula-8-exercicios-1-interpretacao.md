
# Instru��es

Os exerc�cios de hoje s�o divididos em interpreta��o e escrita de c�digo. Para os de interpreta��o, coloque as respostas em coment�rios. J�, nos de escrita, lembre-se de imprimir no console os resultados.

> **ATEN��O**
> 
> N�o � permitido utilizar estruturas e sintaxes de c�digo ainda n�o ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar s� o que foi passado a voc�s.

---

### Exerc�cios de interpreta��o de c�digo

Tente responder os exerc�cios dessa se��o sem executar o c�digo. 
Se ficar muito dif�cil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

---

#### 1. Leia o c�digo abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

```
const bool1 = true
const bool2 = false
const bool3 = !bool2 // = true

let resultado = bool1 && bool2 = false
console.log("a. ", resultado) = a. false

resultado = bool1 && bool2 && bool3 = false
console.log("b. ", resultado) = b. false

resultado = !resultado && (bool1 || bool2) // true && true
console.log("c. ", resultado) = c. true

console.log("d. ", typeof resultado) d. boolean
```

---

#### 2. Seu colega se aproxima de voc� falando que o c�digo dele n�o funciona como devia.

Vamos ajud�-lo: consegue perceber algum problema? O que ser� impresso no console?

```
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
```

---

#### 3. Ainda sobre o exerc�cio anterior.

Sugira ao seu colega uma solu��o para que o valor impresso no console seja, de fato, a soma dos dois n�meros.

---

### Mais conte�dos

[JavaScript - Express�es e Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)  
[L�gica Booleana](https://www.youtube.com/watch?v=gI-qXk7XojA)
