let requestFrameAnimation =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

window.requestAnimationFrame = requestFrameAnimation;

let canvas = document.getElementById("canvasId");
let w = window.innerWidth;
let h = window.innerHeight;
let numOfCircle = 25;
let ctx = canvas.getContext("2d");
let circleArr = [];

function Circle() {
  this.x = Math.random() * w;
  this.y = Math.random() * h;

  this.speed = 0.5;
  this.color = "#f7ce94";
  this.size = Math.random() * (h * 0.025);
  this.radius = Math.floor(Math.random() * 20);
}

function draw() {
  let circles;
  canvas.width = w;
  canvas.height = h;

  for (let i = 0; i < circleArr.length; i++) {
    circles = circleArr[i];
    circles.y -= circles.speed;
    ctx.beginPath();
    ctx.moveTo(circles.x, circles.y);
    ctx.arc(circles.x, circles.y, circles.radius, Math.PI * 2, 0, false);

    ctx.fillStyle = circles.color;
    ctx.fill();

    if (circles.y < 0) {
      circles.y = Math.random() * h;
    }
  }
}

for (let i = 0; i < numOfCircle; i++) {
  circleArr.push(new Circle());
}

setInterval(draw, 10);
