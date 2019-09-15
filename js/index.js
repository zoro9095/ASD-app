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

 //云端数据库
 var my_db = firebase.firestore();





$(document).ready(function() {
	$( "#loginBtn" ).click(function() {
		var email = document.getElementById("email").value;
		var pw = document.getElementById("password").value;

		firebase.auth().signInWithEmailAndPassword(email, pw).catch(function(error) {

			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			window.alert("Error: " + errorMessage);
		});
	});
});


// $(document).ready(function() {
//     $("#postReviewBtn").click(function(){
//     	var user = admin.auth().currentUser;
//     	var uid = user.uid;
// 		var university = document.querySelector("#university").value;
// 		var courseID = document.querySelector("#courseID").value;
// 		var rating = document.querySelector("#rating").value;
// 		var review = document.querySelector("#review").value;

// 		db.collection("review").add({
// 		courseID: courseID,
// 		university: university,
// 		userdID : uid,
// 		stars: rating,
// 		review: review
// 		});
//     });
// });




