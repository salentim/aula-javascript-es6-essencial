// break
console.log("Exemplo utilizando o Break")

let parar = 0

while (true) {
    parar++;

    if (parar > 5) {
        break;
    }

    console.log(parar)
}

// continuar

console.log("Exemplo da utilização do continue") ;
const numeros = [ 1, 2, 3, 4, 5, 6 ] ;

for (let index = 0 ; index <  numeros.length ; index++) {
    const elemento = numeros[index] ;

    if (elemento % 2 === 0) {
        continue ;
    }
    console.log(elemento) ;
}