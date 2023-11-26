const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const addSeconds = document.querySelector(".seconds");
const addMili = document.querySelector(".mili");

let seconds = 0;
let mili = 0;

let interval;

startBtn.onclick = function () {
  clearInterval(interval);
  interval = setInterval(start, 10);
};

stopBtn.onclick = function () {
  clearInterval(interval);
};

resetBtn.onclick = function () {
  clearInterval(interval);
  seconds = "00";
  mili = "00";
  addSeconds.innerHTML = seconds;
  addMili.innerHTML = mili;
};

function start() {
  mili++;

  if (mili > 9) {
    addMili.innerHTML = mili;
  }

  if (mili < 9) {
    addMili.innerHTML = "0" + mili;
  }

  if (mili > 99) {
    seconds++;
    addSeconds.innerHTML = "0" + seconds;
    mili = 0;
    addMili.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    addSeconds.innerHTML = seconds;
  }
}
