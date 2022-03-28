var person = {};

var Confirm = document.getElementById("confirm");
var Email = document.getElementById("email");
var Female = document.getElementById("Female");
var Male = document.getElementById("Male");
var Password = document.getElementById("Password");
var Phone_number = document.getElementById("Phone");
var Prefer = document.getElementById("Prefer");
var fullName1 = document.getElementById("Name");
var gender = "";
var register = document.getElementById("register");
var userName1 = document.getElementById("username");

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
  person.Confirm = Confirm.value;
  person.Email = Email.value;
  person.Female = Female.value;
  person.Male = Male.value;
  person.Password = Password.value;
  person.Phone_number = Phone_number.value;
  person.Prefer = Prefer.value;
  person.gender = gender.value;
  person.register = register.value;
  person.userName1 = userName1.value;
  person.fullName1 = fullName1.value;

  if (fullName1.value.length < 6) {
    alert("Error , fullname must be at least 6 characters!");
    return false;
  }
  if (userName1.value.length < 4) {
    console.log(fullName1.value);
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
    return false;
    // validation();
  }

  if (gender == "") {
    alert("Choose your gender !");
    Confirm.value = "";
    return false;
  }
  alert("Success registration");
  const json1 = JSON.stringify(person);
  console.log(json1);
  alert(JSON.stringify(person));
}
