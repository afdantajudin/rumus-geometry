const prompt = require("prompt-sync")({sigint:true})

console.log("=============================")
console.log("KALKULATOR SEGITIGA SIKU SIKU")
console.log("=============================")

let Sa = Number(prompt("Sisi Siku A : "))
let Sb = Number(prompt("Sisi Siku B : "))

let SM = Math.sqrt(Sa ** 2 + Sb ** 2)
let LS = 0.5 * Sa * Sb
let KS = Sa + Sb + SM

console.log("=============")
console.log("    Hasil")
console.log("=============")

console.log(`
    Sisi Miring : ${SM.toFixed(2)}
    Luas        : ${LS.toFixed(2)}
    Keliling    : ${KS.toFixed(2)}`)