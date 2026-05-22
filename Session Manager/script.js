let status = document.getElementById("status");

function login(){
    let username = document.getElementById("username").value;

    sessionStorage.setItem("user", username);
    sessionStorage.setItem("time", new Date());
    status.textContent = "Welcome" + username;
}
