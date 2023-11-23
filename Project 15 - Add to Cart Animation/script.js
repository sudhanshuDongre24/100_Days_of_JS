const btn = document.getElementById("addToCart");
const cart = document.getElementById("cartDiv");
let cartSum = cart.dataset.totalitem;
let newSum = parseInt(cartSum) + 1;

btn.addEventListener("click", () => {
  btn.classList.add("sendtocart");
  setTimeout(() => {
    btn.classList.remove("sendtocart");
    cart.setAttribute("data-totalitem", newSum);
    cart.classList.add("shake");
    setTimeout(() => {
      cart.classList.remove("shake");
    }, 500);
  }, 1000);

  newSum++;
});
