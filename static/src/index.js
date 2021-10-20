import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: "AIzaSyBi7L1viGhPzXoRH9sqfYZA1VsRAHRBS0U",
  authDomain: "snicely.firebaseapp.com",
  projectId: "snicely"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

createUserWithEmailAndPassword(auth, "saadtabari@gmail.com", "123456@hotmail.com")
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("user created: ", user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("something went wrong :", errorMessage)
    // ..
  });
