import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUcslZtfUUcXoPQ9R5uOv6DpMwQwICmfE",
    authDomain: "shopping-app-5659c.firebaseapp.com",
    projectId: "shopping-app-5659c",
    storageBucket: "shopping-app-5659c.appspot.com",
    messagingSenderId: "1038717944668",
    appId: "1:1038717944668:web:2c7ab523bbcae7b412b799",
    measurementId: "G-9P5N4BBGG1"

};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const  createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;