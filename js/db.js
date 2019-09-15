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
