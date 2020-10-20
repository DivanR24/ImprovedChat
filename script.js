// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCE1E47mnql7rv2U2v2zGOTx_zE6WzEX7U",
    authDomain: "makesppchat-ddb4f.firebaseapp.com",
    databaseURL: "https://makesppchat-ddb4f.firebaseio.com",
    projectId: "makesppchat-ddb4f",
    storageBucket: "makesppchat-ddb4f.appspot.com",
    messagingSenderId: "545180136422",
    appId: "1:545180136422:web:35e2743dc228a55fe55c27",
    measurementId: "G-T4RDW6XPHB"
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

