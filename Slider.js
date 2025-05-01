

let images = [{
    url: "https://avatars.mds.yandex.net/i?id=87cf1c867c7f9f026ad9f9018cc13e4d_l-5282838-images-thumbs&n=13"
},{
    url: "https://avatars.mds.yandex.net/i?id=4b63096636444406a86607f55f746311_l-5231618-images-thumbs&n=13"
},{
    url: "https://get.wallhere.com/photo/Asian-kneeling-looking-at-viewer-1329055.jpg"
}];

const firstItem = document.querySelector(".description:nth-child(1)");
const secondItem = document.querySelector(".description:nth-child(2)");
const thirdItem = document.querySelector("description:nth-child(3)");
let descriptionList = new Array[firstItem, secondItem, thirdItem];

function initSlider() {
    if (!images ||!images.length) return;

    let sliderImages = document.querySelector(".content__container_image");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderDescription = document.querySelector(".content__container_text");
    

    initImages();
    initArrows();
    initDots();
    initDescription();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index ===0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }
    function initDescription () {
        sliderDescription += descriptionList[index+1];
    }
    function initArrows() {
            sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
                arrow.addEventListener("click", function() {
                  let curNumber = +sliderImages.querySelector(".active").dataset.index;
                  let nextNumber;
                  let curNum = +sliderDescription.querySelector(".active");
                  let nextNum;
                  if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                    nextNum = curNum ===0? descriptionList[2] : curNum -1;
                  } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                    nextNum = curNum === descriptionList[2]? 0 : curNum +1;
                  }
                  moveSlider(nextNumber);
                });  
            });    
    }
    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class ="slider__dots-item ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    }
    
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDescription.querySelector(".active").classList.remove("active");
        sliderDescription.querySelector(".description" + num).classList.add("active");
    }
    }

document.addEventListener("DOMContentLoaded", initSlider);





