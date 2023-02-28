import { deleteApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, doc } from 'firebase/firestore';
import { writable } from "svelte/store";
import { getDatabase, set, ref, get, update, push, DataSnapshot, remove } from 'firebase/database';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import type { Snapshot } from '../../routes/$types';

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
    setTimeout(() => {
      console.log("why")
    }, 2000);
    if(auth.currentUser){console.log("hello")}
    else{console.log("nothing works")}
    let _uid = auth.currentUser?.uid
    console.log("uid: " + _uid);
    let ret = ""
    try {
    await get(ref(db, '/users/' + _uid)).then(snapshot => ret = snapshot.val().username);
    console.log("ret after change = " + ret);
    }
    catch(error){
      console.log(error);
    }
    return ret
  },
  readAge: async () => {
    setTimeout(() => {
      console.log("why")
    }, 2000);
    if(auth.currentUser){console.log("hello")}
    else{console.log("nothing works")}
    let _uid = auth.currentUser?.uid
    console.log("uid: " + _uid);
    let ret = ""
    try {
    await get(ref(db, '/users/' + _uid+'/vitals')).then(snapshot => ret = snapshot.val().age);
    console.log("ret after change = " + ret);
    }
    catch(error){
      console.log(error);
    }
    return ret
  },
  readPronouns: async () => {
    setTimeout(() => {
      console.log("why")
    }, 2000);
    if(auth.currentUser){console.log("hello")}
    else{console.log("nothing works")}
    let _uid = auth.currentUser?.uid
    console.log("uid: " + _uid);
    let ret = ""
    try {
    await get(ref(db, '/users/' + _uid+'/vitals')).then(snapshot => ret = snapshot.val().pronouns);
    console.log("ret after change = " + ret);
    }
    catch(error){
      console.log(error);
    }
    return ret
  },
  readHobby: async () => {
    setTimeout(() => {
      console.log("why")
    }, 2000);
    if(auth.currentUser){console.log("hello")}
    else{console.log("nothing works")}
    let _uid = auth.currentUser?.uid
    console.log("uid: " + _uid);
    let ret = ""
    try {
    await get(ref(db, '/users/' + _uid+'/vitals')).then(snapshot => ret = snapshot.val().like);
    console.log("ret after change = " + ret);
    }
    catch(error){
      console.log(error);
    }
    return ret
  },
  readBio: async () => {
    setTimeout(() => {
      console.log("why")
    }, 2000);
    if(auth.currentUser){console.log("hello")}
    else{console.log("nothing works")}
    let _uid = auth.currentUser?.uid
    console.log("uid: " + _uid);
    let ret = ""
    try {
    await get(ref(db, '/users/' + _uid+'/vitals/biography')).then(snapshot => ret = snapshot.val().biography);
    console.log("ret after change = " + ret);
    }
    catch(error){
      console.log(error);
    }
    return ret
  },

  getTree: async () =>  // Get the entire working tree
  {
    if(auth.currentUser){console.log("hello")}
    else{console.log("nothing works")}
    let _uid = auth.currentUser?.uid
    console.log("uid: " + _uid);
    let ret = ""
    try {
    await get(ref(db, '/users/')).then(snapshot => snapshot.forEach(function(snapshot){
      console.log(snapshot.val().username)
    }));
    console.log("ret after change = " + ret);
    }
    catch(error){
      console.log(error);
    }
    return ret
  },

  withinAgeRange: (age1, age2) => { // Within the minimum/maximum dating age requirements
    let one = (parseInt(age1)/2)+7 >= parseInt(age2)
    let two = (parseInt(age1)-7)*2 <= parseInt(age2)
    if (one && two){
      return true;
    }
    return false;
  },

  returnWords: (bio1, bio2) => { // Returns the words in a string
    
  },
  seeCap: (u1:DataSnapshot, u2:DataSnapshot) => { // Get the points value
    let points = 0;
    if (u1.val().like === u2.val().like){
      points += 5;
    }

    return points;
  }
}
export const authHandlers = {
  login: async (_email: string, _password: string) => { // Logs in
    await signInWithEmailAndPassword(auth, _email, _password);
    console.log("done");
  },
  signup: async (_email: string, _password: string, _username: string) => { // Signs in 
    await createUserWithEmailAndPassword(auth, _email, _password);
    authHandlers.updateDisplayName(_username);
    try {
      const _uid = auth.currentUser?.uid;
      set(ref(db, 'users/' + _uid), {
        username: _username,
        email: _email,
        uid: _uid,
        personality: ""
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
  resetPassword: async (email: string) => {
    console.log('WE ARE HERE', email)
    if (!email) {
      console.log('inHERE')
      return
    }
    await sendPasswordResetEmail(auth, email)
  },
  updateEmail: async (email: string) => {
    authStore.update(curr => {
      return {
        ...curr, currentUser: {
          ...curr.currentUser, email: email
        }
      }
    })
    await updateEmail(auth.currentUser, email)
  },
  updatePassword: async (password: string) => {
    await updatePassword(auth.currentUser, password)
  },
  updateDisplayName: async (_username: string) => {
    updateProfile(auth.currentUser, {
      displayName: _username
    });
  },
  setInfoFor: async (_value: string) => {
    try {
      const _uid = auth.currentUser?.uid;
      update(ref(db, 'users/' + this.uid + this.personality), _value);
      console.log("written");
    }
    catch (e) {
      console.log(e)
    }
  },
  setVitals: async (fn:any, ln:any, _pronoms:any, _grade:any, _age:any, favoriteC:any, favoriteT:any) => {
    // Create a new post reference with an auto-generated id
    const db = getDatabase();
    const postListRef = ref(db, 'users/'+auth.currentUser?.uid+'/vitals');
    set(postListRef, {
      pronouns : _pronoms,
      grade : _grade,
      age : _age,
      like : favoriteC,
      teach : favoriteT,
      first_name : fn,
      last_name : ln
    });
  },
  setBio: async (bio:string) => {
    const db = getDatabase();
    const postListRef = ref(db, 'users/'+auth.currentUser?.uid+'/vitals/biography');
    set(postListRef, {
      biography : bio
    });
  }
}
export const updateHandlers = {
  updateUsername : async (name:string) => {
    await authHandlers.updateDisplayName(name);
    set(ref(db, 'users/' + auth.currentUser?.uid + "/username"), {
      username : name,
    });
  },
  updateAge : (nage:string) => {
    set(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/age"), {
      age : nage,
    });
  },
  updatePronouns : (nnouns:string) => {
    set(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/pronouns"), {
      pronouns : nnouns,
    });
  },
  updateHobby : (nteach:string) => {
    set(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/like"), {
      like : nteach,
    });
  },
  updateName : (nname:string) => {
    let names = nname.split(" ");
    if (names.length < 2){
      return
    }
    set(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/first_name"), {
      first_name : names[0],
    });
    set(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/last_name"), {
      first_name : names[-1],
    });
    if (names.length > 2){
      let middle = names.slice(1, -1).join(" ");
      set(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/middle_name"), {
        middle_name : middle,
      });
    }
    else {
      try {
        remove(ref(db, 'users/' + auth.currentUser?.uid + "/vitals/middle_name"));
      }
      catch(error) {
        console.log(error)
      }
    }
  }
}

export async function UpdateEverything (name:string, age:string, pn:string, like:string){
    await updateHandlers.updateUsername(name);
    updateHandlers.updateAge(age);
    updateHandlers.updatePronouns(pn);
    updateHandlers.updateHobby(like);
    console.log("update complete");

}
export function writePersonalityData(userId: string, personalityType: string) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId + "/personality"), {
    personality_type: personalityType,
  });
}
