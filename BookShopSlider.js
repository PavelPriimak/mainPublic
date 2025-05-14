let images = [{
    url: "images/baner.png"
},{
    url: "images/baner2.png"
},{
    url: "images/baner3.png"
}];

document.addEventListener("DOMContentLoaded", initSlider);

function initSlider() {
    if (!images ||!images.length) return;

    let sliderImages = document.querySelector(".main__image");
    let sliderDots = document.querySelector(".main__image_dots");


    initImages();
    initDots();


    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index ===0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class ="main__image_dots-item n${index} ${index=== 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".main__image_dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
    }
}    