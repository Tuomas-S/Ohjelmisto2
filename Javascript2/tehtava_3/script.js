"use strict";

let numero1 = parseInt(prompt("Anna kokonaisluku. (1/3)"))
let numero2 = parseInt(prompt("Anna kokonaisluku. (2/3)"))
let numero3 = parseInt(prompt("Anna kokonaisluku. (3/3)"))

let summa = numero1 + numero2 + numero3
let tulo = numero1 * numero2 * numero3
let keskiarvo = (numero1 + numero2 + numero3) / 3

document.getElementById("Numerot").textContent = `Antamasi luvut: ${numero1}, ${numero2} ja ${numero3}.`;
document.getElementById("Summa").textContent = `Lukujen summa on ${summa}.`;
document.getElementById("Tulo").textContent = `Lukujen tulo on ${tulo}.`;
document.getElementById("Keskiarvo").textContent = `Lukujen keskiarvo on ${keskiarvo}.`;