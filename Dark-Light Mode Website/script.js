let themeBtn = document.getElementById("themeBtn");
let increaseBtn = document.getElementById("increaseBtn");
let decreasebtn = document.getElementById("decreasebtn");
let text = document.getElementById("text");

let fontSize = 20;

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if (document.body.classList.condains("dark")){
        document.title = "Dark Mode";
        themeBtn.innerText = "Light Mode";

        localStorage.setItem("theme", "dark");


    } else {
        document.title = "Light";
        themeBtn.innerText = "Dark Mode";

        localStorage.setItem("theme", "light");
    }
});

increaseBtn.addEventListener("click", function(){
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
});

decreasebtn.addEventListener("click", function(){
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";

})