const prompt = require("prompt-sync")({ sigint: true });
console.log("------------------")
console.log("Kalkulator persegi")
console.log("------------------")


let s = Number (prompt ("sisi : "));
let luas = s * s
let keliling = 4 * s


console.log("==================")
console.log("       Hasil      ")
console.log("==================")
console.log(`
Luas      : ${luas} cm2
Keliling  : ${keliling} cm`)