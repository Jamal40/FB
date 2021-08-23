importScripts("https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCxCJlList_3TBptWQkqKd0GOhmefsx-bQ",
  authDomain: "fir-try-db12a.firebaseapp.com",
  databaseURL: "https://fir-try-db12a.firebaseio.com",
  projectId: "fir-try-db12a",
  storageBucket: "fir-try-db12a.appspot.com",
  messagingSenderId: "1058550550872",
  appId: "1:1058550550872:web:cdde8c3d461061a5e0152d",
  measurementId: "G-C7DVL27TB9",
});

const messaging = firebase.messaging();

console.log("dd");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}
