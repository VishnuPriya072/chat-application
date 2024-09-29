// register.js
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Registration successful!");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
