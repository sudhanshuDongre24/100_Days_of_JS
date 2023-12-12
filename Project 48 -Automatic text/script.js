const text = document.getElementById("text");
let sentence = "This is the HULK!";

let index = 0;
let speedChanger = 250;

writingSentence();

function writingSentence() {
  text.innerText = sentence.slice(0, index);
  index++;

  if (index > sentence.length) {
    index = 0;
  }
  setTimeout(writingSentence, speedChanger);
}
