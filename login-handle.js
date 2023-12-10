/*Motivation from: https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1*/

// const speakeasy = require('speakeasy');

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");
const signUpButton = document.getElementById("signup-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("login button clicked");
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  const otp      = loginForm.otp.value;
  loginErrorMsg.style.opacity = 0;
  if (username === "user" && password === "pass" && otp === "357455") {
      alert("You have successfully logged in.");
      loginSuccessMsg.style.opacity = 1;
      setTimeout(3000);
      location.replace('/monitor.html');
  } else {
      loginErrorMsg.style.opacity = 1;
  }
});

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("signup button clicked");
  if (checkExistingUser(username, email)) {
      return "User already exists. Please choose a different username or email.";
  }
  const newUser = {
      username: username,
      email: email,
      password: password,
  };
  userAccounts.push(newUser);
  alert("Account successfully created.");
});

function checkExistingUser(username, email) {
for (let user of userAccounts) {
  if (user.username === username || user.email === email) {
    return true; 
  }
}

return false; 
}

const userAccounts = []; // Array to hold user accounts
