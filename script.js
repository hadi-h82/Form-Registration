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
register.addEventListener("click", validation);

function checkRadius1() {
  gender = "Female";
  document.getElementById("errorgender").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
}

function checkRadius2() {
  gender = "Male";
  document.getElementById("errorgender").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
}

function checkRadius3() {
  gender = "Prefer";
  document.getElementById("errorgender").innerHTML =
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
    document.getElementById("error1").innerHTML =
      "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
      "incorrect value";
    return false;
  }
  document.getElementById("error1").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
  if (userName1.value.length < 4) {
    document.getElementById("error2").innerHTML =
      "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
      "incorrect value";
    userName1.value = "";
    return false;
  }
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  document.getElementById("error2").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
  if (!email.value.match(validRegex)) {
    document.getElementById("error3").innerHTML =
      "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
      "incorrect value";
    email.value = "";
    return false;
  }
  document.getElementById("error3").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
  if (password.value.length < 8) {
    document.getElementById("error4").innerHTML =
      "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
      "incorrect value";
    password.value = "";
    return false;
  }
  document.getElementById("error4").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
  if (password.value !== confirm1.value) {
    document.getElementById("error5").innerHTML =
      "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
      "incorrect value";
    confirm1.value = "";
    return false;
  }
  document.getElementById("error5").innerHTML =
    "<span><svg class='svg2'><use xlink:href='#ok'></use></svg></span>";
  if (gender == "") {
    document.getElementById("errorgender").innerHTML =
      "<span><svg class='svg1'><use xlink:href='#Capa_1'></use></svg></span>" +
      "incorrect value";
    return false;
  }
  
  alert("Success registration");
  const json1 = JSON.stringify(person);
  alert(json1);
}

// const fs = require("fs");
// fs.writeFile("json.json", json1, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("JSON data is saved.");
// });
