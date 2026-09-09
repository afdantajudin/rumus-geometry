const prompt = require("prompt-sync")({sigint:true})

console.log("==============================")
console.log("KALKULATOR SEGI ENAM BERATURAN")
console.log("==============================")

let s = Number(prompt("Sisi : "))

let L = 2.6 * s ** 2
let K = 6 * s

console.log("=============")
console.log("    Hasil")
console.log("=============")

console.log(`
    Luas     : ${L.toFixed(2)}
    Keliling : ${K.toFixed(2)}`)