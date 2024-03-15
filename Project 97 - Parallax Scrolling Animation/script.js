window.addEventListener("scroll", (e) => {
  e.preventDefault();
  document.querySelector(".Home h1").style.marginTop =
    window.scrollY * 1.8 + "px";

  document.querySelector(".Home .leaf2").style.marginLeft =
    window.scrollY * 1.8 + "px";
  document.querySelector(".Home .leaf2").style.marginTop =
    window.scrollY * -1 + "px";

  document.querySelector(".Home .hill3").style.marginRight =
    window.scrollY * 0.4 + "px";

  document.querySelector(".Home .hill2").style.marginLeft =
    window.scrollY * 0.4 + "px";
});
