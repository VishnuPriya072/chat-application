// chat.js
const db = firebase.firestore();
const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const logoutButton = document.getElementById("logoutButton");

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        db.collection("messages").add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: firebase.auth().currentUser.email
        });
        messageInput.value = "";
    }
});

db.collection("messages")
    .orderBy("timestamp", "asc")
    .onSnapshot((snapshot) => {
        chatBox.innerHTML = "";
        snapshot.forEach((doc) => {
            const msg = doc.data();
            const messageElement = document.createElement("div");
            messageElement.textContent = `${msg.user}: ${msg.message}`;
            chatBox.appendChild(messageElement);
        });
    });

logoutButton.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
        alert("Logged out!");
        window.location.href = "login.html";
    });
});
