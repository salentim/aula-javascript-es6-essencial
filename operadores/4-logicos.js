
// E &&

const exemplo1 = true && true       // retorna true
console.log(exemplo1)

const exemplo2 = true && false      // retorna false
const exemplo3 = false && false     // retorna false
const exemplo4 = false && true      // retorna false
console.log(exemplo2, exemplo3, exemplo4)

const exemplo5 = "Gato" && "Cão"    // retorna Cão
const exemplo6 = true && "Cão"      // retorna Cão
const exemplo7 = "Gato" && true     // retorna True
console.log(exemplo5, exemplo6, exemplo7)

const exemplo8 = false && "Cão"     // retorna false
const exemplo9 = "Gato" && false    // retorna false
console.log(exemplo8, exemplo9)

// OU ||

const exemplo10 = true || true          // retorna true
const exemplo11 = true || false         // retorna true
const exemplo12 = false || true         // retorna true
const exemplo13 = false || (3 === 4)    // retorna false
const exemplo14 = false || "Gato"       // retorna Gato
const exemplo15 = "Gato" || false       // retorna Gato
const exemplo16 = "Gato" || "Cão"       // retorna Gato
console.log(exemplo10, exemplo11, exemplo12, exemplo13, exemplo14, exemplo15, exemplo16)

// NEGAÇÃO !

const exemplo17 = !true     // retorna false
const exemplo18 = !false    // retorna true
const exemplo19 = !"Gato"   // retorna false
console.log(exemplo17, exemplo18, exemplo19)