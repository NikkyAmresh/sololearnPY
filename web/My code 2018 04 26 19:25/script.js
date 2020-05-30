  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyBtVAZxg6LgC1Kn5k0fj1xFpd0uKS6FQNo",
    authDomain: "newqzingo.firebaseapp.com",
    databaseURL: "https://newqzingo.firebaseio.com",
    storageBucket: "newqzingo.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
database.ref("/quize").remove()