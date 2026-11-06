"use strict"

let vuosi = parseInt(prompt("Anna vuosiluku."))

if (vuosi % 4 == 0)
    {if ((vuosi % 100 == 0) && !(vuosi % 400 == 0))
        {document.querySelector("#Vastaus").innerHTML = `Vuosi ${vuosi} ei ole karkausvuosi.`}
    else
        {document.querySelector("#Vastaus").innerHTML = `Vuosi ${vuosi} on karkausvuosi.`}}
else
    {document.querySelector("#Vastaus").innerHTML = `Vuosi ${vuosi} ei ole karkausvuosi.`}