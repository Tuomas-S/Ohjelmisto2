"use strict"

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function even(taulukko) {
    const changed = [] 
    for(let i = 0; i < taulukko.length; i ++) {
        if(taulukko[i] % 2 == 0) {
            changed.push(taulukko[i])
        }
    }
    return(changed)
}

console.log(`Alkuperäinen taulukko: ${original}`)
console.log(`Parillinen taulukko: ${even(original)}`)