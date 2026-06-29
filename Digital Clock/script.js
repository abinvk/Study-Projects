const hours = document.getAnimations("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const date = document.getElementById("date");

function updateClock(){
    const now = new Date();

    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hr = String(hr).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

    date.textContent = now.toDateString()
}
updateClock();
setInterval(updateClock,1000);