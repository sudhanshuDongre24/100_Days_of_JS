const btn = document.querySelector(".submit-btn");
const body = document.body;

btn.addEventListener("click", () => {
  btn.innerText = "Submitted";
  btn.style.backgroundColor = "#81ff00";
  btn.style.color = "#333";
  btn.style.animation = "animate 0.5s ease";

  body.style.backgroundColor = "#7e00ff";
});
