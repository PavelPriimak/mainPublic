
let images = [{
    url: "https://avatars.mds.yandex.net/i?id=87cf1c867c7f9f026ad9f9018cc13e4d_l-5282838-images-thumbs&n=13"
},{
    url: "https://avatars.mds.yandex.net/i?id=4b63096636444406a86607f55f746311_l-5231618-images-thumbs&n=13"
},{
    url: "https://get.wallhere.com/photo/Asian-kneeling-looking-at-viewer-1329055.jpg"
}];

function initSlider() {
    if (!images ||!images.length) return;

    let sliderImages = document.querySelector(".content__container_image");
    let sliderArrows = document.querySelector(".slider__arrows");


    initImages();
    initArrows();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index ===0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    
        function initArrows() {
            sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
                arrow.addEventListener("click", function() {
                  let curNumber = +sliderImages.querySelector(".active").dataset.index;
                  let nextNumber;
                  if (arrow.classlist.contains("left")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                  } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                  }
                  moveSlider(nextNumber);
            }); 
            });     
    }
    
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
    }
    }
}

document.addEventListener("DOMContentLoaded", initSlider);





