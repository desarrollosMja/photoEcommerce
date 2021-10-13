//Traer firebase
import firebase from "firebase/app"

//Traer el servicio de firestore
import "firebase/firestore";

//Inicializar el servicio
const firebaseConfig = {
    apiKey: "AIzaSyCBH3oQ957xktcmmCru5ifFAy1WQkmbmbM",
    authDomain: "entrega-proyecto-final-react.firebaseapp.com",
    projectId: "entrega-proyecto-final-react",
    storageBucket: "entrega-proyecto-final-react.appspot.com",
    messagingSenderId: "959734215835",
    appId: "1:959734215835:web:b2d4db33cec5a50811423e"
  };

const app = firebase.initializeApp(firebaseConfig);

//Tener la referencia de la base de datos para importarla en el resto de la app
export const firestore = firebase.firestore(app)
export const Timestamp = firebase.firestore.Timestamp;