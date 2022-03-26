var fullName = document.getElementById('Name');
var userName = document.getElementById("username") ;
var Email = document.getElementById("email")  ;
var Password = document.getElementById("Password") ;
var Confirm = document.getElementById("confirm") ;
var Phone_number = document.getElementById("Phone") ;

var register = document.getElementById("register");

register.addEventListener("click", validation);

function validation() {
  if (fullName.value.length < 6) {
    alert("Error , fullname must be at least 6 characters!");
    return false;
  }
  if (userName.value.length < 4) {
    alert("Error , username must be at least 4 characters!");
    return false
  }
  if (Email.value.length == 0) {
    alert("Error , Please enter the email!");
    return false
  }
  if (Password.value.length < 8) {
    alert("Error , password must be at least 8 characters!");
    return false
  }
  if (Password.value != Confirm.value) {
    alert("Error , Password does not match!");
    return false
  }
  alert("Success registration");
}
