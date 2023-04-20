const main = document.querySelector("#main")
main.remove()

const newHeader = document.createElement("h1")
newHeader.textContent = "Header"
newHeader.setAttribute("id", "victory");

const name = "Burcu"
newHeader.innerHTML = `${name} is the champion`

const body = document.querySelector("body")
body.appendChild(newHeader)