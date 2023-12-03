document.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".layer");

  layers.forEach((layer) => {
    let movement = layer.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * movement) / 250;
    let y = (window.innerWidth - e.pageX * movement) / 250;

    layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
  });
});
