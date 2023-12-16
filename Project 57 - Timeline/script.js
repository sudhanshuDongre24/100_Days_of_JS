const timeline = document.getElementById("timeline");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

console.log(timeline, prev, next, circles);
let step = 1;

function main() {
  circles.forEach((circle, index) => {
    if (index < step) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  timeline.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (step === 1) {
    prev.classList.add("disabled");
  } else if (step === circles.length) {
    next.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
  }
}

next.addEventListener("click", () => {
  step++;

  if (step > circles.length) {
    step = circles.length;
  }

  main();
});
prev.addEventListener("click", () => {
  step--;

  if (step < 1) {
    step = 1;
  }

  main();
});
