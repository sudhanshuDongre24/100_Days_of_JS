document.body.addEventListener("mousemove", spotlight);

function spotlight(e) {
  let x = e.pageX;
  let y = e.pageY;

  const spotlight = document.querySelector(".spotlight");
  spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 25%)`;
}
