const prompt = require("prompt-sync")({sigint:true})

console.log("========================")
console.log("KALKULATOR BELAH KETUPAT")
console.log("========================")

let d1 = Number(prompt("Diagonal 1   : "))
let d2 = Number(prompt("Diagonal 2   : "))
let s = Number(prompt("Panjang sisi : "))

let L = 0.5 * d1 * d2 
let K = 4 * s

console.log("======================")
console.log("        HASIL")
console.log("======================")

console.log(`
    Luas     = ${L.toFixed(2)}
    Keliling = ${K.toFixed(2)}`)