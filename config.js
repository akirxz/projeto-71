import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig= {
    apiKey: "AIzaSyA8lkDxZP434jhHSa-lRg14_39c_W4tuJ0",
    authDomain: "projeto-71-2d107.firebaseapp.com",
    projectId: "projeto-71-2d107",
    storageBucket: "projeto-71-2d107.appspot.com",
    messagingSenderId: "828765943158",
    appId: "1:828765943158:web:0fe57d6dbea68f3e827657"
  };

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
