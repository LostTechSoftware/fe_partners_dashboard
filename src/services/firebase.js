import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "@firebase/messaging";

export const setupFirebase = (production) => {
  let config;
  if (production) {
    config = {
      apiKey: "AIzaSyDqAHuBaL9kp9jhMTSYY46hoEnTl0_u8TU",
      authDomain: "metal-nobre.firebaseapp.com",
      databaseURL: "https://metal-nobre.firebaseio.com",
      projectId: "metal-nobre",
      storageBucket: "metal-nobre.appspot.com",
      messagingSenderId: "602744381339",
      appId: "1:602744381339:web:93dbd7fb449be9c58e8b3e",
      measurementId: "G-SDT4FVJGG1",
    };
  } else {
    config = {
      apiKey: "AIzaSyDqAHuBaL9kp9jhMTSYY46hoEnTl0_u8TU",
      authDomain: "metal-nobre.firebaseapp.com",
      databaseURL: "https://metal-nobre.firebaseio.com",
      projectId: "metal-nobre",
      storageBucket: "metal-nobre.appspot.com",
      messagingSenderId: "602744381339",
      appId: "1:602744381339:web:faa1984e80368d128e8b3e",
      measurementId: "G-WP8ZJK6KXW",
    };
  }

  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging
    .getToken({
      vapidKey:
        "BEbIW1tIZr2HA-jR5EL_Mq1-StOiBpIKI6NO3lwZxjycTuEnO_iH9QtMXwSCDYfqpfQ-62thwhwIyYJCli7RTJ4",
    })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });

  return;
};

export default firebase;
