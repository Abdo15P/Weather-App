var nameInput = document.getElementById("name"); 
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password"); 

var usersList = []; 

if (localStorage.getItem("usersContainer") !== null) {
    usersList = JSON.parse(localStorage.getItem("usersContainer")); 
  }


function adduser() {
    var registerSuccess= document.getElementById("registerSuccess");
    if (validateName() && validateEmail() && validatePassword()){
   
      var user = {
        name: nameInput.value.trim(), 
        email: emailInput.value.trim(), 
        password: passwordInput.value,
      }
  
      usersList.push(user);
      
      localStorage.setItem("usersContainer", JSON.stringify(usersList));
      console.log(usersList);
      registerSuccess.classList.remove("d-none");
      window.location.href= './index.html';
      clearForm(); 
    }
    else{
        console.log("not added");
        registerSuccess.classList.add("d-none");
      
    }
    }

function clearForm() {
    nameInput.value=null;
    emailInput.value=null;
    passwordInput.value=null;
    }

    function validateName(){
        var regex=/^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/;
        var text= nameInput.value;
        var nameErr= document.getElementById("nameErr");
      
        if(regex.test(text)){
          nameInput.classList.add("is-valid");
          nameInput.classList.remove("is-invalid");
          nameErr.classList.add("d-none");
          return true;
        }
        else{
          nameInput.classList.add("is-invalid");
          nameInput.classList.remove("is-valid");
          nameErr.classList.remove("d-none");
          return false;
        }
      }

      function validateEmail(){
        var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var text= emailInput.value;
        var emailErr1= document.getElementById("emailErr1");
        var emailErr2= document.getElementById("emailErr2");
      

        let comparator=true;
        
            for(let i=0;i<usersList.length;i++){
                if(text === usersList[i].email){
                    comparator=false;
                }
                else{
                    comparator=true;
                }

            }
            console.log(comparator)
        if(regex.test(text) && comparator==true){
            
            emailInput.classList.add("is-valid");
            emailInput.classList.remove("is-invalid");
            emailErr1.classList.add("d-none");
            emailErr2.classList.add("d-none");
            return true;
        }
        else if(regex.test(text) && comparator==false){
            emailInput.classList.add("is-invalid");
            emailInput.classList.remove("is-valid");
            emailErr1.classList.add("d-none");
            emailErr2.classList.remove("d-none");
            return false;

        }
        else{
          emailInput.classList.add("is-invalid");
          emailInput.classList.remove("is-valid");
          emailErr1.classList.remove("d-none");
          emailErr2.classList.add("d-none");
          return false;
        }
      }


      function validatePassword(){
        var regex=/[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-]{8,}/;
        var text= passwordInput.value;
        var passwordErr= document.getElementById("passwordErr");
      
        if(regex.test(text)){
          passwordInput.classList.add("is-valid");
          passwordInput.classList.remove("is-invalid");
          passwordErr.classList.add("d-none");
          return true;
        }
        else{
          passwordInput.classList.add("is-invalid");
          passwordInput.classList.remove("is-valid");
          passwordErr.classList.remove("d-none");
          return false;
        }
      }