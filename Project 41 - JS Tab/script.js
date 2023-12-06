const body = document.body;

const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const tabs = document.querySelectorAll(".link");
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");

active.classList.add("react-icon");
tabOne.classList.add("react-icon");
icon.innerHTML = `<i class="fab fa-react"></i>`;

tabOne.classList.add("tabOne");

tabOne.addEventListener("click", () => {
  body.style.backgroundColor = "#00d8ff";

  icon.innerHTML = `<i class="fab fa-react"></i>`;

  tabOne.classList.add("tabOne");
  tabTwo.classList.remove("tabOne");
  tabThree.classList.remove("tabOne");

  active.classList.add("react-icon");
  active.classList.remove("vue-icon");
  active.classList.remove("angular-icon");

  tabOne.classList.add("react-icon");
  tabTwo.classList.remove("vue-icon");
  tabThree.classList.remove("angular-icon");
});

tabTwo.addEventListener("click", () => {
  body.style.backgroundColor = "#42b883";

  icon.innerHTML = `<i class="fab fa-vuejs"></i>`;

  tabOne.classList.remove("tabOne");
  tabTwo.classList.add("tabOne");
  tabThree.classList.remove("tabOne");

  active.classList.remove("react-icon");
  active.classList.add("vue-icon");
  active.classList.remove("angular-icon");

  tabOne.classList.remove("react-icon");
  tabTwo.classList.add("vue-icon");
  tabThree.classList.remove("angular-icon");
});

tabThree.addEventListener("click", () => {
  body.style.backgroundColor = "#b52e31";

  icon.innerHTML = `<i class="fab fa-angular"></i>`;

  tabOne.classList.remove("tabOne");
  tabTwo.classList.remove("tabOne");
  tabThree.classList.add("tabOne");

  active.classList.remove("react-icon");
  active.classList.remove("vue-icon");
  active.classList.add("angular-icon");

  tabOne.classList.remove("react-icon");
  tabTwo.classList.remove("vue-icon");
  tabThree.classList.add("angular-icon");
});
