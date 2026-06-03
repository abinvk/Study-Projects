const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

addBtn.addEventListener("click", () => {
    const text = noteInput.value;
    if (text === ""){
        return;
    }

    // Create Note Div

    const note = document.createElement("div");
    note.classList.add("note");

    // Paragraph

    const para = document.createElement("p");
    para.textContent = text;

    // Edit Button

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    // Delete Button

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Important Button

    const importantBtn = document.createElement("button");
    importantBtn.textContent = "Important";

    // Clone Button

    const cloneBtn = document.createElement("button");
    cloneBtn.textContent = "Clone";

    // Add Elements
    note.appendChild(para);
    note.appendChild(editBtn);
    note.appendChild(deleteBtn);
    note.appendChild(importantBtn);
    note.appendChild(cloneBtn);
    
    // Latest Note Top-il

    notesContainer.prepend(note);
    noteInput.value = "";

    // Delete

    deleteBtn.addEventListener("click", () => {
        note.remove();
    })

    //Important
})