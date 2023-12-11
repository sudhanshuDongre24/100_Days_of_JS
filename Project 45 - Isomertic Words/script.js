const words = document.getElementById("words");
let isometric = "";

for (let i = 0; i < 20; i++) {
  isometric += (isometric ? "," : " ") + -i * 1 + "px " + i * 1 + "px 0 #000";
}

words.style.textShadow = isometric;
