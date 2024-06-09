import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

import {getAuth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signInWithPopup
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

import {getFirestore,
    doc, 
    setDoc,
    getDoc,
    collection, 
    addDoc, 
    getDocs,
    deleteDoc, 
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';


const firebaseConfig = {
    apiKey: "AIzaSyDXm6yXYhkdfBpuo-UmbAGMJwOpZ54yODo",
    authDomain: "exis-videojuegos.firebaseapp.com",
    projectId: "exis-videojuegos",
    storageBucket: "exis-videojuegos.appspot.com",
    messagingSenderId: "850945393806",
    appId: "1:850945393806:web:e7ff93be9f7443516f35df",
    measurementId: "G-YCDCJVED0M"
};

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    collection,
    addDoc,
    doc,
    setDoc,
    getDocs,
    getDoc,
    deleteDoc
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);

export const iniciarsesion = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

export const registrarusuario = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

export const cerrarsesion = () => {
    return signOut(auth);
}

export const borrar = async (id) => {
    const docRef = doc(db, "exis", id);
    await deleteDoc(docRef);
};



export const exis = (tipodoc, nameProyect,  name1, idp1, name2, idp2, name3, idp3, email, tel, Insti, categoria, DesExis) =>
    setDoc(doc(db, 'exis', nameProyect), { tipodoc, nameProyect, name1, idp1, name2, idp2, name3, idp3, email, tel, Insti, categoria, DesExis });

export const free = (idtype, id, tel, email, name, gamename, gameid) =>
    setDoc(doc(db, "freefire", id), {idtype, id, tel, email, name, gamename, gameid});

export const clash = (idtype, id, tel, email, name, gamename, gameid) =>
    setDoc(doc(db, "clashroyale", id), {idtype, id, tel, email, name, gamename, gameid});

export const lol = (idtype, idcap, namecap, idriotcap, teamname, Loltel, emailLol, id2, name2, idriot2, id3, name3, idriot3, id4, name4, idriot4, id5, name5, idriot5, id6, name6, idriot6) =>
    setDoc(doc(db, 'leagueoflegens', teamname), { idtype, idcap, namecap, idriotcap, teamname, emailLol, Loltel, 
                                                id2, name2, idriot2, id3, name3, idriot3, id4, name4, idriot4, id5, 
                                                name5, idriot5, id6, name6, idriot6});

export const readexis = (nameProyect) =>
    getDoc(doc(db, 'exis', nameProyect));

export const readfree = (id) =>
    getDoc(doc(db, 'freefire', id));

export const readclash = (id) =>
    getDoc(doc(db, 'clashroyale', id));

export const readlol = (idcap) =>
    getDoc(doc(db, 'leagueoflegens', idcap));

export const onGetexis = (callback) => onSnapshot(collection(db, 'exis'), callback)

export const onGetfree = (callback) => onSnapshot(collection(db, 'freefire'), callback)

export const onGetclashroyale = (callback) => onSnapshot(collection(db, 'clashroyale'), callback)

export const onGetleagueoflegens = (callback) => onSnapshot(collection(db, 'leagueoflegens'), callback)




