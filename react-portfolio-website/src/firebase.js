
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


// Firebase is not configured yet (login/dashboard disabled for now).
// To re-enable: fill in firebaseConfig above with real values from
// https://console.firebase.google.com, then uncomment the block below.

const hasConfig = Boolean(firebaseConfig.apiKey);

let app, auth, provider, db, storage;

if (hasConfig) {
  app = initializeApp(firebaseConfig);
  auth = getAuth();
  provider = new GoogleAuthProvider();
  db = getFirestore(app);
  storage = getStorage(app);
} else {
  console.warn('Firebase not configured — login/dashboard features are disabled.');
}

export { auth, db, storage };
export const signInWithGoogle = () =>
  provider ? signInWithPopup(auth, provider) : Promise.reject('Firebase not configured');