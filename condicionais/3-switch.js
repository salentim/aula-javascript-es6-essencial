/**
 *
 * switch (expessão) {
 *  case valor1:
 *   [break]
 *  case valor2:
 *   [break]
 *  default:
 *   [break]
 *  }
 */

const fruta = "abacate"

switch (fruta) {
    case "banana":
        console.log("R$ 3,00 / KG")
        break
    case "limão":
        console.log("R$ 1,99 / KG")
        break
    case "abacate":
    case "manga":
    case "melancia":
        console.log("R$ 4,58 / KG")
        break
    default:
        console.log("Nenhuma fruta encontrada!")
        break
}