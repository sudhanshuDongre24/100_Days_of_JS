const game = document.getElementById("game");
const btn = document.getElementById("btn");

for (let i = 25; i > 0; i--) {
  let slider = document.createElement("div");
  slider.setAttribute("class", "slider animate");
  slider.setAttribute("id", "slider" + i);
  game.append(slider);
}

let sliderWidth = 400;

function slidingStops(slider) {
  let current = document.getElementById("slider".concat(slider));
  let aboveCurrent = document.getElementById("slider".concat(slider + 1));

  if (slider == 1) {
    var belowCurrent = current;
  } else {
    var belowCurrent = document.getElementById("slider".concat(slider - 1));
  }

  let left = widow.getComputedStyle(current).getPropertyValue("left");
  current.classList.remove("animate");
  current.style.left = left;
  left = parseInt(left);
  let width = parseInt(
    window.getComputedStyle(current).getPropertyValue("width")
  );

  let leftBelow = parseInt(
    window.getComputedStyle(belowCurrent).getPropertyValue("left")
  );

  let diff = left - leftBelow;
  let absDiif = Math.abs(diff);

  if (diff > width || diff < -width) {
    let score = "Game Over \n Your Score is: ".concat(slider - 1);
    alert(score);
    Location.reload();
  }

  if (diff > 0) {
    left += absDiif;
  } else {
    left -= diff;
    current.style.left = left.toString().concat("px");
  }

  let offSet = (width - absDiif).toString().concat("px");

  current.style.width = offSet;
  aboveCurrent.style.width = offSet;
  aboveCurrent.style.visiblity = "visible";

  sliderWidth += absDiif;
  document.documentElement.style.setProperty("--width", sliderWidth + "px");

  var onclick = "slidingStops(" + (slider + 1) + ")";
  btn.setAttribute("onclick", onclick);
}
