// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
   apiKey: "AIzaSyAYnOnI6iVG6BkZfDeMpPtbKyEXpys5wV8",
   authDomain: "colegio-29229.firebaseapp.com",
   projectId: "colegio-29229",
   storageBucket: "colegio-29229.appspot.com",
   messagingSenderId: "888050083455",
   appId: "1:888050083455:web:b461971e1cb6996ab4814a",
   measurementId: "G-K0BC9EXYY4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(initializeApp(firebaseConfig))

let db = firebase.firestore()

//Ler todos os dados de uma coleção
// db.collection("turmaA").get().then((snapshot) => {
//    snapshot.forEach((doc) => {
//       let aluno = doc.data()
//       console.log(aluno.nome)
//    })
// })


//Ler dados específicos
// let docRef = db.collection("turmaA").doc("VgC3wqtDleXyZuxNe2AV")
// docRef.get().then((doc)=>{
//    let aluno = doc.data()
//    console.log(aluno.nome)
// })