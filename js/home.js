let currentUser;

if (localStorage.getItem("currentUser") !== null) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
}

if (currentUser === null || currentUser === undefined ) {


    notAllowed();
}
else {
    displayWelcome(currentUser);
}


function displayWelcome(currentUser) {
    document.getElementById("content").innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container container1">
          <a class="navbar-brand text-white" href="#">SMART LOGIN</a>
          
          <button onclick="logout()" class="btn btn-outline-warning" type="submit">Logout</button>
        </div>
      </nav>



    <section class="container-fluid">
        <div class=" d-flex justify-content-center align-items-center  mt-5 ">
        <div class="login1 text-center p-5 ">
            <h1 class="text-center">Welcome ${currentUser}</h1>
            
        </div>
    </div>
    </section>`;
}
function notAllowed() {

    window.location.href = './index.html';
}

function logout() {
    localStorage.setItem("currentUser", JSON.stringify(null));
    window.location.href = './index.html';
}