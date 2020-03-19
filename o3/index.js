
/*const klarinett = document.querySelector("#klarinett");

function spillLyd() {
    klarinett.play();
}

btn.onclick = spillLyd;*/

/*
const btnKlarinett = document.querySelector("#btnKlarinett")
const btnSaksofon = document.querySelector("#btnSaksofon")
const btnFloyte = document.querySelector("#btnFloyte")


function spillLyd(evt) {
    
    const musikk = evt.target
    const farge = knapp.dataset.farge
    document.body.style.backgroundColor = farge
    
}

btnKlarinett.onclick = spillLyd
btnSaksofon.onclick = spillLyd
btnFloyte.onclick = spillLyd 
*/

const klarinett = document.querySelector("#klarinett")
const saksofon = document.querySelector("#saksofon")
const floyte = document.querySelector("#floyte")

/*function spillKlarinett() {
    klarinett.currentTime = 0
    klarinett.play()
}*/

function spillLyd() {
    klarinett.currentTime = 0
    klarinett.play()
}

function spillKlarinett() {
    saksofon.currentTime = 0
    saksofon.play()
}

function spillLyd() {
    const knapp = evt.target
    const lyd = knapp.dataset.lyd

    const lydelement = document.querySelector(`${lyd}`)

    lydelement.currentTime = 0
    lydelement.play()
}

btn.onclick = spillLyd;