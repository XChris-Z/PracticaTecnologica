import {lol, readlol} from "./firebase.js";

const formulariolol = document.getElementById('lol')
const inputFile = document.getElementById("file");

formulariolol.addEventListener('submit', async (e) => {
    e.preventDefault()

    const typelol = formulariolol["idTypelol"]
    const idlol = formulariolol["idNumberlol"]
    const capname = formulariolol["nombrecapitanlol"]
    const riot = formulariolol["riotidlol"]
    const teamname = formulariolol['NombreEquipolol']
    const tel = formulariolol['telefonolol']
    const email = formulariolol['correolol']

    const idlol2 = formulariolol['idNumberlol2']
    const p2 = formulariolol['nombreParticipante2lol']
    const riot2 = formulariolol['riotidlol2']
    

    const idlol3 = formulariolol['idNumberlol3']
    const p3 = formulariolol['nombreParticipante3lol']
    const riot3 = formulariolol['riotidlol3']

    const idlol4 = formulariolol['idNumberlol4']
    const p4 = formulariolol['nombreParticipante4lol']
    const riot4 = formulariolol['riotidlol4']

    const idlol5 = formulariolol['idNumberlol5']
    const p5 = formulariolol['nombreParticipante5lol']
    const riot5 = formulariolol['riotidlol5']

    const idlol6 = formulariolol['idNumberlol6']
    const p6 = formulariolol['nombreParticipante6lol']
    const riot6 = formulariolol['riotidlol6']

    const docRef = readlol(document.getElementById('idNumberlol').value);
    const docSnap = await docRef;

    if (docSnap.exists()) {
        console.log("Registro repetido en: ", docSnap.data());
        alert('Ya se ha registrado anteriormente...')

    } else {
        console.log("Añadiendo...");
        lol(
            typelol.value,
            idlol.value,
            capname.value,
            riot.value,
            teamname.value,
            tel.value,
            email.value,
            idlol2.value,
            p2.value,
            riot2.value,
            idlol3.value,
            p3.value,
            riot3.value,
            idlol4.value,
            p4.value,
            riot4.value,
            idlol5.value,
            p5.value,
            riot5.value,
            idlol6.value,
            p6.value,
            riot6.value);
        
            

            alert('Registro exitoso')
            formulariolol.reset()
            
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