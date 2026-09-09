const prompt = require("prompt-sync")({ sigint: true });
console.log("--------------------")
console.log("Kalkulator lingkaran")
console.log("--------------------")


const phi = 3.14
let r = Number (prompt ("jari jari : "));
let luas = phi * r * r
let Keliling = 2 * phi * r


console.log("====================")
console.log("        Hasil       ")
console.log("====================")
console.log(`
Luas      : ${luas} cm2
Keliling  : ${Keliling} cm`)