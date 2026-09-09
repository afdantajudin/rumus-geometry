const prompt = require("prompt-sync")({sigint:true})

console.log("=============================")
console.log("KALKULATOR SETENGAH LINGKARAN")
console.log("=============================")

const phi = 3.14
let js = Number(prompt("Jari-jari : "))

let L = 0.5 * phi * js ** 2
let K = phi * js + 2 * js

console.log("==============")
console.log("     Hasil")
console.log("==============")

console.log(`
    Luas     : ${L.toFixed(2)}
    Keliling : ${K.toFixed(2)}`)