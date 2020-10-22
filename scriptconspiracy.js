// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyB9r9_zLJQqJXY74Ett3XW-o_opwkxg4Do",
    authDomain: "chat4-5e0ff.firebaseapp.com",
    databaseURL: "https://chat4-5e0ff.firebaseio.com",
    projectId: "chat4-5e0ff",
    storageBucket: "chat4-5e0ff.appspot.com",
    messagingSenderId: "736541778258",
    appId: "1:736541778258:web:290bb1db0f93d587bdda8b"
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

forbut.addEventListener('click',function(event) {
  
})
