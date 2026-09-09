const prompt = require("prompt-sync")({sigint:true})

console.log("================")
console.log("KALKULATOR BALOK")
console.log("================")

let p = Number(prompt("Panjang : "))
let l = Number(prompt("Luas    : "))
let t = Number(prompt("Tinggi  : "))

let V = p * l * t
let L = 2 * (p * l + p * t + l * t)
let K = 4 * (p + t + l)

console.log("===================")
console.log("      Hasil")
console.log("===================")

console.log(`
    Volume   : ${V.toFixed(2)}
    Luas     : ${L.toFixed(2)}
    Keliling : ${K.toFixed(2)}`)