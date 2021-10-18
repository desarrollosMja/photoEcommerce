//Traer firebase
import firebase from "firebase/app"

//Traer el servicio de firestore
import "firebase/firestore";

//Inicializar el servicio
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

const app = firebase.initializeApp(firebaseConfig);

//Tener la referencia de la base de datos para importarla en el resto de la app
export const firestore = firebase.firestore(app)
export const Timestamp = firebase.firestore.Timestamp;