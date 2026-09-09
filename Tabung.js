const prompt = require("prompt-sync")({sigint:true})

console.log("=================")
console.log("KALKULATOR TABUNG")
console.log("=================")

const phi = 3.14
let r = Number(prompt("Jari-jari : "))
let t = Number(prompt("Tinggi    : "))

let V  = phi * r ** 2 * t
let K  = 2 * phi * r
let LP = 2 * phi * r * (r + t)
let LS = 2 * phi * r * t

console.log("===============")
console.log("     Hasil")
console.log("===============")

console.log(`
    Volume         : ${V.toFixed(2)}
    Keliling       : ${K.toFixed(2)}
    Luas Permukaan : ${LP.toFixed(2)}
    Luas Selimut   : ${LS.toFixed(2)}`)