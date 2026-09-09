const prompt = require("prompt-sync")({sigint:true})

console.log("================")
console.log("KALKULATOR LIMAS")
console.log("================")

let a = Number(prompt("Alas   : "))
let t = Number(prompt("Tinggi : "))
let s = Number(prompt("sisi   : "))

let V = 1/3 * a * t
let L = a + s 

console.log("================")
console.log("      Hasil")
console.log("================")

console.log(`
    Volume : ${V.toFixed(2)}
    Luas   : ${L.toFixed(2)}`)