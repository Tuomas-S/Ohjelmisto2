"use strict";

const button = document.querySelector("button");

function A() {
alert("Nappia painettu");
button.textContent = "Napauta uudestaan!"
}

button.addEventListener("click", A);