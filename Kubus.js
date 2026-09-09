const prompt = require("prompt-sync")({sigint:true})

console.log("================")
console.log("KALKULATOR KUBUS")
console.log("================")

let s = Number(prompt("Sisi : "))

let V = s^3
let L = 6 * s^2
let K = 12 * s

console.log("===================")
console.log("       Hasil")
console.log("===================")

console.log(`
    Volume   = ${V.toFixed(2)}
    Luas     = ${L.toFixed(2)}
    Keliling = ${K.toFixed(2)}`)
