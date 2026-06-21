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

// Add Task

addTaskBtn.addEventListener("click",()=>{
    const taskText = taskInput.value.trime();

    if(taskText==="") return;

    const task = 
    document.createElement("div");

    task.classList.add("task");

    task.setAttribute("draggable",true);

    const date =
    new Date()
    .toLocaleDateString();

    task.innerHTML = `
  <div class="task-info">
    <h3>${taskText}</h3>
    <small>
    ${date}
    </small>

  </div>
  
  <div class="actions">
  <button class="complete">
  ✓
  </button>
  
  <button class="delete">
  ✕
  </button>
  </div>
  `;

  taskContainer.prepend(task);
  taskInput ="";
  liveText.textContent =
  "Task Previwe...";
  addTaskBtn.disabled = true
});

// Complete & Delete

taskContainer.addEventListener(
  "click",
  (e)=>{
    if(e.target.classList.contains("complete")){

      e.target
      .closest(".task")
      .classList.toggle("completed");
    }
    if(e.target.classList.contains("delete")){
      e.target
      .closest(".task")
      .remove();
    }
  });
