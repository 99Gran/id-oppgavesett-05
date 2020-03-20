const inpPassord1 = document.querySelector("#inpPassord1")
const inpPassord2 = document.querySelector("#inpPassord2")
const info = document.querySelector("#info")


function sjekkPassord () {

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

}

inpPassord1.oninput = sjekkPassord;
inpPassord2.oninput = sjekkPassord;