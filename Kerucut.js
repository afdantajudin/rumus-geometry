const prompt = require("prompt-sync")({sigint:true})

console.log("==================")
console.log("KALKULATOR KERUCUT")
console.log("==================")

const phi = 3.14
let r = Number(prompt("Jari-jari     : "))
let t = Number(prompt("Tinggi        : "))
let s = Number(prompt("Garis Pelukis : "))

let V = 1/3 * r ** 2 * t
let S = Math.sqrt(r ** 2 + t ** 2)
let LS = phi * r * s
let LP = phi * r * (s + r)

console.log("===============")
console.log("     Hasil")
console.log("===============")

console.log(`
    Volume         : ${V.toFixed(2)}
    Garis Pelukis  : ${S.toFixed(2)}
    Luas Selimut   : ${LS.toFixed(2)}
    Luas Permukaan : ${LP.toFixed(2)}`)