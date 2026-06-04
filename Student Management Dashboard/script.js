let attendance = 0;

function addStudent(){

    const input =
    document.getElementById("studentName");

    const name = input.value;

    if(name === ""){
        alert("Enter Student Name");
        return;
    }

    const studentCard =
    document.createElement("div");

    studentCard.classList.add("student-card");

    studentCard.innerHTML = `
    <img src="https://i.pravatar.cc/150">

    <h2>${name}</h2>

    <p class="details">
    MERN Stack Student
    </p>

    <button onclick="editStudent(this)">
    Edit
    </button>

    <button onclick="deleteStudent(this)">
    Delete
    </button>

    <button onclick="duplicateCard(this)">
    Duplicate
    </button>

    <button onclick="toggleDetails(this)">
    Hide/Show
    </button>

    <button onclick="highlightStudent(this)">
    Highlight
    </button>

    <button onclick="changeImage(this)">
    Change Image
    </button>

    <button onclick="changeBg(this)">
    Change BG
    </button>

    <button onclick="changeTextColor(this)">
    Text Color
    </button>

    <button onclick="changeFont(this)">
    Font Size
    </button>
    `;

    document
    .getElementById("studentList")
    .appendChild(studentCard);

    input.value = "";
}

function deleteStudent(btn){
    btn.parentElement.remove();
}

function duplicateCard(btn){

    const clone =
    btn.parentElement.cloneNode(true);

    document
    .getElementById("studentList")
    .appendChild(clone);
}

function toggleDetails(btn){

    const details =
    btn.parentElement
    .querySelector(".details");

    if(details.style.display==="none"){
        details.style.display="block";
    }else{
        details.style.display="none";
    }
}

function highlightStudent(btn){
    btn.parentElement
    .classList.toggle("highlight");
}

function editStudent(btn){

    const heading =
    btn.parentElement
    .querySelector("h2");

    const newName =
    prompt(
        "Enter New Name",
        heading.innerText
    );

    if(newName){
        heading.innerText = newName;
    }
}

function changeImage(btn){

    const image =
    btn.parentElement
    .querySelector("img");

    image.src =
    "https://picsum.photos/200";
}

function changeBg(btn){

    btn.parentElement
    .style.background =
    "#d4f4ff";
}

function changeTextColor(btn){

    btn.parentElement
    .style.color =
    "red";
}

function changeFont(btn){

    btn.parentElement
    .style.fontSize =
    "22px";
}

function increaseAttendance(){

    attendance++;

    document
    .getElementById("count")
    .innerText =
    attendance;
}

function searchStudent(){

    const value =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const cards =
    document
    .querySelectorAll(".student-card");

    cards.forEach(card=>{

        const name =
        card.querySelector("h2")
        .innerText
        .toLowerCase();

        if(name.includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
}

function changeTitle(){

    document.title =
    "Student Management System";

    document
    .getElementById("mainHeading")
    .innerText =
    "📚 Student Management System";
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}