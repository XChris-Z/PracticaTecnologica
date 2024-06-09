import { onGetclashroyale, readclash } from "./firebase.js";

const btn = document.getElementById('buscar')
const div = document.getElementById('datos')
const btn2 = document.getElementById('todo')
const btnsDelete = tablabody.querySelectorAll('.btn-delete')


async function getdetails() {
    const buscar = document.getElementById('buscarInput').value

    const docRef = readclash(buscar)
    const docSnap = await docRef

    if (docSnap.exists()) {
        console.log("Data: ", docSnap.data());
        let html = ""
        tablabody.innerHTML = `
            <td> ${docSnap.data().idtype}</td>        
                <td>${docSnap.data().id}</td>
                <td>${docSnap.data().tel}</td>
                <td>${docSnap.data().email}</td>
                <td>${docSnap.data().name}</td>
                <td>${docSnap.data().gamename}</td>
                <td>${docSnap.data().gameid}</td>
                <td>
                    <button class"btn-delete" data-id='${docSnap.id}'> Delete </button>
                </td>
                
        `

    }
}

async function showdetails() {

    onGetclashroyale((querySnapshot) => {
        let html = ''
        querySnapshot.forEach(doc => {
            const data = doc.data()
            tablabody.innerHTML += `
            
                <td> ${data.idtype}</td>        
                <td>${data.id}</td>
                <td>${data.tel}</td>
                <td>${data.email}</td>
                <td>${data.name}</td>
                <td>${data.gamename}</td>
                <td>${data.gameid}</td>

                <td>
                    <button class"btn-delete" data-id='${doc.id}'> Delete </button>
                </td>
            
        `;
        });
            
        
        const btnsDelete = tablabody.querySelectorAll('.btn-delete')
        btnsDelete.forEach(btn =>{
            btn.addEventListener('click', (event) => {
                console.log(event)
            })
        })
    })
}

window.addEventListener('DOMContentLoaded', async () => {
    btn.addEventListener('click', getdetails)
    btn2.addEventListener('click', showdetails)

})