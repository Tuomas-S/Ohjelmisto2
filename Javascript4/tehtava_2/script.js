"use strict";

let target = document.getElementById("target")

let first = document.createElement("li")
first.textContent = "First item"
target.appendChild(first)

let second = document.createElement("li")
second.textContent = "Second item"
second.setAttribute("class", "my-item")
target.appendChild(second)

let third = document.createElement("li")
third.textContent = "Third item"
target.appendChild(third)

