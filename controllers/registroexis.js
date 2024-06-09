import {exis, readexis} from "./firebase.js";

const formulario = document.getElementById('exis');
const inputFile = document.getElementById("file");

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    const typodoc = formulario['idTypeExis']
    const nameProyect = formulario['NombreProyect']

    const nameE1 = formulario['nombreParticipanteExis']
    const IdpE1 = formulario['idNumberExis1']

    const nameE2 = formulario['nombreParticipanteExis2']
    const IdpE2 = formulario['idNumberExis2']

    const nameE3 = formulario['nombreParticipanteExis3']
    const IdpE3 = formulario['idNumberExis3']

    const emailE = formulario['correoExis']
    const telE = formulario['telefonoExis']
    const InstiE = formulario['institucionExis']
    const categoriaE = formulario['categoriaExis']
    const DesExisE = formulario['descripcionExis']


    const docRef = readexis(document.getElementById('NombreProyect').value)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Registro repetido en: ", docSnap.data().id);
        alert('Ya se ha registrado anteriormente...')

    } else {
        console.log("Añadiendo...");
        exis(
            typodoc.value,
            nameProyect.value,
            nameE1.value,
            IdpE1.value,
            nameE2.value,
            IdpE2.value,
            nameE3.value,
            IdpE3.value,
            emailE.value,
            telE.value,
            InstiE.value,
            categoriaE.value,
            DesExisE.value);
    
            

            alert('Registro exitoso')
            formulario.reset()
            
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