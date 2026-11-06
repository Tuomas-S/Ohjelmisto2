"use strict"

let määrä = parseInt(prompt("Anna osallistujen lukumäärä."))

const osallistujat = []
for(let i = 0; i < määrä; i++) {
    osallistujat.push(prompt(`Anna osallistujan nimi. (${i + 1}/${määrä})`))
}

osallistujat.sort()
const lista = document.getElementById("Osallistujalista")

for(let i = 0; i < osallistujat.length; i++) {
    const osallistuja = document.createElement("li")
    osallistuja.textContent = osallistujat[i]
    lista.appendChild(osallistuja)
}