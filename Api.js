import "./BookShop.css";

import {addBookToBag} from "./chooseBookEvent";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = "AIzaSyBurVcYBIuQUZrTRSIvg1H6bDskfWK2R4c";

const booksContainer = document.querySelector(".main__container");
const btnLoader = document.querySelector(".main__button_loader");
const searchValue = document.querySelectorAll(".main__categories_list-item");

let selectedCategory = ""; 


searchValue.forEach(item => {
  item.addEventListener("click", function () {
    searchValue.forEach(el => el.classList.remove("active"));
    this.classList.add("active");
    selectedCategory = this.textContent.trim().toLowerCase();
  });
});

btnLoader.addEventListener("click", async function (e) {
  e.preventDefault();

  if (!selectedCategory) {
    alert("Пожалуйста, выберите категорию!");
    return;
  }

  const url = `${apiUrl}?q=subject:${selectedCategory}&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      console.log(data.items);
    } else {
      console.log("Книги не найдены");
    }
  } catch (error) {
    console.error("Произошла ошибка при загрузке книг", error);
  }

  const dataArray = Array.from(data.items);
  dataArray.forEach(book => { 
    const bookTemplate = `
    <div class="main__container_bookItem">
         <img class="bookImage" src="${dataArray.volumeInfo.imageLinks.smallThumbnail.value}">
         <div class="main__container_bookItem_content>
             <div class="main__container_bookItem_content_author-name">${dataArray.volumeInfo.authors[1].value}</div>
             <div class="main__container_bookItem_content_book-name">${dataArray.volumeInfo.title.value}</div>
             <div class="main__container_bookItem_content_rating">RATING</div>
             <div class="main__container_bookItem_content_description">""</div>
             <div class="main__container_bookItem_content_price">${dataArray.saleInfo.saleability.value}</div>
             <button class="main__container_bookItem_content_button">buy now</button>
         </div>
    </div>`});
  booksContainer.querySelector(".main__container_bookItem").innerHTML += bookTemplate;
  
});

addBookToBag();