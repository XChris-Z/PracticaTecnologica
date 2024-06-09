import {clash, readclash} from "./firebase.js";

const formularioclash = document.getElementById('clash');
const inputFile = document.getElementById("file");

formularioclash.addEventListener('submit', async (e) => {
    e.preventDefault()

    const tipodoc = formularioclash['idTypeclash']
    const doc = formularioclash['idNumberclash']
    const tel = formularioclash['telefonoclash']
    const email = formularioclash['correoclash']
    const name = formularioclash['nombreParticipanteclash']
    const gamename = formularioclash['nombreJuegoclash']
    const gameid = formularioclash['idJuegoclash']

    const docRef = readclash(document.getElementById('idNumberclash').value)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Registro repetido en: ", docSnap.data().id);
        alert('Ya se ha registrado anteriormente...')

    } else {
        console.log("Añadiendo...");
        clash(
            tipodoc.value,
            doc.value,
            tel.value,
            email.value,
            name.value,
            gamename.value,
            gameid.value);

            

            alert('Registro exitoso')
            formularioclash.reset()
            
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