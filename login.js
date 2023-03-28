
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWnokh9zQh67ym9NEPwLG5iTgaMQJAFQ0",
    authDomain: "login-project-b1a4b.firebaseapp.com",
    databaseURL: "https://login-project-b1a4b-default-rtdb.firebaseio.com",
    projectId: "login-project-b1a4b",
    storageBucket: "login-project-b1a4b.appspot.com",
    messagingSenderId: "531948102751",
    appId: "1:531948102751:web:64b44669833ed92eda67ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

//Getting All the Objects of html
var email = document.getElementById("email")
var password = document.getElementById("password")

window.login = function (e) {
    e.preventDefault();
    var obj = {
        email: email.value,
        password: password.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            console.log(auth.currentUser.uid);
            alert("Login Successful")
            window.location.href = "dashboard.html"; // redirect to dashboard.html
        })
        .catch(function (err) {
            alert("login error " + err)
        })
    console.log(obj)
}
