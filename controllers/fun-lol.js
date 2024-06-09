import { onGetleagueoflegens, readlol, } from "./firebase.js";

const btn = document.getElementById('buscar')
const div = document.getElementById('datos')
const btn2 = document.getElementById('todo')



async function getdetails() {
    const buscar = document.getElementById('buscarInput').value

    const docRef = readlol(buscar)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Data: ", docSnap.data());
        let html = ""
        tablabody.innerHTML = `
            <td> ${docSnap.data().idtype}</td>        
                <td>${docSnap.data().idcap}</td>
                <td>${docSnap.data().namecap}</td>
                <td>${docSnap.data().idriotcap}</td>
                <td>${docSnap.data().teamname}</td>
                <td>${docSnap.data().emailLol}</td>
                <td>${docSnap.data().Loltel}</td>
                <td>${docSnap.data().id2}</td>
                <td>${docSnap.data().name2}</td>
                <td>${docSnap.data().idriot2}</td>
                <td>${docSnap.data().id3}</td>
                <td>${docSnap.data().name3}</td>
                <td>${docSnap.data().idriot3}</td>
                <td>${docSnap.data().id4}</td>
                <td>${docSnap.data().name4}</td>
                <td>${docSnap.data().idriot4}</td>
                <td>${docSnap.data().id5}</td>
                <td>${docSnap.data().name5}</td>
                <td>${docSnap.data().idriot5}</td>
                <td>${docSnap.data().id6}</td>
                <td>${docSnap.data().name6}</td>
                <td>${docSnap.data().idriot6}</td>
                <td>
                    <button class"btn-delete" data-id='${docSnap.id}'> Delete </button>
                </td>
                
        `

    }
}

async function showdetails() {

    onGetleagueoflegens((querySnapshot) => {
        let html = ''
        querySnapshot.forEach(doc => {
            const data = doc.data()
            tablabody.innerHTML += `
            
                <td>${data.idtype}</td>        
                <td>${data.idcap}</td>
                <td>${data.namecap}</td>
                <td>${data.idriotcap}</td>
                <td>${data.teamname}</td>
                <td>${data.emailLol}</td>
                <td>${data.Loltel}</td>
                <td>${data.id2}</td>
                <td>${data.name2}</td>
                <td>${data.idriot2}</td>
                <td>${data.id3}</td>
                <td>${data.name3}</td>
                <td>${data.idriot3}</td>
                <td>${data.id4}</td>
                <td>${data.name4}</td>
                <td>${data.idriot4}</td>
                <td>${data.id5}</td>
                <td>${data.name5}</td>
                <td>${data.idriot5}</td>
                <td>${data.id6}</td>
                <td>${data.name6}</td>
                <td>${data.idriot6}</td>


                <td>
                    <button class"btn-delete" data-id='${doc.id}'> Delete </button>
                </td>

        `;
        })


    })
}

window.addEventListener('DOMContentLoaded', async () => {
    btn.addEventListener('click', getdetails)
    btn2.addEventListener('click', showdetails)

})
