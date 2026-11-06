"use strict"

const luvut = [];
for(let i = 0; i < 5; i++) {
    luvut[i] = prompt(`Anna luku. (${i+1}/5)`)
}

for(let i = luvut.length-1; i >= 0; i--) {
    console.log(`Luku ${i + 1} = ${luvut[i]}`)
}