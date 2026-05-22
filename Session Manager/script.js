let status = document.getElementById("status");

function login(){
    let username = document.getElementById("username").value;

    sessionStorage.setItem("user", username);
    sessionStorage.setItem("time", new Date());
    status.textContent = "Welcome " + username;


    // Auto logout after 60 seconds

    setTimeout(() => {
        logout();
    }, 60000); // 60 seconds

}

function logout(){
    sessionStorage.clear();
    status.textContent = "You have been logged out.";
}

window.onload=()=>{

    let user = sessionStorage.getItem("user");

    if(user){
        status.textContent = "Welcome back " + user;    
    }
}