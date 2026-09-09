const prompt = require("prompt-sync")({sigint:true})

console.log("===========================")
console.log("KALKULATOR JURING LINGKARAN")
console.log("===========================")

const phi = 3.14
let jj = Number(prompt("Jari-jari : "))
let sj = Number(prompt("Sudut     : "))

let LJ  = (sj / 360) * phi * jj ** 2
let PBJ = (sj / 360) * 2 * phi * jj

console.log("===============")
console.log("     Hasil")
console.log("===============")

console.log(`
    Luas          : ${LJ.toFixed(2)}
    Panjang Busur : ${PBJ.toFixed(2)}`)