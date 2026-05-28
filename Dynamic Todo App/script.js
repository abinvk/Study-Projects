// Input Box

let taskInput = document.getElementById("taskInput");

// Add Button

let addBtn = document.getElementById("addBtn");

// Task List

let taskList = document.getElementById("taskList");

// Task Count

let count = document.getElementById("count");

// Total Task Variable

let totalTasks = 0;

// Add Button Click

addBtn.addEventListener("click", addTask);

// Main Function

function addTask() {

    // Input Value Read

    let taskText = taskInput.value;

    // Empty Check

    if(taskText === ""){

        alert("Enter a task");

        return;

    }

    // Create li

    let li = document.createElement("li");

    // Create paragraph

    let p = document.createElement("p");

    // Add text

    p.textContent = taskText;

    // Complete Button

    let completeBtn = document.createElement("button");

    completeBtn.textContent = "Complete";

    // Delete Button

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    // Complete Button Click

    completeBtn.addEventListener("click", function(){

        li.classList.toggle("completed");

    });

    // Delete Button Click

    deleteBtn.addEventListener("click", function(){

        li.remove();

        totalTasks--;

        count.textContent = totalTasks;

    });

    // Append Elements

    li.appendChild(p);

    li.appendChild(completeBtn);

    li.appendChild(deleteBtn);

    // Add li to ul

    taskList.appendChild(li);

    // Clear Input

    taskInput.value = "";

    // Count Increase

    totalTasks++;

    count.textContent = totalTasks;

}
