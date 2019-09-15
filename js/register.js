var config = {
    apiKey: "AIzaSyAE4AgPBHNxsiYSWZVzKds0_YNZqXrq7WU",
    authDomain: "asd-app-1debf.firebaseapp.com",
    databaseURL: "https://asd-app-1debf.firebaseio.com",
    projectId: "asd-app-1debf",
    storageBucket: "",
    messagingSenderId: "1067521630695",
    appId: "1:1067521630695:web:606716bec5757e56"
    };
    // Initialize Firebase
firebase.initializeApp(config);

var db = firebase.firestore();

$(document).ready(function(){
	$( "#loginBtn" ).click(function(){
        if ($("#cms_login_ver").html() != $("#cms_login_ver_ipt").val()) {
            alert("Verification code error");
            return;
        };
        
        var email = document.getElementById("email").value;
        var pwd = document.getElementById("pwd").value;
        var pwd2 = document.getElementById("pwd2").value;

        var eamilReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        if (!eamilReg.test(email))
        {
            alert("Incorrect email address");
            return;
        }

        var pwdReg = /^[0-9a-zA-Z]+$/;
        if (!pwdReg.test(pwd)) {
            alert("Passwords can only be letters or Numbers");
            return;
        }

        if (pwd2 != pwd) {
            alert("Different passwords");
            return;
        }
        
        firebase.auth().createUserWithEmailAndPassword(email, pwd).catch(function(error){
        	// Handle Errors here.
    		var errorCode = error.code;
    		var errorMessage = error.message;
    		// [START_EXCLUDE]
    		if (errorCode == 'auth/weak-password') {
      			alert('The password is too weak.');
    		} else {
      			alert(errorMessage);
    		}
    		console.log(error);
    		// [END_EXCLUDE]
  		});
	});
});

