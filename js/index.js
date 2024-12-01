/* var siteNameInput = document.getElementById("siteName"); 
var siteURLInput = document.getElementById("siteURL"); 

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var bookmarkList = []; 

if (localStorage.getItem("bookmarkContainer") !== null) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkContainer")); 
  displayData(); 
}



function addBookmark() {
  if (validateName() && validateURL()){
 
    var bookmark = {
      name: siteNameInput.value.trim(), 
      url: siteURLInput.value.trim(), 
    }

    bookmarkList.push(bookmark);
    
    localStorage.setItem("bookmarkContainer", JSON.stringify(bookmarkList));

    displayData(); 
    siteNameInput.classList.remove("is-valid");
    siteURLInput.classList.remove("is-valid");
    clearForm(); 
  }
  else{
      showMsg();
    
  }
  }


function displayData() {
  var bookmarkTable = "";
  for (var i = 0; i < bookmarkList.length; i++) {
    bookmarkTable += htmlContent(i); 
  }
  
  document.getElementById("content").innerHTML=bookmarkTable;
}

  function clearForm() {
    siteNameInput.value=null;
    siteURLInput.value=null;
  }

  function deleteBookmark(index) {
    bookmarkList.splice(index, 1); 
    localStorage.setItem("bookmarkContainer", JSON.stringify(bookmarkList));
    displayData(); 
  }
function htmlContent(i){
  return `<tr>
                        <th class="pt-3" scope="row">${i+1}</th>
                        <td class="pt-3" >${bookmarkList[i].name}</td>
                        <td><a class="btn subBtn  px-3 text-white rounded-2" target="_blank" href="https://${bookmarkList[i].url}"
                                role="button"><i class="fa-solid fa-eye"></i> Visit</a></td>
                        <td><button onclick="deleteBookmark(${i})" type="submit" class="btn delBtn   text-white rounded-2 "><i
                                    class="fa-solid fa-trash-can"></i> Delete</button></td>
                    </tr>`
}

function validateName(){
  var regex=/^(?:[a-zA-Z0-9]*[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]*)$/;
  var text= siteNameInput.value;
  var nameErr= document.getElementById("nameErr");

  if(regex.test(text)){
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    nameErr.classList.add("d-none");
    return true;
  }
  else{
    siteNameInput.classList.add("is-invalid");
    siteNameInput.classList.remove("is-valid");
    nameErr.classList.remove("d-none");
    return false;
  }
}

function validateURL(){
  var regex=/^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
  var text= siteURLInput.value;
  var urlErr= document.getElementById("urlErr");

  if(regex.test(text)){
    siteURLInput.classList.add("is-valid");
    siteURLInput.classList.remove("is-invalid");
    urlErr.classList.add("d-none");
    return true;
  }
  else{
    siteURLInput.classList.add("is-invalid");
    siteURLInput.classList.remove("is-valid");
    urlErr.classList.remove("d-none");
    return false;
  }
}

function showMsg() {
  modal.style.display = "block";
}
function closeMsg() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
 */
let usersList=[];
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password"); 
if (localStorage.getItem("usersContainer") !== null) {
  usersList = JSON.parse(localStorage.getItem("usersContainer")); 
}

function validateUser(){
  
  var userErr1= document.getElementById("userErr1");
  var userErr2= document.getElementById("userErr2");
  
      let flag=false;
      if(validateEmail() ){
        
        for(let i=0;i<usersList.length;i++){
          console.log("here")
          if(emailInput.value === usersList[i].email && passwordInput.value === usersList[i].password){
              console.log("enter");
              localStorage.setItem("currentUser", JSON.stringify(usersList[i].name));
              window.location.href= './home.html';
              userErr1.classList.add("d-none");
              userErr2.classList.add("d-none");
              flag=true;
          }
          
      }
      if(flag === false){
        userErr1.classList.remove("d-none");
        userErr2.classList.add("d-none");
      }
      
      }
      else{
        userErr1.classList.add("d-none");
        userErr2.classList.remove("d-none");

      }
      
      
}


function validateEmail(){
  var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var text= emailInput.value;
  var emailErr= document.getElementById("emailErr");
 
  if(regex.test(text) ){
      
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
      emailErr.classList.add("d-none");
      
      return true;
  }
  else{
    emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      emailErr.classList.remove("d-none");
      return false;
  }
}
