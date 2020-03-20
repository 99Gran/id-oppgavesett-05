const klarinett = document.querySelector("#klarinett")
const saksofon = document.querySelector("#saksofon")
const floyte = document.querySelector("#floyte")
const musikk = document.querySelector ("#musikk")

function spillLyd(evt) {
    const musikken = evt.target
    const lyd = musikken.dataset.lyd 

    const lydElement = document.querySelector(`#${lyd}`)

    lydElement.curenttime = 0;
    lydElement.play();
}

musikk.onclick = spillLyd