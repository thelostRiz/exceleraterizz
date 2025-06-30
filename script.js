// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArVn0l2PrrSMcCDQPTsD7tn53fJ1uDpuc",
  authDomain: "exceleraterizz.firebaseapp.com",
  projectId: "exceleraterizz",
  storageBucket: "exceleraterizz.firebasestorage.app",
  messagingSenderId: "1009813151609",
  appId: "1:1009813151609:web:6bc49dc6dca1bec55dd9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
