const optionMenu = document.querySelector(".by_default");
const listItems = document.querySelectorAll(".options li");
const optionMenuItem = optionMenu.parentElement;

optionMenu.addEventListener("click", () => {
  optionMenuItem.classList.toggle("active");
});

listItems.forEach((e) => {
  let a = e.outerHTML;
  e.addEventListener("click", () => {
    optionMenu.innerHTML = a;
    optionMenuItem.classList.remove("active");
  });
});
