import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "@firebase/messaging";
import api from "./api";

export const setupFirebase = () => {
  let config = {
    apiKey: "AIzaSyDqAHuBaL9kp9jhMTSYY46hoEnTl0_u8TU",
    authDomain: "metal-nobre.firebaseapp.com",
    databaseURL: "https://metal-nobre.firebaseio.com",
    projectId: "metal-nobre",
    storageBucket: "metal-nobre.appspot.com",
    messagingSenderId: "602744381339",
    appId: "1:602744381339:web:93dbd7fb449be9c58e8b3e",
    measurementId: "G-SDT4FVJGG1",
  };

  firebase.initializeApp(config);

  if (sessionStorage.getItem("token")) {
    const messaging = firebase.messaging();

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging
      .getToken()
      .then(async (token) => {
        await api.post("/partner/register/notfication", { token });
      })
      .catch((err) => {
        console.log("Unable to get permission to notify.", err);
      });
  }
};

export default firebase;
