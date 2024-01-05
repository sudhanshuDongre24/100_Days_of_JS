const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const ele = document.getElementById("inputEle");
const input = document.querySelector(".input");

addBtn.addEventListener("click", () => {
  let element = document.createElement("div");

  element.style.backgroundColor = "#333";
  element.style.color = "#fff";
  element.style.margin = "0.5rem";
  element.style.padding = "0.5rem";
  element.style.borderRadius = "6px";
  if (ele.value == "") {
    return;
  }
  let val = document.createTextNode(ele.value);

  ele.value = "";
  element.appendChild(val);
  input.appendChild(element);
});

deleteBtn.addEventListener("click", () => {
  input.innerHTML = "";
});
