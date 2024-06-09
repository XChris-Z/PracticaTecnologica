import { iniciarsesion, registrarusuario } from './firebase.js';

const registrar = document.getElementById('btnregist');
const validar = document.getElementById('btnAcc');



async function Login() {
    const usuario = document.getElementById('edtemail').value
    const clave = document.getElementById('edtpsw').value

    const sesion = iniciarsesion(usuario, clave)
    const confirmar = await sesion
        .then((confirmar) => {
            // Signed in 
            const user = confirmar.user;
            console.log(user)
            alert('sesion valida..')
            window.location.href = '../templates/datos-free.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            alert('sesion no valida..')
            window.location.href = '../templates/sesion.html';
        });

}



window.addEventListener("DOMContentLoaded", async () => {

    validar.addEventListener('click', Login)

})

/*
const back = document.getElementById("btnLogout").onclick =
    function () {
        cerrarsesion().then(() => {
            alert('Sesión cerrada con éxito')
            window.location.href = '../index.html';
        }).catch((error) => {
            console.log(error)
        });

    }
*/