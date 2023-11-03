/*Motivation from: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1*/

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    loginErrorMsg.style.opacity = 0;
    if (username === "user" && password === "pass") {
        // alert("You have successfully logged in.");
        loginSuccessMsg.style.opacity = 1;
        setTimeout(3000);
        location.replace('/monitor.html');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})