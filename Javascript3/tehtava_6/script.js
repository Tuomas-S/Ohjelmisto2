"use strict"

let mones = 1
let heitto;
const heitot = document.getElementById("Heitot")

function heitä() {
    return Math.floor(Math.random() * 6) + 1
}

do {
    heitto = heitä()
    const luku = document.createElement("li")
    luku.textContent = (`Heiton ${mones} silmäluku: ${heitto}`)
    heitot.appendChild(luku)
    mones ++
} while (heitto != 6)