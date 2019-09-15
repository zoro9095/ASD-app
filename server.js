const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const firebase = require('firebase');
// const admin = require('firebase-admin');
// const serviceAccount = require("./asd-app-1debf-firebase-adminsdk-5x4pj-6424a18106.json");
// const functions = require('firebase-functions');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://asd-app-1debf.firebaseio.com"
// });

// var db = admin.firestore();

app.use("/CSS", express.static(__dirname + "/CSS"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/images", express.static(__dirname + "/images"));
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("listening on " + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/postreview", (req, res) => {
  res.sendFile(__dirname + "/postreview.html");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.get("/forgetpwd", (req, res) => {
  res.sendFile(__dirname + "/forgetpwd.html");
});

app.get("/editpersonal", (req, res) => {
  res.sendFile(__dirname + "/editpersonal.html");
});
