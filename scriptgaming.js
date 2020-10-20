// Your web app's Firebase configuration

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAlFoLS7VjiS3G4C9gaWYfi8_pQR0gNZiU",
    authDomain: "chat2-af805.firebaseapp.com",
    databaseURL: "https://chat2-af805.firebaseio.com",
    projectId: "chat2-af805",
    storageBucket: "chat2-af805.appspot.com",
    messagingSenderId: "841854643422",
    appId: "1:841854643422:web:7dd8bfdb46540aca81a64f"
  };

// Initialize Firebase  
 
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
let input = document.getElementById("message");
let name = document.getElementById("username");
let userbut = document.getElementById("userbut");
myStorage = window.localStorage;


var usernme = username.value
userbut.addEventListener('click',function(event) {
  myStorage.setItem('usernamesave', username.value)
})


var userdata = localStorage.getItem('usernamesave')
username.value = userdata

input.addEventListener('keypress',function(event) {
  if(event.key == 'Enter') {
    database.ref("messages").push({
      name: name.value,
      value: input.value
    })
    input.value = ""
  
  }
})

database.ref('messages').on('child_added', function (message) {
  let messages = document.getElementById("messages");
  let name = message.val().name;
  let value = message.val().value;

  let div = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = name;
  let p = document.createElement('p');
  p.innerHTML = value;

  div.appendChild(span);
  div.appendChild(p);

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;


})

