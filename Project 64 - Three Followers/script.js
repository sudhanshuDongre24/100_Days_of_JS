let tau = Math.PI * 2;

let speed = 0.05;
let breaking = 0.15;

let canvas, ctx, widthOfCanvas, heightOfCanvas;

let personToFollow = {
  x: 0,
  y: 0,
  render: function () {
    specificationOfCircles(this.x, this.y, "#1E00FF");
  },
};

let firstCircle = {
  positionAtX: 0,
  positionAtY: 0,
  velocityAtX: 0,
  velocityAtY: 0,
  accelerationAtX: 0,
  accelerationAtY: 0,
};

let secondCircle = {
  positionAtX: 0,
  positionAtY: 0,
  velocityAtX: 0,
  velocityAtY: 0,
  accelerationAtX: 0,
  accelerationAtY: 0,
};

let thirdCircle = {
  positionAtX: 0,
  positionAtY: 0,
  velocityAtX: 0,
  velocityAtY: 0,
  accelerationAtX: 0,
  accelerationAtY: 0,
};

firstCircle.render = function () {
  specificationOfCircles(this.positionAtX, this.positionAtY, "#FF0061");
};

firstCircle.update = function () {
  this.accelerationAtX = (personToFollow.x - this.positionAtX) * speed;
  this.accelerationAtY = (personToFollow.y - this.positionAtY) * speed;

  this.velocityAtX += this.accelerationAtX;
  this.velocityAtY += this.accelerationAtY;
  this.velocityAtX *= 0.9 - breaking;
  this.velocityAtY *= 0.9 - breaking;

  this.positionAtX += this.velocityAtX;
  this.positionAtY += this.velocityAtY;
};

secondCircle.render = function () {
  specificationOfCircles(this.positionAtX, this.positionAtY, "#E1FF00");
};

secondCircle.update = function () {
  this.accelerationAtX = (personToFollow.x - this.positionAtX) * speed;
  this.accelerationAtY = (personToFollow.y - this.positionAtY) * speed;

  this.velocityAtX += this.accelerationAtX;
  this.velocityAtY += this.accelerationAtY;
  this.velocityAtX *= 0.7 - breaking;
  this.velocityAtY *= 0.7 - breaking;

  this.positionAtX += this.velocityAtX;
  this.positionAtY += this.velocityAtY;
};

thirdCircle.render = function () {
  specificationOfCircles(this.positionAtX, this.positionAtY, "#00FF9E");
};

thirdCircle.update = function () {
  this.accelerationAtX = (personToFollow.x - this.positionAtX) * speed;
  this.accelerationAtY = (personToFollow.y - this.positionAtY) * speed;

  this.velocityAtX += this.accelerationAtX;
  this.velocityAtY += this.accelerationAtY;
  this.velocityAtX *= 0.8 - breaking;
  this.velocityAtY *= 0.8 - breaking;

  this.positionAtX += this.velocityAtX;
  this.positionAtY += this.velocityAtY;
};

document.addEventListener("DOMContentLoaded", letsGetStarted, false);

function letsGetStarted() {
  document.body.onmousemove = function (e) {
    personToFollow.x = e.pageX;
    personToFollow.y = e.pageY;
  };

  canvas = document.createElement("canvas");

  widthOfCanvas = canvas.width = window.innerWidth - 20;
  heightOfCanvas = canvas.height = window.innerHeight - 20;

  ctx = canvas.getContext("2d");

  firstCircle.positionAtX = personToFollow.x = widthOfCanvas / 2;
  firstCircle.positionAtY = personToFollow.y = heightOfCanvas / 2;
  firstCircle.positionAtY += 100;
  firstCircle.velocityAtX = -5;
  firstCircle.velocityAtY = 2;

  secondCircle.positionAtX = personToFollow.x = widthOfCanvas / 2;
  secondCircle.positionAtY = personToFollow.y = heightOfCanvas / 2;
  secondCircle.positionAtY += 100;
  secondCircle.velocityAtX = -5;
  secondCircle.velocityAtY = 2;

  thirdCircle.positionAtX = personToFollow.x = widthOfCanvas / 2;
  thirdCircle.positionAtY = personToFollow.y = heightOfCanvas / 2;
  thirdCircle.positionAtY += 100;
  thirdCircle.velocityAtX = -5;
  thirdCircle.velocityAtY = 2;

  /* console.log("first: ", firstCircle);
  console.log("second: ", secondCircle);
  console.log("third: ", thirdCircle);
 */
  document.body.appendChild(canvas);
  animatingAllObjects();
}

function animatingAllObjects() {
  ctx.clearRect(0, 0, widthOfCanvas, heightOfCanvas);

  firstCircle.update();
  secondCircle.update();
  thirdCircle.update();

  personToFollow.render();

  firstCircle.render();
  secondCircle.render();
  thirdCircle.render();

  requestAnimationFrame(animatingAllObjects);
}

function specificationOfCircles(x, y, fillstyle) {
  ctx.fillStyle = fillstyle;
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, tau);
  ctx.fill();
  ctx.closePath();
}
