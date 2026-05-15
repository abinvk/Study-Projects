let students = [];

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

    } else if(marks >= 75){
        grade = "A";

    } else if(marks >= 50){
        grade = "B";

    } else {
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

    function displayStudents(){

        let studentList = document.getElementById("studentList");

        studentList.innerHTML = "";
        
    }
}