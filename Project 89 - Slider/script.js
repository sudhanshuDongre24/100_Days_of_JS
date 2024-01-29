let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

const carousalDom = document.querySelector(".carousal");
const sliderDom = carousalDom.querySelector(".carousal .list");
const thumbnailBorderDom = document.querySelector(".carousal .thumbnail");
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
const timeDom = document.querySelector(".carousal .time");

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

function showSlider(type) {
  let sliderItemsDom = sliderDom.querySelectorAll(".carousal .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousal .thumbnail .item"
  );

  if (type === "next") {
    sliderDom.appendChild(sliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carousalDom.classList.add("next");
  } else {
    sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(
      thumbnailItemsDom[thumbnailBorderDom.length - 1]
    );
    carousalDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousalDom.classList.remove("next");
    carousalDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
