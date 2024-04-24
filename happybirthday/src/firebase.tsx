// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref  } from "firebase/database";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwQy85g9XaD7RGp_vSux4XacJsu64pHRU",
  authDomain: "happybirthday-sohyun.firebaseapp.com",
  projectId: "happybirthday-sohyun",
  storageBucket: "happybirthday-sohyun.appspot.com",
  messagingSenderId: "471553203483",
  appId: "1:471553203483:web:d3facf6bf7f93dfca147be",
  measurementId: "G-Y640G5F1KR",
  databaseURL: "https://happybirthday-sohyun-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export const getCngrtMsg = async () => {
    const dbRef = ref(database);
    return get(child(dbRef, "/CngrtMsg"))
      .then(snapshot => {
      if (snapshot.exists()) {
        return Object.entries(snapshot.val());
      } else {
        return [];
      }
    })
      .catch(error => {
      console.error(error);
      return [];
    });
  };

  export const storage = getStorage(app);