const topContainer = document.querySelector(".top");
const bottomContainer = document.querySelector(".bottom");
const leftContainer = document.querySelector(".left");
const rightContainer = document.querySelector(".right");

window.onload = () => {
  let test = setInterval("app.start()", 10);
};

let app = {
  time: 0,
  end: 8,

  start: function () {
    let step = this.end / 4;

    if (this.time <= step * 1) {
      let percent = (this.time / step) * 100;
      topContainer.style.width = percent + "%";
    }

    if (this.time > step * 1 && this.time <= step * 2) {
      let percent = (this.time / (step * 2)) * 200 - 100;
      rightContainer.style.height = percent + "%";
    }
    if (this.time > step * 2 && this.time <= step * 3) {
      let percent = (this.time / (step * 3)) * 300 - 200;
      bottomContainer.style.width = percent + "%";
    }
    if (this.time > step * 3 && this.time <= step * 4) {
      let percent = (this.time / (step * 4)) * 400 - 300;
      leftContainer.style.height = percent + "%";
    }
    this.time += 0.01;
  },
};
