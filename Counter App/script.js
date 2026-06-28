const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const statusText = document.getElementById("status");

let number = 0;

function updateUI() {
    count.textContent = number;

    if (number > 0) {
        statusText.textContent = "Positive 😊";
        count.style.color = "#00ff99";
    } else if (number < 0) {
        statusText.textContent = "Negative 😔";
        count.style.color = "#ff1744";
    } else {
        statusText.textContent = "Zero 😎";
        count.style.color = "#ffffff";
    }
}

increase.addEventListener("click", () => {
    number++;
    updateUI();
});

decrease.addEventListener("click", () => {
    number--;
    updateUI();
});

reset.addEventListener("click", () => {
    number = 0;
    updateUI();
});


updateUI();