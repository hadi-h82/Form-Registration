var Confirm = document.getElementById("confirm");
var Email = document.getElementById("email");
var Female = document.getElementById("Female");
var Male = document.getElementById("Male");
var Password = document.getElementById("Password");
var Phone_number = document.getElementById("Phone");
var Prefer = document.getElementById("Prefer");
var fullName = document.getElementById("Name");
var gender = "";
var register = document.getElementById("register");
var userName = document.getElementById("username");

Female.addEventListener("click", check_radius1);
Male.addEventListener("click", check_radius2);
Prefer.addEventListener("click", check_radius3);
register.addEventListener("click", validation);

function check_radius1() {
  gender = "Female";
}
function check_radius2() {
  gender = "Male";
}
function check_radius3() {
  gender = "Prefer";
}

function validation() {
  if (fullName.value.length < 6) {
    alert("Error , fullname must be at least 6 characters!");
    return false;
  }
  if (userName.value.length < 4) {
    alert("Error , username must be at least 4 characters!");
    return false;
  }

  var test = Email.value;
  if (Email.value.length == 0 || ![...test].includes("@")) {
    alert("Error , Please enter the email!");
    return false;
  }

  var list = [...test];
  var x = 0;
  var second = [];
  var first = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] == "@") break;
    first[i] = list[i];
  }
  for (let i = list.indexOf("@") + 1; i < list.length; i++) {
    second[x] = list[i];
    x++;
  }

  if (first.length < 3) {
    alert("Error , Incorrect email !");
    return false;
  }

  array1 = ["gmail.com", "yahoo.com"];

  second = second.join("");
  second = second.toLocaleLowerCase();
  console.log(second);
  if (!array1.includes(second)) {
    alert("Email extension is incorrect");
    return false;
  }

  if (Password.value.length < 8) {
    alert("Error , password must be at least 8 characters!");
    return false;
  }

  if (Password.value != Confirm.value) {
    alert("Error , Password does not match!");
    // validation();
  }

  if (gender == "") {
    alert("Choose your gender !");
    Confirm.value = "";
    return false;
  }

  alert("Success registration");
}
