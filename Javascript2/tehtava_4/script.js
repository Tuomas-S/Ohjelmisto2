"use strict"

let nimi = prompt("Mikä on nimesi?")
let numero = Math.floor(Math.random() * 4)

if (numero == 0)
    {document.getElementById("Tupa").textContent = `${nimi}, sinä olet Rohkelikko.`}
else if (numero == 1)
    {document.getElementById("Tupa").textContent = `${nimi}, sinä olet Luihunen.`}
else if (numero == 2)
    {document.getElementById("Tupa").textContent = `${nimi}, sinä olet Puuskupuh.`}
else if (numero == 3)
    {document.getElementById("Tupa").textContent = `${nimi}, sinä olet Korpinkynsi.`}