// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom()
 {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
      }

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "chat_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_Names = childKey;
      //Start code
      console.log("Room Name - " + Room_Names);
      row = "<div class='room_name' id=" +Room_Names+"onclick='redirectToRoomName(this.id)' >#" +Room_Names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
