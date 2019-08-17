const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('listening on ' + port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});

app.post('/login', (req, res) => {
  var user = req.body.email;
  var pw = req.body.password;


  if (user == 'asd' && pw == 'asd'){
  	res.sendFile(__dirname + '/user.html')
  }

  console.log(req.body.email);
  console.log(req.body.password);
});