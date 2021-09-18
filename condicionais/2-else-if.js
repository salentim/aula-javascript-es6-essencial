/*

if (condicional) {
    código
} else if (condicional) {
    código
}

*/

const numeros = [2, 3, 4, 5, 6, 8, 10, 15]
console.log("\n\nUsando ELSE IF")
numeros.forEach(item =>{
    if (item % 2 === 0){
        console.log(`O número ${item} é divisível por 2`)
    } else if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`)
    } else if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5`)
    }
})

const numeros2 = [2, 3, 4, 5, 6, 8, 10, 15]
console.log("\n\nusando apenas IF:")
numeros2.forEach(item2 => {
    if (item2 % 2 === 0) {
        console.log(`O número ${item2} é divisível por 2`)
    }
    if (item2 % 3 === 0){
        console.log(`O número ${item2} é divisível por 3`)
    }
    if (item2 % 5 ===0){
        console.log(`O número ${item2} é divisível por 5`)
    }
})
