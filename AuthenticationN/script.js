let form = document.querySelector("loginForm");
let message = document.querySelector("message");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "admin123"){

        message.textContent = "Login successful!";
    }else{
        message.textContent = "Invalid email or password.";
    }   
});