let count = 1000;
const container = document.querySelector(".container");
let i = 0;

while (i < count) {
  let singleParticle = document.createElement("i");

  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  let size = Math.random() * 10;

  singleParticle.style.left = x + "px";
  singleParticle.style.top = y + "px";
  singleParticle.style.width = 1 + size + "px";
  singleParticle.style.height = 1 + size + "px";
  singleParticle.style.animationDuration = 5 + size + "s";
  singleParticle.style.animationDelay = -size + "s";
  container.appendChild(singleParticle);
  i++;
}
