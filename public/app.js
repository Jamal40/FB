document.addEventListener("DOMContentLoaded", function (e) {
  const app = firebase.app();

  const messaging = firebase.messaging();

  console.log(messaging);

  messaging
    .requestPermission()
    .then(function () {
      console.log("Notification permission granted.");

      messaging
        .getToken({
          vapidKey:
            "BMrZl0MKe03kKx7U7Rd7U_xWJy7Ikr_uVVgeAHOuZPMfaylYvv9nc5s4rpdYvOY4DceoyCcM_xi2ytSrverbSm4",
        })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
            firebase.messaging().onMessage(
              (payload) => {
                console.log(payload);
              },
              (e) => {
                console.log(e);
              }
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    })
    .catch(function (err) {
      console.log("Unable to get permission to notify. ", err);
    });
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const user = res.user;
      //console.log(user);

      const anl = firebase.analytics();
      console.log(anl.logEvent);
      anl.logEvent("login");
    });
}
