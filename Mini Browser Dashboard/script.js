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

let seconds = 0;
let timer;

const stopwatch = document.getElementById("stopwatch");
document.getElementById("startBtn").addEventListener("click",() => {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;

        let hrs = Math.floor(seconds/3600);
        let mins = Math.floor((seconds%3600)/60);
        let secs = seconds%60;

        stopwatch.textContent =
        `${hrs}:${mins}:${secs}`;
        
    },1000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(timer);
    seconds = 0;
    stopwatch.textContent = "00:00:00";
});

// Countdown Timer

document.getElementById("countStart").addEventListener("click", () => {
    let count =
    Number(document.getElementById("countInput").value);
    const display =
    document.getElementById("countDisplay");
    const countdown = setInterval(() => {
        display.textContent = count;
        count--;
        if(count < 0){
            clearInterval(countdown);
            display.textContent = "Time Up";
        }
    },1000);
});

// Password Toggle

const password =
document.getElementById("password");
document.getElementById("togglePassword")
.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
});

// Mouse Enter / Leave

const hoverBox =
document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background = "lightgreen";
});
hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "white";
})

// Key Events