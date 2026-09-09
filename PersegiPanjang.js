const prompt = require("prompt-sync")({ sigint: true });
console.log("--------------------------")
console.log("Kalkulator persegi panjang")
console.log("--------------------------")


let p = Number (prompt ("panjang : "));
let l = Number (prompt ("lebar   : "))
let Luas = p * l 
let keliling = 2 * (p + l)


console.log("==========================")
console.log("           Hasil          ")
console.log("==========================")
console.log(`
Luas      : ${Luas} cm2
Keliling  : ${keliling} cm`)