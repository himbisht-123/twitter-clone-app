import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyB79_yz2er9WOVcjz4o02sJjSPFNe8Oer0",
    authDomain: "twitter-clone-df6f7.firebaseapp.com",
    projectId: "twitter-clone-df6f7",
    storageBucket: "twitter-clone-df6f7.appspot.com",
    messagingSenderId: "139394487387",
    appId: "1:139394487387:web:142f832955dfde0535db7e"
  };

 const firebaseApp=firebase.initializeApp(firebaseConfig);
 
 const db=firebaseApp.firestore();

 export default db;