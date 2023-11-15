const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");

function countedCharacter() {
  const text = textarea.value;
  const textLength = text.length;
  counter.innerText = `${textLength}`;
}
