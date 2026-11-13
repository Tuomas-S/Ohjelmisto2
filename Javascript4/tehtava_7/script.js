"use strict";

const kuva = document.getElementById("target")
const nappi = document.getElementById("trigger")

function vaihto() {
    kuva.setAttribute("src", "img/picB.jpg")
}
function takaisin() {
    kuva.setAttribute("src", "img/picA.jpg")
}

nappi.addEventListener("mouseover", vaihto)
nappi.addEventListener("mouseout", takaisin)