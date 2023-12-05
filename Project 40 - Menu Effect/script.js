const contianer = document.querySelector(".container");
const line = document.querySelectorAll(".line");

contianer.addEventListener("click", () => {
  line.forEach((e) => {
    if (e.classList.contains("open")) {
      e.classList.remove("open");
      e.classList.add("close");
    } else {
      e.classList.add("open");
      e.classList.remove("close");
    }
  });
});
