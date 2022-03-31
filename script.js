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
fullName1.addEventListener("click", beforValidation);
userName1.addEventListener("click", beforValidation);
email.addEventListener("click", beforValidation);
password.addEventListener("click", beforValidation);
confirm1.addEventListener("click", beforValidation);


function beforValidation() {
  register.value = "";
  validation();
}

function changeBG(el, el2 = "") {
  var delayInMilliseconds = 500;
  var elem = document.getElementById(el);
  if (el2 != "") var elem2 = document.getElementById(el2);
  setTimeout(function () {
    
    elem.style.opacity = 1;
    if (el2 != "") elem2.style.borderColor = "#dd0b0b";
    elem.style.transition = " all 1s";
    if (el2 != "") elem2.style.transition = " all 1s ";
  }, delayInMilliseconds);
  elem.style.opacity = 0;
  if(el2 != "") 
    elem2.style.borderColor = "#ccc";
}

function changeValue() {
  register.value = "run";
  validation();
}

function checkRadius1() {
  gender = "Female";
  document.getElementById("errorgender").innerHTML = "-";
  empty();
}

function checkRadius2() {
  gender = "Male";
  document.getElementById("errorgender").innerHTML = "-";
  empty();
}

function checkRadius3() {
  gender = "Prefer";
  empty();
}

function empty() {
  document.getElementById("errorgender").innerHTML = "-";
}

function showError(value1, value2) {
  document.getElementById(value1).innerHTML =
    "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
    "incorrect value";
  changeBG(value1, value2);
}

function showVlid(value1, value2) {
  document.getElementById(value1).innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
  var elem2 = document.getElementById(value2);
  elem2.style.borderColor = "#ccc";
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
    showError("error1", "Name");
    return false;
  }
  showVlid("error1", "Name");
  if (userName1.value.length < 4) {
    showError("error2", "username");
    userName1.value = "";
    return false;
  }
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  showVlid("error2", "username");
  if (!email.value.match(validRegex)) {
    showError("error3", "email");
    email.value = "";
    return false;
  }
  showVlid("error3", "email");
  if (password.value.length < 8) {
    showError("error4", "Password");
    password.value = "";
    return false;
  }
  showVlid("error4", "Password");
  if (password.value !== confirm1.value) {
    showError("error5", "confirm");
    confirm1.value = "";
    return false;
  }
  showVlid("error5", "confirm");
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
