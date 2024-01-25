const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const password = document.getElementById("password");

const password2 = document.getElementById("password2");

var m1 = 0,
  m2 = 0,
  m3 = 0,
  m4 = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs

  const usernameValue = username.value.trim();

  const emailValue = email.value.trim();

  const passwordValue = password.value.trim();

  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorfor(username, "Username cannot be blank");
    m1 = 0;
  } else if (!isUsername(usernameValue)) {
    setErrorfor(username, "username is not valid");
    m1 = 0;
  } else {
    //add success class
    setSuccessfor(username);
    m1 = 1;
  }

  if (emailValue === "") {
    //show error
    //add error class
    setErrorfor(email, "Email cannot be blank");
    m2 = 0;
  } else if (!isEmail(emailValue)) {
    setErrorfor(email, "Email is not valid");
    m2 = 0;
  } else {
    setSuccessfor(email);
    m2 = 1;
  }

  if (passwordValue === "") {
    //show error
    //add error class
    setErrorfor(password, "password cannot be blank");
    m3 = 0;
  } else if (!isPassword(passwordValue)) {
    setErrorfor(password, "password is not valid");
    m3 = 0;
  } else {
    setSuccessfor(password);
    m3 = 1;
  }

  if (password2Value === "") {
    //show error
    //add error class
    setErrorfor(password2, "password cannot be blank");
    m4 = 0;
  } else if (passwordValue !== password2Value) {
    setErrorfor(password2, "passwords does not match");
    m4 = 0;
  } else {
    setSuccessfor(password2);
    m4 = 1;
  }
}

function setErrorfor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message inside small

  small.innerText = message;

  //add error class

  formControl.className = "form-control error";
}

function setSuccessfor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//To check a password between 6 to 8

function isPassword(password) {
  return /^\d{6,8}$/.test(password);
}

// username validation only character in javascript
function isUsername(username) {
  return /^[a-zA-Z\s]+$/.test(username);
}

function callAlert() {
  if ((m1 == 1) & (m2 == 1) & (m3 == 1) & (m4 == 1)) {
    Swal.fire({
      title: "Successful",
      text: "Account created",
      icon: "success",
      confirmButtonText: "OK",
      timer: 5000,
    });
  }
}

function myFunction1() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction2() {
  var y = document.getElementById("password2");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}
