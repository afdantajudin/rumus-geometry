const prompt = require("prompt-sync")({sigint:true})

console.log("==============================")
console.log("KALKULATOR SEgI LIMA BERATURAN")
console.log("==============================")

let s = Number(prompt("SISI : "))

let L = 1.72 * s ** 2
let K = 5 * s

console.log("=============")
console.log("    Hasil")
console.log("=============")

console.log(`
    Luas     : ${L.toFixed(2)}
    Keliling : ${K.toFixed(2)}`)