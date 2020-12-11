import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDj3L_MjvN2XZqJm5Ji0flgHf-STvc3V1k",
    authDomain: "reactnativefirebase-94f40.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-94f40.firebaseio.com",
    projectId: "reactnativefirebase-94f40",
    storageBucket: "reactnativefirebase-94f40.appspot.com",
    messagingSenderId: "1018852703348",
    appId: "1:1018852703348:android:a464f7c54ab644ab0e2521"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
