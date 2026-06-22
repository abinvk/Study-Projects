const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("cofirmPassword");
const submitBtn = document.getElementById("subimtBtn");
const charCount = document.getElementById("charCount");

// Uppercase Input

nameInput.addEventListener("input",()=>{
    nameInput.value = 
    nameInput.value.toUpperCase();
});

// Character Counter

passwordInput.addEventListener("input",()=>{
    charCount.textContent =
    passwordInput.value.length +
    "Characters";
});

// focus Event

document.querySelectorAll("input")
.forEach(input=>{
    input.addEventListener("focus",()=>{
        input.style.border = 
        "2px solid #00c896"
    });
});

// Blur Event

document.querySelectorAll("input")
.forEach(input=>{
    input.addEventListener("blur",()=>{
        input.style.border = "none";
    });
});

// Password Toggle

document.getElementById("togglePassword")
.addEventListener("click",()=>{
    if(passwordInput.type==="password"){
        passwordInput.type="text";
    }else{
        passwordInput.type="password";
    }
});

// Validation

function validation(){
    let valid = true;

    if(nameInput.value.length < 3){
        document.getElementById("nameError")
        .textContent = "Minimum 3 characters";

        valid = false;

    }else{
        document.getElementById("nameError")
        .textContent = "";
    }
    if(!emailInput.value.includes("@")){
        document.getElementById("emailError")
        .textContent = "Invalid Email"

        valid =  false;

    }else{
        document.getElementById("emailError")
        .textContent = "";
    }

    if(passwordInput.value.length < 6){
        document.getElementById("passwordError")
        .textContent = "Minmum 6 characters";

        valid = false;

    }else{
        document.getElementById("passwordError")
        .textContent = "";
    }

    if(passwordInput.value !== confirmPassword.value){
        document.getElementById("confirmError")
        .textContent = "Password do not match";

        valid = false;

    }else{
        document.getElementById("confirmError")
        .textContent = "";
    }
    submitBtn.disabled = !valid;
}

document.querySelectorAll("input")
.forEach(input=>{
    input.addEventListener("input",validateForm);
});

// Submit Event

document.getElementById("registerFrom")
.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Registration Successful");
})
