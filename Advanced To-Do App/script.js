const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");
const searchInput = document.getElementById("searchInput");
const liveText = document.getElementById("liveText");
const themBtn = document.getElementById("themeBtn");

// // Input Value Display

taskInput.addEventListener("input",()=>{
    liveText.textContent = taskInput.value;
});

// Disable / Enable Button

taskInput.addEventListener("input",()=>{
    addTaskBtn.disabled = taskInput.value.trim()==="";
});

addTaskBtn.disabled = true;