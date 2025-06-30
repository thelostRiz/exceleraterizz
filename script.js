// Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Listen for secret code
document.body.addEventListener('keydown', function(e) {
  if (e.key === '#' || e.key === '/') {
    const code = prompt("Enter code:");
    if (code === "openchat") {
      document.getElementById("chat").style.display = "block";
    }
  }
});

// Listen for messages
const messagesRef = db.ref("messages");
messagesRef.on('child_added', snapshot => {
  const msg = snapshot.val();
  displayMessage(msg.text);
});

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (text) {
    messagesRef.push({ text });
    input.value = "";
  }
}

function displayMessage(text) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = text;
  document.getElementById("messages").appendChild(msgDiv);
}
