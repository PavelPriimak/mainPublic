function addBookToBag () {
  const buttons = document.querySelectorAll(".main__container_bookItem_content_button");
  let iconBag;
  buttons.forEach(btn => 
    btn.addEventListener("click", function changeBagSign(event) {
      if(event) {
        this.btn.innerHTML = "<button>in the cart</button>";
        iconBag = document.querySelector(".shop-bag");
        iconBag.classList.remove(".shop-bag");
        iconBag.classList.add("shop-bag::after.added");
      } else {
        this.btn.innerHTML = "<button>buy now</button>";
        iconBag.classList.remove("shop-bag");
        iconBag.classList.add("shop-bag::after.added");
      }
      return;
    })
  )
}

export {addBookToBag};