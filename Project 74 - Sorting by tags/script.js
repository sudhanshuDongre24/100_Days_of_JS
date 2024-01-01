const red = document.querySelectorAll(".red");
const blue = document.querySelectorAll(".blue");
const yellow = document.querySelectorAll(".yellow");

const redButton = document.querySelector(".Red");
const blueButton = document.querySelector(".Blue");
const yellowButton = document.querySelector(".Yellow");
const allButton = document.querySelector(".all");

redButton.addEventListener("click", () => {
  red.forEach((e) => {
    e.style.display = "block";
  });

  blue.forEach((e) => {
    console.log("yes");
    e.style.display = "none ";
  });

  yellow.forEach((e) => {
    e.style.display = "none";
  });
});

yellowButton.addEventListener("click", () => {
  red.forEach((e) => {
    e.style.display = "none";
  });

  blue.forEach((e) => {
    e.style.display = "none ";
  });

  yellow.forEach((e) => {
    e.style.display = "block";
  });
});

blueButton.addEventListener("click", () => {
  red.forEach((e) => {
    e.style.display = "none";
  });

  blue.forEach((e) => {
    e.style.display = "block";
  });

  yellow.forEach((e) => {
    e.style.display = "none";
  });
});

allButton.addEventListener("click", () => {
  red.forEach((e) => {
    e.style.display = "block";
  });

  blue.forEach((e) => {
    e.style.display = "block";
  });

  yellow.forEach((e) => {
    e.style.display = "block";
  });
});
