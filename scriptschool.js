// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyAKWA3pBcAuh6XkrwvVud4olE83tBoF8lg",
    authDomain: "chat3-224ae.firebaseapp.com",
    databaseURL: "https://chat3-224ae.firebaseio.com",
    projectId: "chat3-224ae",
    storageBucket: "chat3-224ae.appspot.com",
    messagingSenderId: "10836081571",
    appId: "1:10836081571:web:6a381e80691a348526b816"
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

