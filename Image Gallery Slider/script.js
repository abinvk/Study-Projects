const preview = document.getElementById("preview");
const thumbnails = document.querySelectorAll(".thumb");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("preBtn");

let currentIndex = 0;

const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400"
];

function showImage(index) {
    preview.src = images[index];

    thumbnails.forEach((thumb)=>{
        thumb.classList.remove("active");
    });
    thumbnails[index].classList.add("active");
}

nextBtn.addEventListener("click", () =>{
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage(currentIndex);
});

prevBtn.addEventListener("click", () =>{
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

thumbnails.forEach((thumb, index) =>{
    thumb.addEventListener("click", () =>{
        currentIndex = index;
        showImage(currentIndex);
    });
});
