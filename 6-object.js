let paciente = {
    nome: "João da Silva",
    genero: "Masculino",
    idade: 23
}
// Exibir Object
console.log("\n\nExibir Object:")
console.log(paciente)

// Incluir outra propriedade ao Object
console.log("\n\nIncluir outra propriedade ao Object:")
paciente.cpf = "123.456.789-00"
console.log(paciente)

// Concatenar valores das propriedades do Object
console.log("\n\nConcaternar valores das propriedades do Object:")
console.log(`${paciente.nome}, ${paciente.idade} anos, ${paciente.genero}, cpf: ${paciente.cpf}`)

// Alterar o valor de uma propriedade do Object
console.log("\n\nAlterar o valor de uma propriedade do Object:")
paciente.nome = "Marcos Antônio de Paula"
console.log(paciente)

// Deletar uma propriedade do Object
console.log("\n\nDeletar uma propriedade do Object:")
delete paciente.idade
console.log(paciente)

// Exibir apenas as propriedades do Object
console.log("\n\nExibir apenas as propriedades do Object:")
console.log(Object.keys(paciente))

// Exibir apenas os valores do Object
console.log("\n\nExibir apenas os valores do Object:")
console.log(Object.values(paciente))

// Retornar um Array de Arrays
console.log("\n\nRetornar um Array de Arrays:") 
console.log(Object.entries(paciente))

// Clonar um Object com ASSING
console.log("\n\nClonar um Object:")
let pessoa = Object.assign({}, paciente)
console.log(pessoa)

// Mesclar Objects com ASSING
console.log("\n\nMesclar Objects:")
let pet = {
    especie: "Dog",
    apelido: "Lilica",
}
let pessoaEpet = Object.assign(pessoa, pet)
console.log(pessoaEpet)

// Bloquear Alterações em um Object // FREEZE
console.log("\n\nBloquear Alterações no Object:")
Object.freeze(paciente)
paciente.signo = "Libra"
console.log(paciente)