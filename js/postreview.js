var firebaseConfig = {
    apiKey: "AIzaSyAE4AgPBHNxsiYSWZVzKds0_YNZqXrq7WU",
    authDomain: "asd-app-1debf.firebaseapp.com",
    databaseURL: "https://asd-app-1debf.firebaseio.com",
    projectId: "asd-app-1debf",
    storageBucket: "asd-app-1debf.appspot.com",
    messagingSenderId: "1067521630695",
    appId: "1:1067521630695:web:606716bec5757e56"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

$(document).ready(function() {
  $( "#logoutBtn" ).click(function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  });
});

$(document).ready(function() {
  $( "#homeBtn" ).click(function() {
    window.location = "/index";
  });
});

$(document).ready(function() {
    $("#postReviewBtn").click(function(){
      var user = firebase.auth().currentUser;
      var uid = user.uid;
      var university = document.querySelector("#university").value;
      var courseID = document.querySelector("#courseID").value;
      var rating = document.querySelector("#rating").value;
      var review = document.querySelector("#review").value;
      
      db.collection("review").add({
      courseID: courseID,
      university: university,
      userdID : uid,
      stars: rating,
      review: review
      });
      alert("Review Posted");

    }); 
});



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    window.location = '/';
  }
});