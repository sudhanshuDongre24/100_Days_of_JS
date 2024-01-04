const j = document.getElementById("j");
const u = document.getElementById("u");
const p = document.getElementById("p");
const y = document.getElementById("y");
const t = document.getElementById("t");
const e = document.getElementById("e");
const r = document.getElementById("r");
const jupyter = document.getElementById("complete");

j.addEventListener("click", () => {
  j.style.display = "none";
  u.style.display = "block";
});
u.addEventListener("click", () => {
  u.style.display = "none";
  p.style.display = "block";
});
p.addEventListener("click", () => {
  p.style.display = "none";
  y.style.display = "block";
});
y.addEventListener("click", () => {
  y.style.display = "none";
  t.style.display = "block";
});
t.addEventListener("click", () => {
  t.style.display = "none";
  e.style.display = "block";
});
e.addEventListener("click", () => {
  e.style.display = "none";
  r.style.display = "block";
});
r.addEventListener("click", () => {
  r.style.display = "none";
  jupyter.style.display = "block";
});

jupyter.addEventListener("click", () => {
  jupyter.style.display = "none";
  j.style.display = "block";
});
