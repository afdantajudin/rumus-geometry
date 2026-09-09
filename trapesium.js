const prompt = require("prompt-sync")({ sigint: true });
console.log("--------------------")
console.log("Kalkulator trapesium")
console.log("--------------------")


let a = Number(prompt("atas    : "))
let b = Number(prompt("bawah   : "))
let t = Number(prompt("tinggi  : "))
let s3 = Number(prompt("sisi 1 : "))
let s4 = Number(prompt("sisi 2 : "))

let L = 0.5 * (a + b) * t
let K = a + b + s3 + s4


console.log("==================")
console.log("       Hasil      ")
console.log("==================")
console.log(`
Luas      : ${L.toFixed(2)} cm2
Keliling  : ${K.toFixed(2)} cm`)