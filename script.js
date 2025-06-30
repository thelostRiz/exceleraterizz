// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArVn0l2PrrSMcCDQPTsD7tn53fJ1uDpuc",
  authDomain: "exceleraterizz.firebaseapp.com",
  databaseURL: "https://exceleraterizz-default-rtdb.firebaseio.com",
  projectId: "exceleraterizz",
  storageBucket: "exceleraterizz.appspot.com",
  messagingSenderId: "1009813151609",
  appId: "1:1009813151609:web:6bc49dc6dca1bec55dd9a8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Listen for secret code to open chat
document.body.addEventListener('keydown', function(e) {
  alert("You pressed: " + e.key);
});

// Listen for new messages and display them
const messagesRef = db.ref("messages");
messagesRef.on('child_added', snapshot => {
  const msg = snapshot.val();
  displayMessage(msg.text);
});

// Function to send a message
function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (text) {
    messagesRef.push({ text });
    input.value = "";
  }
}

// Function to display a message
function displayMessage(text) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = text;
  document.getElementById("messages").appendChild(msgDiv);
}

