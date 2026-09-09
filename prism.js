const prompt = require("prompt-sync")({sigint:true})

console.log("================")
console.log("KALKULATOR PRISM")
console.log("================")

let l = Number(prompt("Luas     : "))
let t = Number(prompt("Tinggi   : "))
let k = Number(prompt("Keliling : "))

let V = l * t
let L = (2 * l) + (k * t)

console.log("=================")
console.log("      Hasil")
console.log("=================")

console.log(`
    Volume : ${V.toFixed(2)}
    Luas   : ${L.toFixed(2)}`)