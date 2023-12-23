const container = document.querySelector(".container");
const leaf = document.getElementById("leaf");

function leafCreation(color) {
  let newLeaf = document.createElement("div");
  newLeaf.setAttribute("class", "leaf");
  newLeaf.style.backgroundColor = "#ff0061";
  newLeaf.classList.add("animation");
  container.append(newLeaf);
}

for (let i = 0; i < 50; i++) {
  leafCreation("#ff0061");
}

let allLeaf = document.querySelectorAll(".leaf");

allLeaf.forEach((singleLeaf, idx) => {
  var timeline = new TimelineMax({});
  idx += 2;
  let rotate = (360 / 18) * idx;

  timeline.to(singleLeaf, 7, {
    rotation: rotate + "deg",
    opacity: 0.1,
    backgroundColor: "#E1FF00",
  });
});
