"use strict"

let vuosi = parseInt(prompt("Anna vuosiluku."))

if (vuosi % 4 == 0)
    {if ((vuosi % 100 == 0) && !(vuosi % 400 == 0))
        {document.getElementById("Vastaus").textContent = `Vuosi ${vuosi} ei ole karkausvuosi.`}
    else
        {document.getElementById("Vastaus").textContent = `Vuosi ${vuosi} on karkausvuosi.`}}
else
    {document.getElementById("Vastaus").textContent = `Vuosi ${vuosi} Ei ole karkausvuosi.`}