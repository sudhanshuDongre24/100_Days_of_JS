const colorContainer = document.querySelector(".colorContainer");
const colorBtn = document.querySelector(".newColorBtn");

window.onload = function colorTheRec() {
  allRec.forEach((e) => {
    let newColorCode = colorCodeInHex();
    e.style.backgroundColor = newColorCode;
    e.innerHTML = "rgb(" + hexToRgb(newColorCode) + ")";
  });
};
for (let i = 0; i < 20; i++) {
  const rec = document.createElement("span");
  rec.classList.add("rec");
  colorContainer.appendChild(rec);
}

let allRec = document.querySelectorAll(".rec");

function colorCodeInHex() {
  let char = "abcdef1234567890";
  let codeLen = 6;
  let colorCode = "";

  for (let i = 0; i < codeLen; i++) {
    let color = Math.floor(Math.random() * char.length);
    colorCode += char.substring(color, color + 1);
  }

  return "#" + colorCode;
}

colorBtn.onclick = function colorTheRec() {
  allRec.forEach((e) => {
    let newColorCode = colorCodeInHex();
    e.style.backgroundColor = newColorCode;
    e.innerHTML = "rgb(" + hexToRgb(newColorCode) + ")";
  });
};

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
