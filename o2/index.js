const kroner = document.querySelector("#kroner")
const btn = document.querySelector("#btn")
const info = document.querySelector("#info")
const add = document.querySelector("#add")

let penger = 500 

function sjekkKonto(evt) {

    const knappeID = evt.target.id
    const belop = Number(kroner.value)

    if(knappeID === "add") {
        console.log("Du klikket på add")
        penger += belop
        info.innerText = `Du har nå ${penger}kr på kontoen`
        return
    }

    //penger = penger - belop
    penger -= belop 


    if(belop > penger) {
        info.innerText = "Du har ikke nok penger"
        return
    }


    info.innerText = `Du har nå ${penger}kr på kontoen`

}



btn.onclick = sjekkKonto;
add.onclick = sjekkKonto;