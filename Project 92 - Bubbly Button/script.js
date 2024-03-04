let animateButton = function (e) {
  e.preventDefault();
  console.log(e);

  e.target.classList.remove("animate");
  e.target.classList.add("animate");

  setTimeout(() => {
    e.target.classList.remove("animate");
  }, 500);
};

const bubblyButton = document.querySelector(".button");
console.log(bubblyButton);

bubblyButton.addEventListener("click", animateButton, false);
