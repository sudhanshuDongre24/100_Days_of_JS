const dubaiText = document.getElementById("dubaitext");
const burjKhalifa = document.getElementById("burjkhalifa");
const stars = document.getElementById("stars");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  dubaiText.style.marginLeft = value * -2 + "px";
  burjKhalifa.style.marginBottom = value * -3 + "px";
  stars.style.marginBottom = value * -1 + "px";
});
