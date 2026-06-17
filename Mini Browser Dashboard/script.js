const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click",() =>{
    document.body.classList.toggle("dark");
});

// Character Counter

const noteInput = document.getElementById("noteInput");
const charCount = document.getElementById("charCount");

noteInput.addEventListener("input", () => {
    charCount.textContent = noteInput.value.length;
});

// Add Note

