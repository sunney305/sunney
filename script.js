const campSlides = document.querySelectorAll(".image-slider .slide");
const nextBtn = document.querySelector(".image-slider .next");
const prevBtn = document.querySelector(".image-slider .prev");

let campIndex = 0;

if (campSlides.length > 0 && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        campSlides[campIndex].classList.remove("active");
        campIndex = (campIndex + 1) % campSlides.length;
        campSlides[campIndex].classList.add("active");
    });

    prevBtn.addEventListener("click", () => {
        campSlides[campIndex].classList.remove("active");
        campIndex = (campIndex - 1 + campSlides.length) % campSlides.length;
        campSlides[campIndex].classList.add("active");
    });
}

// ===== 攝影自動輪播 photo1 ~ photo39 =====
const photoSlider = document.getElementById("photoSlider");
const photoDots = document.getElementById("photoDots");

let photoSlides = [];
let dots = [];
let photoIndex = 0;
let autoPlay;

if (photoSlider && photoDots) {
    for (let i = 1; i <= 39; i++) {
        const slide = document.createElement("div");
        slide.classList.add("photo-slide");
        if (i === 1) slide.classList.add("active");

        const img = document.createElement("img");
        // 【修正點】：把原本的 images/ 刪掉，因為你的照片直接放 GitHub 最外層
        img.src = `photo${i}.jpg`; 
        img.alt = `攝影作品${i}`;

        slide.appendChild(img);
        photoSlider.appendChild(slide);
        photoSlides.push(slide);

        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 1) dot.classList.add("active");

        dot.addEventListener("click", () => {
            photoIndex = i - 1;
            showPhoto(photoIndex);
        });

        photoDots.appendChild(dot);
        dots.push(dot);
    }

    function showPhoto(index) {
        photoSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextPhoto() {
        photoIndex = (photoIndex + 1) % photoSlides.length;
        showPhoto(photoIndex);
    }

    autoPlay = setInterval(nextPhoto, 2500);

    photoSlider.addEventListener("mouseenter", () => {
        clearInterval(autoPlay);
    });

    photoSlider.addEventListener("mouseleave", () => {
        autoPlay = setInterval(nextPhoto, 2500);
    });
}
