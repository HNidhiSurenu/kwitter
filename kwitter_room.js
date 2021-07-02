
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0ycMsUWdFa4KvEwXGQXDjYHaBGhR_Kww",
      authDomain: "kwitter-37aab.firebaseapp.com",
      databaseURL: "https://kwitter-37aab-default-rtdb.firebaseio.com",
      projectId: "kwitter-37aab",
      storageBucket: "kwitter-37aab.appspot.com",
      messagingSenderId: "499547982542",
      appId: "1:499547982542:web:76b4a19e0cc52f14ba9e9f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+user_name

    function addroom(){
          room_name=document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
          });
          localStorage.setItem("room_name",room_name)
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData(); 
function redirecttoroomname(name){
      localStorage.setItem("room_name", name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}