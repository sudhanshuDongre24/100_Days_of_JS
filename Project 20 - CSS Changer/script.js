const inputs = document.querySelectorAll(".css-controller input");

console.log(inputs);

inputs.forEach((input) => input.addEventListener("change", update));
inputs.forEach((input) => input.addEventListener("mousemove", update));

function update() {
  console.log("yes");
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
