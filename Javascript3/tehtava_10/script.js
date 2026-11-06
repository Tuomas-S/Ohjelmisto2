"use strict"

let ehdokasmäärä = parseInt(prompt("Anna ehdokkaiden lukumäärä."))
const ehdokkaat = []
for(let i = 1; i <= ehdokasmäärä; i++) {
    ehdokkaat.push({
        nimi: prompt(`Anna ${i}. ehdokkaan nimi.`).toLowerCase(),
        äänet: 0
    })
}

let ääni;
let äänestäjämäärä = parseInt(prompt("Anna äänestäjien lukumäärä."))
for(let i = 1; i <= äänestäjämäärä; i++)  {
    ääni = prompt(`Äänestäjä ${i}, kirjoita äänestämäsi henkilön nimi.`).toLowerCase()
    for(let ehdokas of ehdokkaat) {
        if(ääni === ehdokas.nimi) {
            ehdokas.äänet++
            break
        }
    }
}

ehdokkaat.sort((a, b) => b.äänet - a.äänet)
console.log(`Voittaja on ${ehdokkaat[0].nimi} ${ehdokkaat[0].äänet} äänellä. \n\nTulokset:`)
for(let ehdokas of ehdokkaat) {
    console.log(`${ehdokas.nimi}: ${ehdokas.äänet} ääntä`)
}