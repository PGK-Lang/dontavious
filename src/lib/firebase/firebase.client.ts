import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, doc } from 'firebase/firestore';
import { writable } from "svelte/store";
import { getDatabase, set, ref, get, update } from 'firebase/database';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword, updateProfile } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSENGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  console.log('created');
} else {
  app = getApp();
  deleteApp(app);
  app = initializeApp(firebaseConfig);
  console.log("destroyed");
}

export const db = getDatabase(app);
export const auth = getAuth(app);

console.log(ref(db, 'users/' + "S3pQ1wk89sVXBkMvDfaKlx1m2rQ2"));

export const authStore = writable({
  isLoading: true,
  currentUser: null
})
export const readHandlers = {
  readUserName: async () => {
    const _uid = auth.currentUser?.uid;
    let ret = "" // 
    return get(ref(db, 'users/' + _uid+'/personality'))
  }
}
export const authHandlers = {
  login: async (_email, _password) => {
    await signInWithEmailAndPassword(auth, _email, _password);
    console.log("done");
    readHandlers.readUserName();
  },
  signup: async (_email, _password, _username) => {
    await createUserWithEmailAndPassword(auth, _email, _password);
    authHandlers.updateDisplayName(_username);
    try {
      const _uid = auth.currentUser?.uid;
      set(ref(db, 'users/' + _uid), {
        username: _username,
        email: _email,
        uid: _uid,
        personality : ""
      });
      console.log("written");
    }
    catch (e) {
      console.log(e)
    }
    console.log(auth.currentUser?.displayName);
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
  },
  updateDisplayName: async (_username) => {
    updateProfile(auth.currentUser, {
      displayName: _username
    });
  },
  setInfoFor: async (_value) => {
    try {
      const _uid = auth.currentUser?.uid;
      update(ref(db, 'users/' + this.uid+ this.personality), _value);
      console.log("written");
    }
    catch (e) {
      console.log(e)
    }
  }
}