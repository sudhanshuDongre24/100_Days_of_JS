setInterval(particles, 300);

function particles() {
  const div = document.querySelector("div");
  const particles = document.createElement("span");

  let sizeOfParticles = Math.random() * 50;

  particles.style.width = 10 + sizeOfParticles + "px";
  particles.style.height = 10 + sizeOfParticles + "px";

  particles.style.top = Math.random() * innerHeight + "px";
  particles.style.left = Math.random() * innerWidth + "px";

  div.appendChild(particles);

  setTimeout(() => {
    particles.remove();
  }, 2000);
}
