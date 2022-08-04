//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyC72r4GOayykSfWa9aD5p4M8iv2yENaRuE",
      authDomain: "lets-chat-web-app-53999.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-53999-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-53999",
      storageBucket: "lets-chat-web-app-53999.appspot.com",
      messagingSenderId: "581889071512",
      appId: "1:581889071512:web:a183a98c9ae5374653b3ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg = document.getElementById("msg"). value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0   
})
//End code
      } });  }); }
getData();
