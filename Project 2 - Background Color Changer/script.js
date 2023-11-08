const button = document.querySelector("button");
const body = document.querySelector("body");

const colors = [
  "blue",
  "green",
  "pink",
  "yellow",
  "red",
  "brown",
  "purple",
  "orange",
  "gold",
  "aqya",
  "white",
  "gray",
  "azure",
];

function changeTheBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}

body.style.backgroundColor = "purple";

button.addEventListener("click", changeTheBackground);
