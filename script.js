var confirm1 = document.getElementById("confirm");
var email = document.getElementById("email");
var female = document.getElementById("Female");
var male = document.getElementById("Male");
var password = document.getElementById("Password");
var phoneNumber = document.getElementById("Phone");
var prefer = document.getElementById("Prefer");
var fullName1 = document.getElementById("Name");
var gender = "";
var register = document.getElementById("register");
var userName1 = document.getElementById("username");

female.addEventListener("click", checkRadius1);
male.addEventListener("click", checkRadius2);
prefer.addEventListener("click", checkRadius3);
register.addEventListener("click", changeValue);
fullName1.addEventListener("click", validation);
userName1.addEventListener("click", validation);
email.addEventListener("click", validation);
password.addEventListener("click", validation);
confirm1.addEventListener("click", validation);


function changeBG(el) {
  var delayInMilliseconds = 500;
  var elem = document.getElementById(el);
  setTimeout(function () {
    // elem.style.color = color1;
    elem.style.opacity = 1;
    elem.style.transition = " opacity 1s ";
  }, delayInMilliseconds);
  elem.style.opacity = 0;
}


function changeValue() {
  register.value = "run";
  validation();
}

function checkRadius1() {
  gender = "Female";
  document.getElementById("errorgender").innerHTML = "-";
  empty();
  validation();
}

function checkRadius2() {
  gender = "Male";
  document.getElementById("errorgender").innerHTML = "-";
  empty();
  validation();
}

function checkRadius3() {
  gender = "Prefer";
  empty();
  validation();
}

function empty() {
  document.getElementById("errorgender").innerHTML = "-";
}

function showError(value) {
  document.getElementById(value).innerHTML =
    "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
    "incorrect value";
    changeBG(value);
}

function showVlid(value) {
  document.getElementById(value).innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
}

function validation() {
  var person = {
    confirm: confirm1.value,
    email: email.value,
    password: password.value,
    phoneNumber: phoneNumber.value,
    gender: gender,
    userName1: userName1.value,
    fullName1: fullName1.value,
  };

  if (fullName1.value.length < 6) {
    fullName1.value = "";
    showError("error1");
    return false;
  }
  showVlid("error1");
  if (userName1.value.length < 4) {
    showError("error2");
    userName1.value = "";
    return false;
  }
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  showVlid("error2");
  if (!email.value.match(validRegex)) {
    showError("error3");
    email.value = "";
    return false;
  }
  showVlid("error3");
  if (password.value.length < 8) {
    showError("error4");
    password.value = "";
    return false;
  }
  showVlid("error4");
  if (password.value !== confirm1.value) {
    showError("error5");
    confirm1.value = "";
    return false;
  }
  showVlid("error5");
  if (gender == "") {
    showError("errorgender");
    return false;
  }
  if (register.value == "run") {
    alert("Success registration");
    const json1 = JSON.stringify(person);
    alert(json1);
  }
}

// const fs = require("fs");
// fs.writeFile("json.json", json1, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("JSON data is saved.");
// });
