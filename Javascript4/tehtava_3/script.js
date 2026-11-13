'use strict';

const names = ['John', 'Paul', 'Jones'];

for(let nimi of names) {
    let lista = document.createElement("li")
    lista.textContent = nimi
    document.getElementById("target").appendChild(lista)
}