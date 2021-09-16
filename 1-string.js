const frase = "Brasil é o melhor time do mundo!"
console.log(frase)

// Retonar tamanho de uma string
console.log(`Total Letras: ${frase.length}`)

// Substituir um valor por outro
console.log(frase.replace("time","seleção").replace("o","a"))

// Cortar parte de um valor // inserir a quantidade de letras que irá cortar
console.log(frase.slice(3))

// Retonar N caracteres a partir a partir de uma posição
console.log(frase.substr(0,18))