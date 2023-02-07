import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { writable } from "svelte/store";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQAs2V9sSXKdmpKwEjd5h4xO9So_Qx43c",
  authDomain: "dontavious-backend.firebaseapp.com",
  projectId: "dontavious-backend",
  storageBucket: "dontavious-backend.appspot.com",
  messagingSenderId: "85240366776",
  appId: "1:85240366776:web:294e31127a3409d462564d",
  measurementId: "G-4VNZ84XJJM"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
  deleteApp(app);
  app = initializeApp(firebaseConfig)
}

export const db = getFirestore(app);
export const auth = getAuth(app);

export const authStore = writable({
  isLoading: true,
  currentUser: null
})

export const authHandlers = {
  login: async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
  },
  signup: async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password)
      //TODO: Write to DB
  },
  logout: async () => {
      await signOut(auth)
  },
  resetPassword: async (email) => {
      console.log('WE ARE HERE', email)
      if (!email) {
          console.log('inHERE')
          return
      }
      await sendPasswordResetEmail(auth, email)
  },
  updateEmail: async (email) => {
      authStore.update(curr => {
          return {
              ...curr, currentUser: {
                  ...curr.currentUser, email: email
              }
          }
      })
      await updateEmail(auth.currentUser, email)
  },
  updatePassword: async (password) => {
      await updatePassword(auth.currentUser, password)
  }
}

