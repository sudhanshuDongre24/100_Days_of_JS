window.requestAnimFrame =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const canvas = document.getElementById("canvasId");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let r = 0;

(function loop(time) {
  requestAnimFrame(loop);

  ctx.fillStyle =
    "rgb(" +
    Math.floor(255 * Math.random()) +
    "," +
    Math.floor(255 * Math.random()) +
    "," +
    Math.floor(255 * Math.random()) +
    ")";

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();

  x = canvas.width / 2 + r * Math.cos(time / 100);
  y = canvas.height / 2 + r * Math.sin(time / 100);

  r++;
})();
