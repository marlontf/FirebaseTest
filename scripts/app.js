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

const TURMA = "turmaA"
let db = firebase.firestore()

//Ler todos os dados de uma coleção
// db.collection("turmaA").get().then((snapshot) => {
//    snapshot.forEach((doc) => {
//       let aluno = doc.data()
//       console.log(aluno.nome)
//    })
// })


//Ler dados específicos
// let docRef = db.collection("turmaA").doc("gYMoJLLhwBigk0JhyK0z")
// docRef.get().then((doc)=>{
//    let aluno = doc.data()
//    console.log(aluno.nome)
// })

// db.collection("turmaA").where("nome", ">" , "Igor").get()
// .then(snapshot =>{
//    snapshot.forEach((doc) => {
//             let aluno = doc.data()
//             console.log(aluno.nome, aluno.sobrenome)
//          })
// })

//Comparações permitidas == , > , < , >= , <=
//Tomar cuidado ao tentar comparar string com número, vai dar ruim



//Inserção com geração automática de ID
// db.collection(TURMA).add({
//    nome: "Marcos",
//    sobrenome: "Santos",
//    notas: {
//       nota1: 9.6,
//       nota2: 7.5
//    }
// }).then(doc => {
//    console.log("Documento inserido com sucesso", doc)
// }).catch(err => {
//    console.log(err)
// })

db.collection(TURMA).doc("AlunoNovo").set({
   nome: "Mariana",
   sobrenome: "Santos",
   notas: {
      nota1: 8.6,
      nota2: 7.5
   }
}).then(() => {
   console.log("Documento inserido com sucesso")
}).catch(err => {
   console.log(err)
})