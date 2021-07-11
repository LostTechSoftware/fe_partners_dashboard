importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDqAHuBaL9kp9jhMTSYY46hoEnTl0_u8TU",
  authDomain: "metal-nobre.firebaseapp.com",
  databaseURL: "https://metal-nobre.firebaseio.com",
  projectId: "metal-nobre",
  storageBucket: "metal-nobre.appspot.com",
  messagingSenderId: "602744381339",
  appId: "1:602744381339:web:93dbd7fb449be9c58e8b3e",
  measurementId: "G-SDT4FVJGG1",
});

const initMesssaging = firebase.messaging();
