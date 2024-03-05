const el = document.documentElement;

el.addEventListener("mousemove", (e) => {
  el.style.setProperty("--x", e.clientX + "px");
  el.style.setProperty("--y", e.clientY + "px");
});
