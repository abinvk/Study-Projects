let students = [];

function addStudent(){

    let name = document.getElementById('name').value;

    let roll = Number(document.getElementById("roll").value);

    let marks = Number(document.getElementById("marks").value);

    if(name === "" || roll === "" || marks === ""){

        alert("Please fill all the fields");

        return;

    }

    

}