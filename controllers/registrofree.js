import {free, readfree} from "./firebase.js";

const formulariofree = document.getElementById('free');
const inputFile = document.getElementById("file");

formulariofree.addEventListener('submit', async (e) => {
    e.preventDefault()

    const tipodoc = formulariofree['idTypefree']
    const doc = formulariofree['idNumberfree']
    const tel = formulariofree['telefonofree']
    const email = formulariofree['correofree']
    const name = formulariofree['nombreParticipantefree']
    const gamename = formulariofree['nombreJuegofree']
    const gameid = formulariofree['idJuegofree']

    const docRef = readfree(document.getElementById('idNumberfree').value)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Registro repetido en: ", docSnap.data().id);
        alert('Ya se ha registrado anteriormente...')

    } else {
        console.log("Añadiendo...");
        free(
            tipodoc.value,
            doc.value,
            tel.value,
            email.value,
            name.value,
            gamename.value,
            gameid.value);
    
            

            alert('Registro exitoso')
            formulariofree.reset()
            
            };
    }

);

/*
const formData = new FormData();
                
            for (const file of inputFile.files) {
                    formData.append("files", file);
                
            }
            fetch("http://localhost:5500/files", {
                method: "post",
                body: formData,
            }).catch((error) => ("Algo salió mal", error));

*/