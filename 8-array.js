const menu = [
    "Home",
    "Produtos",
    "Serviços",
    "Contato"
]

const genero = {
    homem: "Masculino",
    mulher: "Feminino",
    indefinido: "Outros"
}

const pessoas = [
    {
        nome: "Camila",
        idade: 26,
        genero: genero.mulher
    },
    {
        nome: "Rodrigo",
        idade: 33,
        genero: genero.homem
    },
    {
        nome: "Ana",
        idade: 27,
        genero: genero.mulher
    }
]

// Qtd de itens
console.log("\n\nItens no Array:")
console.log(`${menu.length} no total`)

// Verificar se é Array
console.log("\n\nVerificar se é um Array:")
console.log(Array.isArray(menu))

// Iterar os itens do Array
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}`)
})

// Filtrar array
const mulheres = pessoas.filter( pessoa => pessoa.genero === genero.mulher)
console.log("\n\nFiltrar apenas mulheres:")
console.log(mulheres)

// método REDUCE executa função para cada elementro do Array
// resultando em um único valor de retorno
const totalIdade = pessoas.reduce((idade, pessoa) => {
    idade += pessoa.idade
    return idade
}, 0)

console.log(totalIdade)