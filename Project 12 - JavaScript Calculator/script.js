const resultScreen = document.querySelector(".result-screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    let value = e.target.dataset.num;
    resultScreen.value += value;
  });
});

equal.addEventListener("click", (e) => {
  if (resultScreen.value === "") {
    resultScreen.vaue = "Please enter a value";

    setTimeout(() => {
      resultScreen.value = "";
    }, 5000);
  } else {
    let answer = eval(resultScreen.value);
    resultScreen.value = answer;
  }
});

clear.addEventListener("click", (e) => {
  resultScreen.value = "";
});
