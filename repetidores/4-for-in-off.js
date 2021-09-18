
let numeros = [3, 5, 7]

numeros.novo = "Olá!"        // Adicionado uma propriedade // Um array tbm é um Object

for (let i in numeros) {    // IN pega os índices + propriedades
    console.log(i)          // 0, 1, 2, novo  
}

for (let i of numeros) {    // OF só pega valores numerados
    console.log(i)          // 3 , 5, 7
}

