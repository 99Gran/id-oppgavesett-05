const kroner = document.querySelector("#kroner")
const btn = document.querySelector("#btn")
const info = document.querySelector("#info")
const add = document.querySelector("#add")


function sjekkKonto() {
    if (kroner.value === 500){
        info.innerText = "Du har nå 500kr på kontoen";
    }

    if (kroner.value <= 500){
        info.innerText = ("Du har nå 300kr på konto");
        console.log(kroner<=500)
    }

    if (kroner.value >= 500){
        info.innerText = ("Du har ikke dekning på kontoen");
        console.log(kroner>=500)
    }
}

kroner.oninput = sjekkKonto;

/*function sjekkSaldo () {

    if(inpPassord2.value === "") {
        info.innerText = "Fyll inn begge"
        return
    }
    if(inpPassord1.value === "") {
        info.innerText = "Gjenta passordet"
        return
    }


    if (inpPassord1.value === inpPassord2.value) {
        info.innerText = "Passordene er like";
        console.log("Passordene er like")
    } else {
        info.innerText = "Passordene er ikke like"
    }

}*/