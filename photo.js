const loadBtn = document.querySelector(".load__btn");
const cleanBtn = document.querySelector(".clean__btn");
const images = document.querySelector("#Photo-Gallary__items");

async function loadPictures() {
    document.querySelector(".preloader").classList.add("activated");
    try {
        const res = await fetch ("https://dog.ceo/api/breeds/image/random/20");
    if (!res.ok)  {
        throw new Error("Что-то пошло не так!");  
    }    
    const data = await res.json();
    if(data) {
        const posts = data.message;
        posts.forEach((item) => {
          const img = document.createElement("div");
          img.classList.add("post");
          img.innerHTML = `<img src="${item}" alt = "picture">`;
          images.appendChild(img);  
        });
        document.querySelector(".preloader").classList.remove("activated");
    }  
}   catch(e) {
    console.error(e.message);
}   finally {
    console.log("Pictures are loaded");
}
};

loadBtn.addEventListener("click", () => {
    loadPictures ();
    console.log ("Done");
});

cleanBtn.addEventListener("click", () => {
    images.innerHTML = "";
    console.log("pictures are succesfully deleted");
});