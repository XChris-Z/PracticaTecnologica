import { onGetexis, readexis,  } from "./firebase.js";

const btn = document.getElementById('buscar')
const div = document.getElementById('datos')
const btn2 = document.getElementById('todo')



async function getdetails(){
    const buscar = document.getElementById('buscarInput').value

    const docRef = readexis(buscar)
    const docSnap = await docRef

    if (docSnap.exists()){
        console.log("Data: ", docSnap.data());
        let html=""
        tablabody.innerHTML =`
            <td> ${docSnap.data().tipodoc}</td>        
                <td>${docSnap.data().nameProyect}</td>
                <td>${docSnap.data().name1}</td>
                <td>${docSnap.data().idp1}</td>
                <td>${docSnap.data().name2}</td>
                <td>${docSnap.data().idp2}</td>
                <td>${docSnap.data().name3}</td>
                <td>${docSnap.data().idp3}</td>
                <td>${docSnap.data().email}</td>
                <td>${docSnap.data().tel}</td>
                <td>${docSnap.data().Insti}</td>
                <td>${docSnap.data().categoria}</td>
                <td>${docSnap.data().DesExis}</td>
                <td>
                    <button class"btn-delete" data-id='${docSnap.id}'> Delete </button>
                </td>
        `
        
    }
}

async function showdetails(){
    onGetexis((querySnapshot)=>{
        let html=''
        querySnapshot.forEach(doc =>{
            const data = doc.data()
            tablabody.innerHTML+=`
            
                <td> ${data.tipodoc}</td>        
                <td>${data.nameProyect}</td>
                <td>${data.name1}</td>
                <td>${data.idp1}</td>
                <td>${data.name2}</td>
                <td>${data.idp2}</td>
                <td>${data.name3}</td>
                <td>${data.idp3}</td>
                <td>${data.email}</td>
                <td>${data.tel}</td>
                <td>${data.Insti}</td>
                <td>${data.categoria}</td>
                <td>${data.DesExis}</td>

                <td>
                    <button class"btn-delete" data-id='${doc.id}'> Delete </button>
                </td>

        `;
        })

        
    })
}

window.addEventListener('DOMContentLoaded', async()=>{
    btn.addEventListener('click', getdetails)
    btn2.addEventListener('click', showdetails)

})
