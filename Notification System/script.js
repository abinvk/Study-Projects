function showNotification(message,type){

let notification=document.createElement("div");

notification.classList.add(
"notification",
type
);

notification.innerHTML=`
<span>${message}</span>
<span class="close">&times;</span>
`;

document
.getElementById("notification")
.appendChild(notification);

notification
.querySelector(".close")
.addEventListener("click",()=>{

notification.remove();

});

setTimeout(()=>{

notification.remove();

},3000);

}