const character = document.getElementById("char");
const block = document.getElementById("block");
console.log(character, block);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    console.log("yes");
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});

let counter = 0;

block.addEventListener("animationiteration", () => {
  let random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px";
  counter++;
});

function moveLeft() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}
function moveRight() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}

setInterval(function () {
  let characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  let blockTop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );

  if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    alert(`Game over \nYour score is : ${counter}`);
    block.style.animation = "none";
  }
}, 1);

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);
