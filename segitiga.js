const prompt = require("prompt-sync")({ sigint: true });
console.log("-------------------")
console.log("Kalkulator Segitiga")
console.log("-------------------")


let a = Number (prompt ("Alas     : "));
let t = Number (prompt ("Tinggi   : "))
let s1 = Number (prompt ("Sisi1    : "))
let s2 = Number (prompt ("Sisi2    : "))
let s3 = Number (prompt ("Sisi3    : "))


let Luas = 1 / 2 * a * t
let keliling = s1 + s2 + s3


console.log("====================")
console.log("        Hasil       ")
console.log("====================")
console.log(`
Luas      : ${Luas} cm2
Keliling  : ${keliling} cm`)