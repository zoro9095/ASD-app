// JavaScript source code
<input type="text" id="Name">
<input type="text" id="Number">
<input type="text" id="University">

<button type="button" id="button" onclick="addLead()">Submit</button>

function addLead() {
    var clientName = document.getElementById('Name').value;
    var clientMobile = document.getElementById('Number').value;
    var clientEmail = document.getElementById('University').value;

    var newClientKey = database.ref().child('leads').push().key;
    database.ref('leads/'+newClientKey+'/Name').set(clientName);
    database.ref('leads/'+newClientKey+'/Number').set(clientNumber);
    database.ref('leads/'+newClientKey+'/University').set(clientUniversity);
}

database.child().child();
var leadsRef = database.ref('leads');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    });
});

leadsRef.on('child_added', function(snapshot) {
      //Do something with the data
}); 