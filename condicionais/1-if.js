// IF
/**

if (condition) {
    code
}

*/

const numeros = [0, 1, 2, 3, 4, 5]

numeros.forEach( item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par`)
    } else {
        console.log(`O número ${item} é impar`)
    }
})