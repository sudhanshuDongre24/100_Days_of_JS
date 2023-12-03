const svgPath = document.querySelectorAll("#svg path");

for (let i = 0; i < svgPath.length; i++) {
  console.log(`Letter ${i} is ${svgPath[i].getTotalLength()}`);
}
