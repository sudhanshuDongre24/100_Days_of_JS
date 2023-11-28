let mouseMovement = document.querySelector(".cursor");
let navbar = document.querySelectorAll(".nav-links li");

window.addEventListener("mousemove", (e) => {
  mouseMovement.style.top = e.pageY + "px";
  mouseMovement.style.left = e.pageX + "px";
});

navbar.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseMovement.classList.add("link-animate");
    link.classList.add("link-hovering");
  });

  link.addEventListener("mouseleave", () => {
    mouseMovement.classList.remove("link-animate");
    link.classList.remove("link-hovering");
  });
});
