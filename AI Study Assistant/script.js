let notes=document.getElementById(
"notes"
);

notes.value=
localStorage.getItem(
"notes"
)||"";

function saveNotes(){

localStorage.setItem(
"notes",
notes.value
);

alert(
"Notes Saved"
);

}


const questions=[

"What is HTML?",

"What is CSS?",

"What is JavaScript?",

"What is a function?",

"What is a variable?"

];

function generateQuiz(){

let random=Math.floor(
Math.random()*questions.length
);

document.getElementById(
"quizQuestion"
).innerText=
questions[random];

}



let time=1500;

function startTimer(){

let timer=
setInterval(()=>{

let min=
Math.floor(time/60);

let sec=
time%60;

document.getElementById(
"timer"
).innerText=

`${min}:${sec<10?
"0"+sec
:
sec}`;

time--;

if(time<0){

clearInterval(timer);

alert("Time Up");
}

},1000)

}



document.getElementById("progress")

.addEventListener("input",

function(){

document.getElementById("progressText").innerText=this.value+"%";

}

);

function sendMessage(){

let msg=document.getElementById("message");

let messages=document.getElementById("messages");

messages.innerHTML+=

`<p>You:
${msg.value}</p>`;

let reply=
"Keep learning 🚀";

if(msg.value.includes("html")
)

reply="HTML creates structure";

if(msg.value.includes("css")
)

reply="CSS designs webpage";

if(
msg.value.includes("js")
)

reply=
"JavaScript adds functionality";


messages.innerHTML+=

`<p>AI:
${reply}</p>`;


msg.value="";

}