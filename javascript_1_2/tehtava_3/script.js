"use strict";

let numero1 = parseInt(prompt("Anna 1. kokonaisluku."))
let numero2 = parseInt(prompt("Anna 2. kokonaisluku."))
let numero3 = parseInt(prompt("Anna 3. kokonaisluku."))

let summa = numero1 + numero2 + numero3
let tulo = numero1 * numero2 * numero3
let keskiarvo = (numero1 + numero2 + numero3) / 3

document.getElementById("Numerot").textContent = `Antamasi luvut: ${numero1}, ${numero2} ja ${numero3} `
document.getElementById("Summa").textContent = `Lukujen summa on ${summa}.`;
document.getElementById("Tulo").textContent = `Lukujen tulo on ${tulo}.`;
document.getElementById("Keskiarvo").textContent = `Lukujen keskiarvo on ${keskiarvo}.`;