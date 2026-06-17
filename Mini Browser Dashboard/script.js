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

const addNotesBtn = document.getElementById("addNotesBtn");
const noteList = document.getElementById("noteList");

addNotesBtn.addEventListener("click", () => {
    if(noteInput.value.trim() !==  ""){
        const li = document.createElement("li");
        li.textContent = noteInput.value;

        noteList.appendChild(li);

        noteList.value = "";
        charCount.textContent = 0;
    }
});

// Search Filter