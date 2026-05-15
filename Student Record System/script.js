let students = [];


// Add Student
function addStudent(){

    let name = document.getElementById('name').value;

    let roll = Number(document.getElementById("roll").value);

    let marks = Number(document.getElementById("marks").value);


    if(name === "" || roll === "" || marks === ""){

        alert("Please fill all the fields");

        return;
    }

    let grade;

    if(marks >= 90){

        grade = "A+";

    } 
    else if(marks >= 75){

        grade = "A";

    } 
    else if(marks >= 50){

        grade = "B";

    } 
    else {

        grade = "Fail";
    }


    let student = {

        name: name,

        roll: roll,

        marks: marks,

        grade: grade
    };


    students.push(student);

    displayStudents();

    clearInputs();
}



// Display Students
function displayStudents(){

    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";
    

    for(let i = 0; i < students.length; i++){

        studentList.innerHTML += `

        <div class="student-card">

            <p><strong>Name:</strong> ${students[i].name}</p>

            <p><strong>Roll:</strong> ${students[i].roll}</p>

            <p><strong>Marks:</strong> ${students[i].marks}</p>

            <p><strong>Grade:</strong> ${students[i].grade}</p>

            <button class="delete-btn" onclick="deleteStudent(${students[i].roll})">

                Delete

            </button>

        </div>
        `;
    }
}



// Delete Student
function deleteStudent(roll){

    for(let i = 0; i < students.length; i++){

        if(students[i].roll === roll){

            students.splice(i, 1);

            displayStudents();

            return;
        }
    }
}



// Clear Inputs
function clearInputs(){

    document.getElementById("name").value = "";

    document.getElementById("roll").value = "";

    document.getElementById("marks").value = "";
}