/**
 * 
 *  for (
 *      [expressaoInicial]
 *      [condicao]
 *      [incremento] )
 *      declaracao
 */

const marvel = ["Hulk", "Thor", "Loki"]

for ( 
    let cod = 0 ;
    cod < marvel.length ;
    cod++
) 

{
    const element = marvel[cod]
    console.log(`Elemento #${cod}: ${element}`)   
}
 