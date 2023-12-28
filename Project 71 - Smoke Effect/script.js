const text = document.querySelector("#text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const alpha = document.querySelectorAll("span");

for (let i = 0; i < alpha.length; i++) {
  alpha[i].addEventListener("mouseover", () => {
    alpha[i].classList.add("active");
  });
}
