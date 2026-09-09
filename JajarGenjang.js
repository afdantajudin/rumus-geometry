const prompt = require("prompt-sync")({ sigint: true });
console.log("------------------------")
console.log("Kalkulator Jajar Genjang")
console.log("------------------------")


let a = Number (prompt ("Alas     : "));
let t = Number (prompt ("Tinggi   : "))
let s1 = Number (prompt ("Sisi1    : "))


let Luas = a * t
let keliling = 2 * (a + s1)


console.log("========================")
console.log("          Hasil         ")
console.log("========================")
console.log(`
Luas      : ${Luas} cm2
Keliling  : ${keliling} cm`)