const prompt = require("prompt-sync")({ sigint: true });
console.log("------------------------------")
console.log("Kalkulator Luas Permukaan Bola")
console.log("------------------------------")


const phi = 3.14
let r = Number (prompt ("jari jari : "));
let luas = 4 * phi * r * r;
let volume = (4 / 3) * phi * r * r * r;


console.log("=================================================")
console.log("                      Hasil                      ")
console.log("=================================================")
console.log(`
    Luas    : ${luas} cm2
    Volume  : ${volume} cm3`)