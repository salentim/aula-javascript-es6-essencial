const valorTotal = 12.4032
console.log(valorTotal)

// Transformar número para String
console.log(valorTotal.toString())

// Definir quantidae das casas decimais
console.log(valorTotal.toFixed(2))

// Analisa um argumento string e retorna uapenas o número // mantem casas decimais
console.log(parseFloat("3.14"))
console.log(parseFloat("314e-2")) 
console.log(parseFloat("0.0314E+2"))
console.log(parseFloat("3.14more non-digit characters"))

// Transformar uma string em int // ignor casa decimais
console.log(parseInt("50.99"))
