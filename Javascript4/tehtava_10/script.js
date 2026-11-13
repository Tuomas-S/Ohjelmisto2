"use strict";

document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    event.preventDefault()
    const etunimi = document.querySelector("input[name=firstname]").value
    const sukunimi = document.querySelector("input[name=lastname]").value
    document.getElementById("target").textContent = `Nimesi on ${etunimi} ${sukunimi}.`
})