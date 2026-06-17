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

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () =>{
    const filter = searchInput.value.toLowerCase();
    const notes = document.querySelectorAll("#noteList li");
    notes.forEach(note => {
        if(note.textContent.toLowerCase().includes(filter)){
            note.style.display = "block";
        }else{
            note.style.display = "none";
        }
    });
});

// Digital Clock

function updateClock(){
    const now = new Date();

    document.getElementById("clock").textContent=
    now.toDateString();
}
setInterval(updateClock,1000);
updateClock();

// Stopwatch