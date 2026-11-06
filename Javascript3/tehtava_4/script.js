"use strict"

const luvut = []

do {
    luvut.push(parseFloat(prompt("Anna luku. \nKirjoita 0 lopettaaksesi.")))
    if(isNaN(luvut[luvut.length - 1])) {
        luvut.pop()
    }
} while (!luvut.includes(0))

luvut.pop()
luvut.sort((a, b) => b - a)

for(let i = 0; i < luvut.length; i++) {
    console.log(luvut[i])
}