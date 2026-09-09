const prompt = require("prompt-sync")({sigint:true})

console.log("========================")
console.log("KALKULATOR LAYANG LAYANG")
console.log("========================")

let d1 = Number(prompt("Diagonal 1 : "))
let d2 = Number(prompt("Diagonal 2 : "))
let a  = Number(prompt("Sisi a     : "))
let b  = Number(prompt("Sisi b     : "))

let L  = 0.5 * d1 * d2
let K  = 2 * (a + b)

console.log("====================")
console.log("       Hasil")
console.log("====================")

console.log(`
    Luas     = ${L.toFixed(2)}
    Keliling = ${K.toFixed(2)}`)



