const container = document.getElementById("container");

let greenColorCodes = [
  "#7CFC00",
  "#78AB46",
  "#3B5323",
  "#458B00",
  "#BCED91",
  "#61B329",
  "#5DFC0A",
  "#4CBB17",
  "#4AC948",
  "#00EE00",
  "#33FF33",
  "#00C957",
];

const numberOfSquares = 182;

for (let i = 0; i < numberOfSquares; i++) {
  const activity = document.createElement("div");
  activity.classList.add("activity");

  activity.addEventListener("mouseover", () => {
    addColor(activity);
  });
  activity.addEventListener("mouseout", () => {
    stickColor(activity);
  });

  container.appendChild(activity);
}

function addColor(x) {
  const gettingColor = greenColor();
  x.style.backgroundColor = gettingColor;
  x.style.boxShadow = `0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
}

function stickColor(x) {
  const gettingColor = greenColor();
  x.style.backgroundColor = `${gettingColor}`;
  x.style.boxShadow = `0 0 2px rgb(151,151,151)`;
}

function greenColor() {
  return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}
