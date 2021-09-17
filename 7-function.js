// Modelo Antigo
function pular () {
    return "Código Aqui"
}

// Modelo Novo - ES6 // ARROW FUNCTION
// Obs Qndo não houver expressão não precisa declarar return
const voar = () => "Código Aqui 1"
console.log(voar())

// Qndo houver expressão deve declarar o return
const nadar = () => {
    return "Código Aqui 2"
}

// Funções tbm são Objects
pular.prop = "Posso criar propriedades"
console.log(pular())
console.log(pular.prop)

 








