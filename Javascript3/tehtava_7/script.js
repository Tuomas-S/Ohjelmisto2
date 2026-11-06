"use strict"

let mones = 1
let heitto;
let tahko = parseInt(prompt("Anna nopan tahkojen määrä."))
const heitot = document.getElementById("Heitot")

while(isNaN(tahko)) {
    tahko = parseInt(prompt("Anna nopan tahkojen määrä. \nLuvun tulee olla kokonaisluku."))
}

function heitä(sivut) {
    return Math.floor(Math.random() * sivut) + 1
}

document.querySelector("#Tahkot").innerHTML = `Nopan tahkojen määrä: ${tahko}`

do {
    heitto = heitä(tahko)
    const luku = document.createElement("li")
    luku.textContent = (`Heiton ${mones} silmäluku: ${heitto}`)
    heitot.appendChild(luku)
    mones ++
} while (heitto != tahko)