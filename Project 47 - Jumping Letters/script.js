const letters = document.querySelectorAll(".letters span");

letters.forEach((letter, index) => {
  letter.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });

  letter.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

});
