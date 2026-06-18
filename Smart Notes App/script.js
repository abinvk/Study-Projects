const form = document.getElementById("noteForm");
const title = document.getElementById("noteTitle");
const text = document.getElementById("noteText");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");
const charCount = document.getElementById("charCount");
const livePreview = document.getElementById("livePreview");
const themeBtn = document.getElementById("themeBtn");

let clickCounter = 0;

// Character Counter

text.addEventListener("input", () =>{
    charCount.textContent =
    text.value.length + "Characters";
    livePreview.textContent =
    text.value;
});

// Focus Event

text.addEventListener("focus", () => {
    text.style.border = "2px solid green";
});

// Blur Event

text.addEventListener("blur", () =>{
    text.style.border = "none";
});

// Add Note

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    clickCounter++;

    document.getElementById("clickCount")
    .textContent =
    "Add Clicks: " + clickCounter;

    const note = document.createElement("div");
    note.classList.add("note")

    const date =
    new Date().toLocaleDateString();
    note.innerHTML = `
    <h3>${title.value}</h3>
    <p>${text.value}</p>
    <small>${date}</small>

    <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>
    `;

    notesContainer.prepend(note);

    title.value = "";
    text.value = "";
    livePreview.textContent =
        "Live Preview...";
    charCount.textContent =
        "0 Characters";
});

// Delete Note

notesContainer.addEventListener("click",(e)=>{
    if(e.target.classList.containes("delete")){
        e.target.closest(".note").remove();
    }
});

// Edit Note

notesContainer.addEventListener("click",(e)=>{
    if(e.target.classList.containes("edit")){

        const note =
        e.target.closest(".note");

        const noteTitle =
        note.querySelector("h3").textContent;

        const noteText =
        note.querySelector("p").textContent;

        title.value = noteTitle;
        text.value = noteText;

        note.remove();
    }
});

// Search Filter

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    const notes =
    document.querySelectorAll(".note");

    notes.forEach(note=>{
        note.style.display =
        note.textContent
        .toLowerCase()
        .includes(value)
        ? "block"
        : "none";

    });
});

// Dark Mode

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});