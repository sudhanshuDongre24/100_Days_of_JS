const content = document.querySelector(".content");
let longS = "";

for (let i = 0; i < 500; i++) {
  longS += (longS ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #E8CEBF";
}

content.style.textShadow = longS;
