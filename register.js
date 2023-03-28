
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
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

//Function for storing data
window.signup = function (e) {
    e.preventDefault();
    var obj = {
        email: email.value,
        password: password.value

    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            alert("Signup Successfully")
            window.location.href = "login.html"; // redirect to login page
        })

        .catch(function (err) {
            alert("error" + err)
        })
    console.log(obj)
};
