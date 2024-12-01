
let usersList = [];
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
if (localStorage.getItem("usersContainer") !== null) {
  usersList = JSON.parse(localStorage.getItem("usersContainer"));
}

function validateUser() {

  var userErr1 = document.getElementById("userErr1");
  var userErr2 = document.getElementById("userErr2");

  let flag = false;
  if (validateEmail()) {

    for (let i = 0; i < usersList.length; i++) {
      console.log("here")
      if (emailInput.value === usersList[i].email && passwordInput.value === usersList[i].password) {
        console.log("enter");
        localStorage.setItem("currentUser", JSON.stringify(usersList[i].name));
        window.location.href = './home.html';
        userErr1.classList.add("d-none");
        userErr2.classList.add("d-none");
        flag = true;
      }

    }
    if (flag === false) {
      userErr1.classList.remove("d-none");
      userErr2.classList.add("d-none");
    }

  }
  else {
    userErr1.classList.add("d-none");
    userErr2.classList.remove("d-none");

  }


}


function validateEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var text = emailInput.value;
  var emailErr = document.getElementById("emailErr");

  if (regex.test(text)) {

    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    emailErr.classList.add("d-none");

    return true;
  }
  else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    emailErr.classList.remove("d-none");
    return false;
  }
}
