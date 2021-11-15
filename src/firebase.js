
import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgnU7VY0cy98eC5hHwSLTKqk8IPvLxysA",
  authDomain: "disney-clone-b3f5d.firebaseapp.com",
  projectId: "disney-clone-b3f5d",
  storageBucket: "disney-clone-b3f5d.appspot.com",
  messagingSenderId: "74206181578",
  appId: "1:74206181578:web:b3a70745f35d0e6debdc33",
  measurementId: "G-J47YFEZBRC",
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
 
  export const provider = new GoogleAuthProvider();
  
  
  
 export default getFirestore();
 
  