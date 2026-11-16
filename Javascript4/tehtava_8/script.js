"use strict";

document.getElementById("start").addEventListener("click", function() {
    const numero1 = parseInt(document.getElementById("num1").value)
    const numero2 = parseInt(document.getElementById("num2").value)
    const tapa = document.getElementById("operation").value
    const tulos = document.getElementById("result")

    if(isNaN(numero1) || isNaN(numero2)) {
        tulos.textContent = "Virhe: Syötä kelvolliset luvut."
        return
    }

    if(tapa === "add") {
        tulos.textContent = `${numero1} + ${numero2} = ${numero1 + numero2}`
    }
    if(tapa === "sub") {
        tulos.textContent = `${numero1} - ${numero2} = ${numero1 - numero2}`
    }
    if(tapa === "multi") {
        tulos.textContent = `${numero1} * ${numero2} = ${numero1 * numero2}`
    }
    if(tapa === "div") {
        if(numero2 === 0) {
            tulos.textContent = "Virhe: Jako nollalla"
        } else {
            tulos.textContent = `${numero1} / ${numero2} = ${numero1 / numero2}`
        }
    }
})

